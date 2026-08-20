'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

const portfolioItems = [
  {
    title: 'Print Studio Concept',
    type: 'Website redesign',
    description: 'A modern redesign concept for a local print business.',
    href: 'https://graham-press-website.vercel.app/',
  },
];

export default function PortfolioReveal() {
  const [open, setOpen] = useState(false);

  const portfolioPanel = open && typeof document !== 'undefined'
    ? createPortal(
        <div className="portfolioOverlay" role="dialog" aria-modal="true" aria-label="Website portfolio" onClick={() => setOpen(false)}>
          <div className="portfolioPanel" onClick={(event) => event.stopPropagation()}>
            <div className="portfolioPanelTop">
              <span>Selected work</span>
              <button type="button" className="portfolioClose" onClick={() => setOpen(false)} aria-label="Close portfolio">×</button>
            </div>
            <div className="portfolioMiniCards isOpen" id="portfolioMiniCards">
              {portfolioItems.map((item) => (
                <a
                  key={item.title}
                  className="portfolioMiniCard"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="portfolioMiniType">{item.type}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                  <span className="portfolioMiniLink">Open project ↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <div className="projectsContent portfolioReveal">
        <span className="cardEyebrow">Selected work</span>
        <h3>Fresh work is on the way.</h3>
        <p>New client projects and creative builds will be added here as the studio grows.</p>

        <button
          className="portfolioButton"
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="portfolioMiniCards"
        >
          <span>View portfolio</span>
          <span className="portfolioButtonIcon" aria-hidden="true">↗</span>
        </button>
      </div>
      {portfolioPanel}
    </>
  );
}
