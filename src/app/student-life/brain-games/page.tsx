'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { BrainCircuit, Trophy, Timer, Play, RotateCcw } from 'lucide-react';

export default function BrainGamesPage() {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [question, setQuestion] = useState({ text: '', answer: 0 });
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate random math problem
  const generateQuestion = () => {
    const operators = ['+', '-', '*'];
    const op = operators[Math.floor(Math.random() * operators.length)];
    let a, b, answer;
    
    if (op === '+') {
      a = Math.floor(Math.random() * 20) + 1;
      b = Math.floor(Math.random() * 20) + 1;
      answer = a + b;
    } else if (op === '-') {
      a = Math.floor(Math.random() * 20) + 10;
      b = Math.floor(Math.random() * a); // ensure positive result
      answer = a - b;
    } else {
      a = Math.floor(Math.random() * 10) + 1;
      b = Math.floor(Math.random() * 10) + 1;
      answer = a * b;
    }
    
    setQuestion({ text: `${a} ${op} ${b}`, answer });
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setInputValue('');
    generateQuestion();
    setGameState('playing');
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // Timer Hook
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('gameover');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  // Handle Input Auto-Check
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    
    if (parseInt(val) === question.answer) {
      setScore((prev) => prev + 10);
      setInputValue('');
      generateQuestion();
    }
  };

  const getRank = () => {
    if (score >= 200) return 'Mathematical Genius 🏆';
    if (score >= 100) return 'Brilliant Scholar 🥇';
    if (score >= 50) return 'Sharp Thinker 🥈';
    return 'Learning Star 📚';
  };

  return (
    <main>
      <PageHeader 
        title="Brilliant Brain Challenge" 
        eyebrow="Student Zone"
        description="Test your reflexes and math skills in our 30-second rapid-fire challenge!" 
      />
      
      <div className="brain-game-wrapper">
        <div className="brain-game-card">
          
          {gameState === 'idle' && (
            <>
              <BrainCircuit size={64} className="game-header-icon mx-auto" />
              <h2 className="game-title">Ready to test your brain?</h2>
              <p className="game-subtitle">Solve as many math problems as you can in 30 seconds.</p>
              <button onClick={startGame} className="game-btn inline-flex items-center gap-2">
                <Play size={20} /> Start Challenge
              </button>
            </>
          )}

          {gameState === 'playing' && (
            <>
              <div className="game-stats-bar">
                <div className="game-stat">
                  <span className="game-stat-label flex items-center gap-1"><Timer size={14}/> Time</span>
                  <span className={`game-stat-value time ${timeLeft <= 5 ? 'time-warning' : ''}`}>00:{timeLeft.toString().padStart(2, '0')}</span>
                </div>
                <div className="game-stat">
                  <span className="game-stat-label flex items-center gap-1"><Trophy size={14}/> Score</span>
                  <span className="game-stat-value score">{score}</span>
                </div>
              </div>
              
              <div className="game-question-box">
                {question.text} = ?
              </div>

              <input 
                ref={inputRef}
                type="number" 
                className="game-input"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="?"
                autoFocus
              />
            </>
          )}

          {gameState === 'gameover' && (
            <>
              <Trophy size={64} className="game-header-icon mx-auto text-gold" />
              <h2 className="game-title">Time's Up!</h2>
              <div className="game-result">{score}</div>
              <p className="game-subtitle font-bold text-sky-400">{getRank()}</p>
              <button onClick={startGame} className="game-btn inline-flex items-center gap-2">
                <RotateCcw size={20} /> Play Again
              </button>
            </>
          )}

        </div>
      </div>
    </main>
  );
}
