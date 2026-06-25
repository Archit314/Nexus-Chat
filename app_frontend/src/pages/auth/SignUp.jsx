import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp, loading, error, clearError } = useAuth();
  const [form, setForm] = useState({ userName: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    clearError();
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(form);
      navigate('/home');
    } catch {
      /* error is set in context */
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-deep text-on-surface overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <div className="obsidian-flux-bg"></div>
      <div className="mesh-gradient"></div>
      <main className="flex-1 flex items-center justify-center p-gutter relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none hidden lg:block"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full pointer-events-none hidden lg:block"></div>
        <div className="glass-card w-full max-w-md p-8 md:p-10 rounded-xl relative overflow-hidden">
          <div className="scanline"></div>
          <div className="mb-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
              </div>
              <h1 className="font-headline-md text-headline-md text-primary tracking-tight">Nexus Chat</h1>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-[280px] md:max-w-none">Initialize your encrypted identity across the neural mesh.</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm uppercase tracking-widest text-text-secondary flex justify-between" htmlFor="email">
                Email <span className="text-secondary opacity-50 font-label-md">[REQUIRED]</span>
              </label>
              <div className="relative flex items-center input-glow group transition-all duration-300 border border-border-subtle bg-surface-muted/50 rounded-lg overflow-hidden">
                <span className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors">alternate_email</span>
                <input
                  className="w-full bg-transparent border-none py-3.5 pl-12 pr-4 text-primary placeholder:text-on-surface-variant/40 focus:ring-0 focus:outline-none font-label-md"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="user@nexus.network"
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm uppercase tracking-widest text-text-secondary flex justify-between" htmlFor="userName">
                Username <span className="text-secondary opacity-50 font-label-md">[UNIQUE]</span>
              </label>
              <div className="relative flex items-center input-glow group transition-all duration-300 border border-border-subtle bg-surface-muted/50 rounded-lg overflow-hidden">
                <span className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors">fingerprint</span>
                <input
                  className="w-full bg-transparent border-none py-3.5 pl-12 pr-4 text-primary placeholder:text-on-surface-variant/40 focus:ring-0 focus:outline-none font-label-md"
                  id="userName"
                  name="userName"
                  value={form.userName}
                  onChange={handleChange}
                  placeholder="nexus_user_01"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm uppercase tracking-widest text-text-secondary flex justify-between" htmlFor="password">
                Password <span className="text-secondary opacity-50 font-label-md">[ENCRYPTED]</span>
              </label>
              <div className="relative flex items-center input-glow group transition-all duration-300 border border-border-subtle bg-surface-muted/50 rounded-lg overflow-hidden">
                <span className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors">key</span>
                <input
                  className="w-full bg-transparent border-none py-3.5 pl-12 pr-4 text-primary placeholder:text-on-surface-variant/40 focus:ring-0 focus:outline-none font-label-md"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  type={showPassword ? 'text' : 'password'}
                  required
                />
                <button className="pr-4 text-on-surface-variant hover:text-primary transition-colors" type="button" onClick={() => setShowPassword((p) => !p)}>
                  <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
              <div className="flex gap-1 h-1 mt-2">
                <div className="flex-1 bg-secondary rounded-full opacity-30"></div>
                <div className="flex-1 bg-secondary rounded-full opacity-30"></div>
                <div className="flex-1 bg-white/10 rounded-full"></div>
                <div className="flex-1 bg-white/10 rounded-full"></div>
              </div>
            </div>
            {error && (
              <div className="bg-error/10 border border-error/30 rounded-lg px-4 py-3">
                <p className="text-error text-sm font-label-md">{error}</p>
              </div>
            )}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full group relative overflow-hidden bg-primary-container text-on-primary-container font-headline-sm text-headline-sm py-4 rounded-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-transform duration-200 disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">{loading ? 'Creating...' : 'Create Identity'}</span>
                <span className="material-symbols-outlined relative z-10 transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-on-surface-variant font-label-md text-label-md">
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-[16px]">help</span>
                Need Assistance?
              </a>
              <div className="flex items-center gap-4">
                <span className="opacity-30">Existing Identity?</span>
                <a className="text-secondary hover:brightness-125 transition-all font-bold cursor-pointer" onClick={() => navigate('/auth/sign-in')}>Sign In</a>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden xl:flex absolute bottom-8 left-8 flex-col gap-2 font-label-md text-label-md opacity-40">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
            <span>NODE_STATUS: ONLINE</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary-fixed-dim"></div>
            <span>ENCRYPTION: AES-4096-GCM</span>
          </div>
        </div>
        <div className="hidden xl:flex absolute bottom-8 right-8 flex-col gap-2 font-label-md text-label-md opacity-40 text-right">
          <span>UPTIME: 99.9997%</span>
          <span>PING: 14MS (GLOBAL_NET)</span>
        </div>
      </main>
    </div>
  );
}
