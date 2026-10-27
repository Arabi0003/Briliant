'use client';

import React, { useState } from 'react';
import { User, Users, Briefcase, ShieldCheck, Lock } from 'lucide-react';

interface AuthLoginCardProps {
  role: 'Student' | 'Parent' | 'Staff' | 'Admin';
  title: string;
  subtitle: string;
}

export function AuthLoginCard({ role, title, subtitle }: AuthLoginCardProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [shake, setShake] = useState(false);

  const getIcon = () => {
    switch (role) {
      case 'Student': return <User size={32} />;
      case 'Parent': return <Users size={32} />;
      case 'Staff': return <Briefcase size={32} />;
      case 'Admin': return <ShieldCheck size={32} />;
      default: return <Lock size={32} />;
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      triggerError();
      return;
    }

    setStatus('loading');
    
    // Simulate network request (Mock authentication logic)
    setTimeout(() => {
      // Intentionally trigger wrong credentials vibration for demonstration
      triggerError();
    }, 1800);
  };

  const triggerError = () => {
    setStatus('error');
    setShake(true);
    // Remove the shake class after animation finishes so it can be re-triggered
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className={`auth-card ${shake ? 'auth-shake' : ''}`}>
      {/* Centered Circular Watermark */}
      <div className="auth-watermark"></div>

      <div className="auth-content">
        <div className="auth-header">
          <div className="auth-icon-wrap">
            {getIcon()}
          </div>
          <h2 className="auth-title">{title}</h2>
          <p className="auth-subtitle">{subtitle}</p>
        </div>

        {status === 'error' && (
          <div className="auth-error">
            Invalid credentials. Please check your Student/Staff ID and try again.
          </div>
        )}

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="auth-input-group">
            <label className="auth-label" htmlFor="username">
              {role === 'Parent' ? 'Phone Number / Email' : `${role} ID / Username`}
            </label>
            <input
              type="text"
              id="username"
              className="auth-input"
              placeholder="Enter your ID..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={status === 'loading'}
            />
          </div>

          <div className="auth-input-group">
            <label className="auth-label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="auth-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={status === 'loading'}
            />
          </div>

          <button 
            type="submit" 
            className="auth-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <span className="auth-spinner"></span>
            ) : (
              <>
                <Lock size={18} />
                Secure Login
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
