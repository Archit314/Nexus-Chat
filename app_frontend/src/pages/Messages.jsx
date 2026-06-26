import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useAuth, useMessages } from '../hooks';

export default function Messages() {
  const { receiverId: rawId } = useParams();
  const receiverId = Number(rawId);
  const location = useLocation();
  const friendName = location.state?.userName || `User #${receiverId}`;
  const { user } = useAuth();
  const { messages, loading, sending, error, fetchConversation, sendMessage } = useMessages();
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    if (receiverId) fetchConversation(receiverId);
  }, [fetchConversation, receiverId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || sending) return;
    setInput('');
    try {
      await sendMessage(receiverId, trimmed);
    } catch {
      /* error is set in hook */
    }
  };

  const isOwn = (msg) => msg.senderId === user?.id;

  return (
    <div className="flex flex-col h-full w-full relative flex-1">
      <header className="flex h-16 px-gutter items-center justify-between glass-card border-b border-border-subtle z-30 sticky top-0 bg-glass-bg">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 p-0.5">
              <div className="w-full h-full rounded-full bg-surface-container"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-background"></div>
          </div>
          <div>
            <h2 className="text-body-md font-bold text-text-primary">{friendName}</h2>
            <span className="text-[11px] text-secondary">Active now</span>
          </div>
        </div>
        <div className="flex items-center gap-1 md:gap-3">
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-all"><span className="material-symbols-outlined text-[20px]">call</span></button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-all"><span className="material-symbols-outlined text-[20px]">videocam</span></button>
          <div className="h-4 w-px bg-border-subtle mx-1"></div>
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/30 transition-all"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto px-4 md:px-container-padding py-8 space-y-8 chat-scrollbar pb-32">
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="flex items-center gap-3 text-on-surface-variant">
              <div className="w-2 h-2 bg-primary-fixed-dim rounded-full animate-pulse"></div>
              <span className="font-label-md uppercase tracking-widest">Decrypting channel...</span>
            </div>
          </div>
        )}
        {error && (
          <div className="flex justify-center">
            <div className="bg-error/10 border border-error/30 rounded-lg px-4 py-2">
              <p className="text-error text-sm font-label-md">{error}</p>
            </div>
          </div>
        )}
        {!loading && messages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <span className="material-symbols-outlined text-[48px] text-on-surface-variant/30">forum</span>
            <p className="text-on-surface-variant mt-4 font-body-md">No messages yet. Start the conversation.</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={msg.id || i}>
            <div className={`flex flex-col gap-3 ${isOwn(msg) ? 'items-end ml-auto' : 'items-start'} max-w-[85%] md:max-w-[70%] ${isOwn(msg) ? '' : ''}`}>
              <div className={`rounded-2xl p-5 relative overflow-hidden group ${isOwn(msg) ? 'glass-card-primary rounded-tr-none border-primary/20' : 'glass-card rounded-tl-none'}`}>
                {!isOwn(msg) && <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>}
                {isOwn(msg) && <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>}
                <p className={`text-body-md relative z-10 leading-relaxed ${isOwn(msg) ? 'text-primary' : 'text-on-surface'}`}>{msg.content}</p>
              </div>
              <span className="text-[10px] text-on-surface-variant/60">{msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</span>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <footer className="floating-bar absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[800px] z-40 px-4 md:px-0">
        <form onSubmit={handleSend} className="glass-card rounded-2xl p-2 flex items-center gap-2 border border-white/10 shadow-2xl float-anim">
          <button type="button" className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">add_circle</span>
          </button>
          <div className="flex-1">
            <input
              className="w-full bg-transparent border-none focus:ring-0 text-body-md text-text-primary placeholder:text-on-surface-variant/50 resize-none py-2"
              placeholder="Message Nexus..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-0.5">
            <button type="button" className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors">
              <span className="material-symbols-outlined">mood</span>
            </button>
            <button type="button" className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">attach_file</span>
            </button>
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="w-10 h-10 flex items-center justify-center bg-primary-container text-on-primary-container rounded-xl hover:brightness-110 active:scale-90 transition-all shadow-lg shadow-primary/20 disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{sending ? 'hourglass_top' : 'send'}</span>
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
}
