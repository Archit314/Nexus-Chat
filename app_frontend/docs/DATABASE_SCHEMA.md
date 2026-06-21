# Nexus Chat — Database Schema Design

---

## 1. Entity Relationships

```
users ──→ friend_requests ←── users
users ──→ contacts      ←── users
users ──→ conversations (created_by)
users ──→ conversation_participants ──→ conversations
users ──→ messages ──→ conversations
users ──→ message_status ──→ messages
```

---

## 2. Table Schemas

### 2.1 `users`

| Column | Type | Constraints |
|---|---|---|
| id | UUID | PK, DEFAULT gen_random_uuid() |
| username | VARCHAR(50) | NOT NULL, UNIQUE |
| email | VARCHAR(255) | NOT NULL, UNIQUE |
| password_hash | VARCHAR(255) | NOT NULL |
| display_name | VARCHAR(100) | |
| avatar_url | TEXT | |
| status | VARCHAR(20) | NOT NULL, DEFAULT 'offline' |
| last_seen_at | TIMESTAMPTZ | |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
| updated_at | TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |

---

### 2.2 `contacts`

| Column | Type | Constraints |
|---|---|---|
| id | UUID | PK, DEFAULT gen_random_uuid() |
| user_id | UUID | NOT NULL, FK → users(id) ON DELETE CASCADE |
| contact_id | UUID | NOT NULL, FK → users(id) ON DELETE CASCADE |
| nickname | VARCHAR(100) | |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |

**Additional:** UNIQUE(user_id, contact_id), CHECK(user_id <> contact_id)

---

### 2.3 `friend_requests`

| Column | Type | Constraints |
|---|---|---|
| id | UUID | PK, DEFAULT gen_random_uuid() |
| sender_id | UUID | NOT NULL, FK → users(id) ON DELETE CASCADE |
| receiver_id | UUID | NOT NULL, FK → users(id) ON DELETE CASCADE |
| status | VARCHAR(20) | NOT NULL, DEFAULT 'pending' |
| message | TEXT | |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
| updated_at | TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |

**Status values:** `pending`, `accepted`, `declined`, `cancelled`

---

### 2.4 `conversations`

| Column | Type | Constraints |
|---|---|---|
| id | UUID | PK, DEFAULT gen_random_uuid() |
| type | VARCHAR(20) | NOT NULL |
| name | VARCHAR(255) | |
| avatar_url | TEXT | |
| created_by | UUID | FK → users(id) ON DELETE SET NULL |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
| updated_at | TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |

**Type values:** `direct`, `group`

---

### 2.5 `conversation_participants`

| Column | Type | Constraints |
|---|---|---|
| conversation_id | UUID | NOT NULL, FK → conversations(id) ON DELETE CASCADE |
| user_id | UUID | NOT NULL, FK → users(id) ON DELETE CASCADE |
| joined_at | TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
| role | VARCHAR(20) | NOT NULL, DEFAULT 'member' |
| is_archived | BOOLEAN | NOT NULL, DEFAULT FALSE |
| archived_at | TIMESTAMPTZ | |
| last_read_at | TIMESTAMPTZ | |

**Primary Key:** (conversation_id, user_id)
**Role values:** `member`, `admin`

---

### 2.6 `messages`

| Column | Type | Constraints |
|---|---|---|
| id | UUID | PK, DEFAULT gen_random_uuid() |
| conversation_id | UUID | NOT NULL, FK → conversations(id) ON DELETE CASCADE |
| sender_id | UUID | NOT NULL, FK → users(id) ON DELETE CASCADE |
| content | TEXT | |
| message_type | VARCHAR(20) | NOT NULL, DEFAULT 'text' |
| media_url | TEXT | |
| reply_to_id | UUID | FK → messages(id) ON DELETE SET NULL |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
| edited_at | TIMESTAMPTZ | |
| is_deleted | BOOLEAN | NOT NULL, DEFAULT FALSE |

**Type values:** `text`, `image`, `file`, `system`

---

### 2.7 `message_status`

| Column | Type | Constraints |
|---|---|---|
| message_id | UUID | NOT NULL, FK → messages(id) ON DELETE CASCADE |
| user_id | UUID | NOT NULL, FK → users(id) ON DELETE CASCADE |
| status | VARCHAR(20) | NOT NULL, DEFAULT 'sent' |
| delivered_at | TIMESTAMPTZ | |
| read_at | TIMESTAMPTZ | |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |

**Primary Key:** (message_id, user_id)
**Status values:** `sent`, `delivered`, `read`
