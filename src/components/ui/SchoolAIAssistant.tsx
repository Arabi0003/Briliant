"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MessageSquareText, X, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Message = { id: string; role: "ai" | "user"; text: string };

const KNOWLEDGE_BASE = [
  {
    keywords: ["admission", "apply", "enroll", "join"],
    response: "Admissions are currently open! At Brilliant Future Integrated School, we welcome students who share our core values of Respect, Tolerance, and Excellence.\n\nTo begin, you can fill out our Online Admissions Enquiry form on the website. You will need the prospective student's previous academic records and basic identification. Our admissions office will then contact you to schedule a consultation."
  },
  {
    keywords: ["fee", "cost", "pay", "tuition"],
    response: "School fees at BFIS are structured according to the educational section (Primary, Junior Secondary, or Senior Secondary). \n\nBecause fee structures may include distinct provisions for specific learning materials and extracurricular activities, we recommend contacting the main office directly at our phone number or email to receive the most accurate and up-to-date fee schedule for your child's specific entry level."
  },
  {
    keywords: ["where", "location", "address", "find"],
    response: `Brilliant Future Integrated School is proudly located at ${siteConfig.address.full}.\n\nOur campus features modern architecture, secure learning spaces, and is designed to provide a highly conducive environment for your child's academic and personal growth.`
  },
  {
    keywords: ["contact", "phone", "email", "call"],
    response: `You can reach our dedicated support staff easily!\n\n📞 Phone: ${siteConfig.contact.phone}\n✉️ Email: ${siteConfig.contact.email}\n\nOur office hours are Monday to Thursday and Sunday, 7:00 AM to 4:30 PM.`
  },
  {
    keywords: ["subject", "curriculum", "teach", "academic", "class"],
    response: "Our academic framework spans three distinct pathways:\n\n1. Primary Section: Building foundational literacy and numeracy.\n2. Junior Secondary: Expanding broad subject knowledge and independence.\n3. Senior Secondary: Rigorous preparation for external examinations and higher education.\n\nWe emphasize mastery of core subjects alongside vital habits of character and discipline."
  },
  {
    keywords: ["hello", "hi", "hey"],
    response: "Hello! Welcome to Brilliant Future Integrated School. I am your virtual assistant. How can I help you learn more about our community today?"
  }
];

const DEFAULT_RESPONSE = "Thank you for reaching out. Brilliant Future Integrated School is dedicated to providing quality education in Maiduguri.\n\nFor highly specific inquiries regarding this topic, please use our 'Contact Us' page or call the main office directly, and our administrative team will be delighted to assist you further.";

export function SchoolAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "ai", text: "Welcome to Brilliant Future Integrated School! I am the BFIS Smart Assistant. How can I help you today?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const newMsgId = Date.now().toString();
    
    // Add user message
    setMessages(prev => [...prev, { id: newMsgId, role: "user", text: userText }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI "Thinking" Delay (1.5 seconds)
    setTimeout(() => {
      const lowerInput = userText.toLowerCase();
      let foundResponse = DEFAULT_RESPONSE;

      // Advanced local matching logic
      for (const entry of KNOWLEDGE_BASE) {
        if (entry.keywords.some(kw => lowerInput.includes(kw))) {
          foundResponse = entry.response;
          break;
        }
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), role: "ai", text: foundResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <button 
        className="ai-fab" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X size={26} /> : <MessageSquareText size={26} />}
      </button>

      <div className={`ai-window ${isOpen ? "" : "is-hidden"}`}>
        <div className="ai-header">
          <div className="ai-header-info">
            <div className="ai-avatar">
              <Image src="/briliantlogo.png" alt="Crest" width={28} height={28} style={{ objectFit: "contain" }} />
            </div>
            <div>
              <h3>BFIS Assistant</h3>
              <p><span className="ai-status-dot"></span> Online & Ready</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>
            <X size={20} />
          </button>
        </div>

        <div className="ai-body">
          {messages.map(msg => (
            <div key={msg.id} className={`ai-msg ${msg.role === "ai" ? "ai-msg-ai" : "ai-msg-user"}`}>
              {msg.text.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i !== msg.text.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          ))}
          
          {isTyping && (
            <div className="ai-msg ai-msg-ai">
              <div className="ai-typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="ai-footer ai-form" onSubmit={handleSend}>
          <input 
            type="text" 
            className="ai-input" 
            placeholder="Ask about admissions, fees, etc..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isTyping}
          />
          <button type="submit" className="ai-send-btn" disabled={!inputValue.trim() || isTyping}>
            <Send size={18} style={{ marginLeft: "-2px" }} />
          </button>
        </form>
      </div>
    </>
  );
}
