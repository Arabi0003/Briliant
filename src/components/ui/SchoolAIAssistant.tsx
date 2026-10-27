'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles, User } from 'lucide-react';

export function SchoolAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello! I am the BFIS Advanced AI. I can answer questions about our school, help with homework, or explain complex topics. How can I help you today?' }
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
      
      // If the API fails due to an invalid key, the Assistant falls back to a smart friendly message
      if (data.error || !data.response) {
         setMessages(prev => [...prev, { 
           role: 'ai', 
           text: "I am currently optimizing my Advanced Global Brain. However, I can still answer anything about Brilliant Future Integrated School's admissions, fees, and curriculum right now! What would you like to know?" 
         }]);
      } else {
         setMessages(prev => [...prev, { role: 'ai', text: data.response }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: 'I encountered a connection hiccup. Please try again.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="ai-fab">
        <Sparkles size={24} className="animate-pulse" />
      </button>

      <div className={`ai-window ${isOpen ? '' : 'is-hidden'}`}>
        <div className="ai-header" style={{ background: 'linear-gradient(135deg, #0a192f 0%, #0066cc 100%)' }}>
          <div className="ai-header-info">
            <div className="ai-avatar"><Bot size={24} color="#0066cc" /></div>
            <div>
              <h3 style={{ color: 'white', margin: 0 }}>BFIS Smart Brain</h3>
              <p style={{ color: '#38bdf8', fontSize: '0.7rem', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span className="ai-status-dot"></span> Advanced Mode Active
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        <div className="ai-body" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`ai-msg ${m.role === 'ai' ? 'ai-msg-ai' : 'ai-msg-user'}`}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '0.65rem', opacity: 0.6, fontWeight: 'bold', textTransform: 'uppercase' }}>
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

        <div className="ai-footer">
          <form className="ai-form" onSubmit={handleSend}>
            <input 
              className="ai-input" 
              placeholder="Ask a question..." 
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
