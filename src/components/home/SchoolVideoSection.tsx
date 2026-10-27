"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Modal } from "@/components/ui/Modal";

export function SchoolVideoSection() {
  const [open, setOpen] = useState(false);
  const videoId = siteConfig.video.youtubeId?.trim();

  return (
    <section className="video-cta section" aria-labelledby="school-video-heading">
      <Container>
        <div className="video-cta__inner">
          <span className="video-cta__eyebrow">School Experience</span>
          <h2 id="school-video-heading">See Brilliant Future in Action</h2>
          <p>
            Take a short look at our learning environment, campus life, and the values
            that shape every student&apos;s journey — Respect, Tolerance and Excellence.
          </p>
          <button
            type="button"
            className="video-play-btn"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
          >
            <span className="video-play-icon" aria-hidden="true">
              <Play size={18} fill="currentColor" />
            </span>
            Watch School Introduction
          </button>
        </div>
      </Container>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={siteConfig.video.title}
        description={siteConfig.video.description}
      >
        <div className="video-frame">
          {videoId ? (
            <iframe
              title={siteConfig.video.title}
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 0, width: "100%", height: "100%" }}
            />
          ) : (
            <div className="video-placeholder">
              <Play size={42} />
              <p>
                The school introduction video will appear here once a YouTube video ID
                is configured in <code>site-config.ts</code>.
              </p>
            </div>
          )}
        </div>
      </Modal>
    </section>
  );
}
