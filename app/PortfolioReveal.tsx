'use client';

import { useState } from 'react';

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

  return (
    <div className="projectsContent portfolioReveal">
      <span className="cardEyebrow">Selected work</span>
      <h3>Fresh work is on the way.</h3>
      <p>New client projects and creative builds will be added here as the studio grows.</p>

      <button
        className="portfolioButton"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="portfolioMiniCards"
      >
        <span>{open ? 'Close portfolio' : 'View portfolio'}</span>
        <span className="portfolioButtonIcon" aria-hidden="true">{open ? '×' : '↗'}</span>
      </button>

      <div
        id="portfolioMiniCards"
        className={`portfolioMiniCards${open ? ' isOpen' : ''}`}
        aria-hidden={!open}
      >
        {portfolioItems.map((item) => (
          <a
            key={item.title}
            className="portfolioMiniCard"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
          >
            <span className="portfolioMiniType">{item.type}</span>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
            <span className="portfolioMiniLink">Open project ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
