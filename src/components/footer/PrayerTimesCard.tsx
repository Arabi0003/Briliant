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

export function PrayerTimesCard() {
  const [timings, setTimings] = useState<PrayerTimings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPrayerTimes() {
      try {
        const response = await fetch(
          'https://api.aladhan.com/v1/timingsByCity?city=Maiduguri&country=Nigeria&method=3'
        );
        const data = await response.json();
        if (data && data.code === 200) {
          setTimings(data.data.timings);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPrayerTimes();
  }, []);

  const prayerKeys: Array<keyof PrayerTimings> = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  return (
    <div className="prayer-card">
      <div className="prayer-header">
        <div className="prayer-title-group">
          <Clock size={20} className="prayer-icon-gold" />
          <h3 className="prayer-title">Prayer Times</h3>
        </div>
        <div className="prayer-location">
          <MapPin size={14} />
          <span>Maiduguri, Borno</span>
        </div>
      </div>

      <div className="prayer-list">
        {loading ? (
          <div className="prayer-status">Fetching Maiduguri timings...</div>
        ) : error || !timings ? (
          <div className="prayer-status prayer-status-error">Unable to load timings</div>
        ) : (
          prayerKeys.map((key) => (
            <div key={key} className="prayer-row">
              <span className="prayer-name">{key}</span>
              <span className="prayer-time">{timings[key]}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PrayerTimesCard;
