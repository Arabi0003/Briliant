'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Send, X } from 'lucide-react';

export function SchoolAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'ai', 
      text: 'Welcome to Brilliant Future Integrated School! I am your AI assistant. Ask me about admissions, school fees, location, or academics.' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });
      
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.response }]);
    } catch {
      setMessages(prev => [...prev, { role: 'ai', text: 'Brilliant Future Integrated School is dedicated to Respect, Tolerance and Excellence. Feel free to ask about fees, location, or admissions!' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Action Button with Official School Crest Logo */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="ai-fab"
        aria-label="Open AI Assistant"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '3.75rem',
          height: '3.75rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0066cc 0%, #0a192f 100%)',
          border: '3px solid #d4af37',
          boxShadow: '0 8px 25px rgba(0, 102, 204, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
        <Image 
          src="/briliantlogo.png" 
          alt="BFIS Crest" 
          width={34} 
          height={34} 
          style={{ objectFit: 'contain' }} 
        />
      </button>

      {/* AI Assistant Chat Card Window */}
      <div className={isOpen ? 'ai-window' : 'ai-window is-hidden'}>
        {/* Header containing School Logo & Name */}
        <div className="ai-header" style={{ background: 'linear-gradient(135deg, #0a192f 0%, #0066cc 100%)', padding: '1rem' }}>
          <div className="ai-header-info" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="ai-avatar" style={{ background: '#ffffff', borderRadius: '50%', padding: '4px', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image 
                src="/briliantlogo.png" 
                alt="Brilliant Future Integrated School Crest" 
                width={32} 
                height={32} 
                style={{ objectFit: 'contain' }} 
              />
            </div>
            <div>
              <h3 style={{ color: '#ffffff', margin: 0, fontSize: '1rem', fontWeight: 800 }}>BFIS Smart AI</h3>
              <p style={{ color: '#38bdf8', fontSize: '0.75rem', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span className="ai-status-dot"></span> Online | Instant Answers
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}
            aria-label="Close Assistant"
          >
            <X size={22} />
          </button>
        </div>

        {/* Chat Message Stream */}
        <div className="ai-body" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'ai' ? 'ai-msg ai-msg-ai' : 'ai-msg ai-msg-user'}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '0.65rem', opacity: 0.7, fontWeight: 'bold', textTransform: 'uppercase' }}>
                  {m.role === 'ai' ? 'BFIS AI' : 'You'}
                </span>
                {m.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="ai-msg ai-msg-ai">
              <div className="ai-typing"><span></span><span></span><span></span></div>
            </div>
          )}
        </div>

        {/* Input Field */}
        <div className="ai-footer">
          <form className="ai-form" onSubmit={handleSend}>
            <input 
              className="ai-input" 
              placeholder="Ask about admissions, fees, location..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
            />
            <button type="submit" className="ai-send-btn" disabled={isTyping} style={{ background: '#0066cc' }}>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SchoolAIAssistant;
