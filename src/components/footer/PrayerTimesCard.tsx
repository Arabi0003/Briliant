'use client';

import React, { useState, useEffect } from 'react';
import { Clock, MapPin } from 'lucide-react';

interface PrayerTimings {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export default function PrayerTimesCard() {
  const [timings, setTimings] = useState<PrayerTimings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPrayerTimes() {
      try {
        // Method 3 = Muslim World League (Commonly used in Nigeria)
        const response = await fetch(
          'https://api.aladhan.com/v1/timingsByCity?city=Maiduguri&country=Nigeria&method=3'
        );
        const data = await response.json();
        if (data.code === 200) {
          setTimings(data.data.timings);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPrayerTimes();
  }, []);

  const prayerIcons: Record<keyof PrayerTimings, string> = {
    Fajr: 'Dawn',
    Dhuhr: 'Noon',
    Asr: 'Afternoon',
    Maghrib: 'Sunset',
    Isha: 'Night',
  };

  return (
    <div className="prayer-card">
      <div className="prayer-header">
        <div className="prayer-title-group">
          <Clock size={20} className="text-gold" />
          <h3 className="prayer-title">Prayer Times</h3>
        </div>
        <div className="prayer-location">
          <MapPin size={14} />
          <span>Maiduguri, Borno</span>
        </div>
      </div>

      <div className="prayer-list">
        {loading ? (
          <div className="prayer-status">Updating timings...</div>
        ) : error || !timings ? (
          <div className="prayer-status error">Unable to load timings</div>
        ) : (
          (Object.keys(prayerIcons) as Array<keyof PrayerTimings>).map((key) => (
            <div key={key} className="prayer-row">
              <span className="prayer-name">{key}</span>
              <span className="prayer-time">{timings[key]}</span>
            </div>
          ))
        )}
      </div>

      <style jsx>{
        .prayer-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1.5rem;
          color: white;
        }
        .prayer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 1rem;
        }
        .prayer-title-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .prayer-title {
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin: 0;
        }
        .prayer-location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--sky-blue);
          opacity: 0.8;
        }
        .prayer-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .prayer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.25rem 0;
        }
        .prayer-name {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .prayer-time {
          font-family: monospace;
          font-size: 1rem;
          color: var(--gold);
          font-weight: 600;
        }
        .prayer-status {
          font-size: 0.85rem;
          font-style: italic;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
          padding: 1rem 0;
        }
        .error {
          color: #ffbaba;
        }
        .text-gold {
          color: var(--gold);
        }
      }</style>
    </div>
  );
}
