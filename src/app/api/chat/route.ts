import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ response: "Hello! How can I assist you with Brilliant Future Integrated School today?" });
    }

    const q = message.toLowerCase().trim();

    // --- INSTANT LOCAL INTELLIGENCE (School Knowledge Base) ---
    if (q.includes("motto") || q.includes("slogan")) {
      return NextResponse.json({ response: "Our motto is 'RESPECT, TOLERANCE AND EXCELLENCE'." });
    }
    if (q.includes("location") || q.includes("address") || q.includes("where")) {
      return NextResponse.json({ response: "Brilliant Future Integrated School is located at 610111, Maiduguri, Borno State, Nigeria." });
    }
    if (q.includes("contact") || q.includes("phone") || q.includes("number") || q.includes("call")) {
      return NextResponse.json({ response: "You can reach us by phone at +234 813 829 8218 or via email at info@briliantfutureintergratedschool.com." });
    }
    if (q.includes("hours") || q.includes("time") || q.includes("open")) {
      return NextResponse.json({ response: "School Hours: Sunday – Thursday from 7:00 AM to 4:30 PM. We are closed on Fridays and Saturdays." });
    }
    if (q.includes("fee") || q.includes("cost") || q.includes("pay") || q.includes("tuition")) {
      return NextResponse.json({ response: "School fee structures vary by academic section (Early Childhood, Primary, Junior, Senior Secondary & Tahfeez). Please visit our Admissions > Fee Structure page or contact the Bursary at +234 813 829 8218." });
    }
    if (q.includes("admission") || q.includes("apply") || q.includes("register") || q.includes("entry")) {
      return NextResponse.json({ response: "Admissions are currently open! You can submit an application via our Admissions portal on the website or visit our administrative office in Maiduguri." });
    }
    if (q.includes("portal") || q.includes("student portal") || q.includes("parent portal") || q.includes("login")) {
      return NextResponse.json({ response: "You can access SMS Portals from the main top navigation menu under 'Portals'. We offer dedicated portals for Students, Parents, Staff, and Administrators." });
    }
    if (q.includes("curriculum") || q.includes("subject") || q.includes("stem") || q.includes("tahfeez") || q.includes("islamic")) {
      return NextResponse.json({ response: "BFIS integrates standard Nigerian and International curricula alongside comprehensive Islamic Studies, Tahfeez (Quran Memorization), and modern STEM & Robotics programs." });
    }

    // --- GEMINI AI EXTERNAL CALL (If API Key is available) ---
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (apiKey && apiKey.length > 5) {
      try {
        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are the official Smart AI Assistant for Brilliant Future Integrated School (BFIS) in Maiduguri, Borno State, Nigeria. Answer this user query accurately, politely, and helpfully: ${message}`
              }]
            }]
          })
        });

        const data = await geminiRes.json();
        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (aiText) {
          return NextResponse.json({ response: aiText });
        }
      } catch {
        // Fallback gracefully
      }
    }

    // --- GENERAL KNOWLEDGE & FALLBACK INTELLIGENCE ---
    return NextResponse.json({ 
      response: "Brilliant Future Integrated School (BFIS) in Maiduguri provides excellence in Western, Islamic, and STEM education. Is there anything specific you would like to know about our admissions, school hours, location, or portals?" 
    });

  } catch {
    return NextResponse.json({ 
      response: "Welcome to Brilliant Future Integrated School! How can I assist you with admissions, fees, or academics today?" 
    });
  }
}
