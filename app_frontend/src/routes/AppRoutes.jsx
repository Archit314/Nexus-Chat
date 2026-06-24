import { Routes, Route, Navigate } from 'react-router-dom';
import { DesktopLayout } from '../layouts/DesktopLayout';
import Home from '../pages/Home';
import Messages from '../pages/Messages';
import Contacts from '../pages/Contacts';
import Requests from '../pages/Requests';
import Archived from '../pages/Archived';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route element={<DesktopLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="messages" element={<Messages />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="requests" element={<Requests />} />
        <Route path="archived" element={<Archived />} />
      </Route>
      <Route path="/auth">
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
      {/* Legacy redirects */}
      <Route path="/desktop/*" element={<Navigate to="/home" replace />} />
      <Route path="/mobile/*" element={<Navigate to="/home" replace />} />
      <Route path="/auth/sign-in-mobile" element={<Navigate to="/auth/sign-in" replace />} />
      <Route path="/auth/sign-up-mobile" element={<Navigate to="/auth/sign-up" replace />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
