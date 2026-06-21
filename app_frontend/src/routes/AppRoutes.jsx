import { Routes, Route, Navigate } from 'react-router-dom';
import { DesktopLayout } from '../layouts/DesktopLayout';
import { MobileLayout } from '../layouts/MobileLayout';
import Home from '../pages/desktop/Home';
import Messages from '../pages/desktop/Messages';
import Contacts from '../pages/desktop/Contacts';
import Requests from '../pages/desktop/Requests';
import Archived from '../pages/desktop/Archived';
import MobileHome from '../pages/mobile/Home';
import MobileContacts from '../pages/mobile/Contacts';
import MobileMessages from '../pages/mobile/Messages';
import MobileArchived from '../pages/mobile/Archived';
import SignInDesktop from '../pages/auth/SignInDesktop';
import SignInMobile from '../pages/auth/SignInMobile';
import SignUpDesktop from '../pages/auth/SignUpDesktop';
import SignUpMobile from '../pages/auth/SignUpMobile';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/desktop/home" replace />} />
      <Route path="/desktop" element={<DesktopLayout />}>
        <Route index element={<Navigate to="/desktop/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="messages" element={<Messages />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="requests" element={<Requests />} />
        <Route path="archived" element={<Archived />} />
      </Route>
      <Route path="/mobile" element={<MobileLayout />}>
        <Route index element={<Navigate to="/mobile/home" replace />} />
        <Route path="home" element={<MobileHome />} />
        <Route path="contacts" element={<MobileContacts />} />
        <Route path="messages" element={<MobileMessages />} />
        <Route path="archived" element={<MobileArchived />} />
      </Route>
      <Route path="/auth">
        <Route path="sign-in" element={<SignInDesktop />} />
        <Route path="sign-in-mobile" element={<SignInMobile />} />
        <Route path="sign-up" element={<SignUpDesktop />} />
        <Route path="sign-up-mobile" element={<SignUpMobile />} />
      </Route>
      <Route path="*" element={<Navigate to="/desktop/home" replace />} />
    </Routes>
  );
}
