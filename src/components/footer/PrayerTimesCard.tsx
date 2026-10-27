"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

type PrayerName = "Fajr" | "Dhuhr" | "Asr" | "Maghrib" | "Isha";

interface PrayerEntry {
  name: PrayerName;
  time: string;
}

type LoadState = "idle" | "loading" | "ready" | "setup" | "error";

const PRAYER_ORDER: PrayerName[] = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

const DEFAULT_TIMES: PrayerEntry[] = PRAYER_ORDER.map((name) => ({ name, time: "—" }));

function formatDateInLagos(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: siteConfig.timezone,
  }).format(date);
}

export function PrayerTimesCard() {
  const endpoint = siteConfig.prayerTimes.apiEndpoint?.trim();
  const apiKey = siteConfig.prayerTimes.apiKey?.trim();

  // Initialize state directly from config to avoid synchronous setState inside useEffect
  const [state, setState] = useState<LoadState>(endpoint ? "idle" : "setup");
  const [times, setTimes] = useState<PrayerEntry[]>(DEFAULT_TIMES);
  const [message, setMessage] = useState<string>(
    endpoint
      ? ""
      : "Prayer times will appear here once a verified data source is configured for Maiduguri (Africa/Lagos)."
  );
  const [todayLabel] = useState<string>(() => formatDateInLagos(new Date()));

  useEffect(() => {
    if (!endpoint) return;

    let cancelled = false;

    async function loadPrayerTimes() {
      try {
        const headers: HeadersInit = {};
        if (apiKey) {
          headers["Authorization"] = `Bearer ${apiKey}`;
        }

        const response = await fetch(endpoint, { headers });

        if (!response.ok) {
          throw new Error(`Prayer times request failed (${response.status})`);
        }

        const data = await response.json();
        const raw = data?.times ?? data?.data?.timings ?? null;
        if (!raw) {
          throw new Error("Unexpected prayer times response shape");
        }

        const parsed: PrayerEntry[] = PRAYER_ORDER.map((name) => ({
          name,
          time: String(raw[name] ?? "—"),
        }));

        if (!cancelled) {
          setTimes(parsed);
          setState("ready");
          setMessage("Live prayer times for Maiduguri.");
        }
      } catch {
        if (!cancelled) {
          setState("error");
          setMessage("Prayer times are temporarily unavailable. Please try again later.");
          setTimes(DEFAULT_TIMES);
        }
      }
    }

    void loadPrayerTimes();

    return () => {
      cancelled = true;
    };
  }, [endpoint, apiKey]);

  const nextPrayer: PrayerName | null = null;

  return (
    <aside className="prayer-card" aria-labelledby="prayer-times-heading">
      <div className="prayer-card__header">
        <h3 id="prayer-times-heading" className="prayer-card__title">
          Prayer Times
        </h3>
        <p className="prayer-card__date">{todayLabel || "Maiduguri"}</p>
      </div>

      <ul className="prayer-list" aria-live="polite">
        {times.map((entry) => (
          <li
            key={entry.name}
            className={
              nextPrayer === entry.name ? "prayer-row prayer-row--next" : "prayer-row"
            }
          >
            <span className="prayer-name">{entry.name}</span>
            <span className="prayer-time">
              {state === "loading" ? "Loading…" : entry.time}
            </span>
          </li>
        ))}
      </ul>

      <p
        className={
          state === "setup"
            ? "prayer-status prayer-status--setup"
            : state === "error"
              ? "prayer-status prayer-status--error"
              : "prayer-status"
        }
      >
        {state === "loading" ? "Fetching prayer times…" : message}
      </p>
    </aside>
  );
}
