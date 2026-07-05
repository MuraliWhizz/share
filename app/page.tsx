import { Caveat, Space_Grotesk } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-chalk',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-label',
});

// 🔗 Swap this for your own shareable link
const DEFAULT_LINK =
  'https://drive.google.com/drive/folders/1p8Ptb4Cryz70eoas9FXT3qMZoI0ashUX?usp=sharing';

interface ShareFolderCardProps {
  href?: string;
  tabLabel?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
}

export default function ShareFolderCard({
  href = DEFAULT_LINK,
  tabLabel = 'CLASS FILES',
  title = "Everything's inside",
  description = 'Notes, slides, and resources — all organized in one shared folder.',
  buttonLabel = 'Open the Folder',
}: ShareFolderCardProps) {
  return (
    <div className={`gdf-stage ${caveat.variable} ${spaceGrotesk.variable}`}>
      <div className="gdf-grid" aria-hidden="true" />

      <div className="gdf-doodle gdf-doodle-star" aria-hidden="true">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      </div>
      <div className="gdf-doodle gdf-doodle-check" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12.5 9 17.5 20 6.5" />
        </svg>
      </div>

      <div className="gdf-center-wrap">
        <div className="gdf-center">
          <div className="gdf-chalk-note">open whenever you&apos;re ready</div>
          <svg className="gdf-chalk-arrow" width="52" height="42" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <path d="M8 6 C 34 6, 22 40, 54 46" strokeDasharray="4 6" />
            <path d="M45 39 L 54 46 L 46 53" />
          </svg>

          <div className="gdf-folder-group">
            <div className="gdf-pushpin" aria-hidden="true">
              <svg width="20" height="26" viewBox="0 0 24 30">
                <circle cx="12" cy="10" r="7" fill="#C1443A" />
                <circle cx="9.5" cy="7.5" r="1.8" fill="rgba(255,255,255,0.55)" />
                <line x1="12" y1="17" x2="12" y2="24" stroke="rgba(0,0,0,0.3)" strokeWidth={1.6} strokeLinecap="round" />
              </svg>
            </div>

            <div className="gdf-stamp" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12.5 9 17.5 20 6.5" />
              </svg>
              ALL SET
            </div>

            <div className="gdf-tab">
              <span>{tabLabel}</span>
            </div>

            <div className="gdf-body">
              <h1>{title}</h1>
              <p className="gdf-desc">{description}</p>

              <a className="gdf-btn" href={href} target="_blank" rel="noopener noreferrer">
                <span>{buttonLabel}</span>
                <svg className="gdf-btn-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h13" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          <p className="gdf-footer">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            kept safe in Google Drive
          </p>
        </div>
      </div>

      <style>{`
        .gdf-stage {
          position: relative;
          min-height: 100vh;
          font-family: var(--font-label), sans-serif;
          background: radial-gradient(ellipse at 50% 28%, #21402F 0%, #12241B 78%);
          overflow: hidden;
        }
        .gdf-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            repeating-linear-gradient(0deg, rgba(244,243,238,0.05) 0px, rgba(244,243,238,0.05) 1px, transparent 1px, transparent 56px),
            repeating-linear-gradient(90deg, rgba(244,243,238,0.05) 0px, rgba(244,243,238,0.05) 1px, transparent 1px, transparent 56px);
          -webkit-mask-image: radial-gradient(ellipse at 50% 42%, black 0%, transparent 72%);
                  mask-image: radial-gradient(ellipse at 50% 42%, black 0%, transparent 72%);
        }
        .gdf-doodle { position: absolute; color: #F4F3EE; pointer-events: none; }
        .gdf-doodle-star { top: 11%; right: 15%; opacity: 0.32; transform: rotate(8deg); }
        .gdf-doodle-check { bottom: 14%; left: 11%; opacity: 0.28; transform: rotate(-10deg); }

        .gdf-center-wrap {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 20px;
        }
        .gdf-center { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 400px; }

        .gdf-chalk-note {
          font-family: var(--font-chalk), cursive;
          font-weight: 700;
          font-size: 23px;
          color: #F4F3EE;
          text-align: center;
          transform: rotate(-2deg);
          opacity: 0;
          text-shadow: 0 0 14px rgba(244,243,238,0.12);
          animation: gdf-chalk-fade 0.9s ease-out 0.2s forwards;
        }
        @keyframes gdf-chalk-fade {
          from { opacity: 0; transform: rotate(-2deg) translateY(-8px); }
          to { opacity: 0.94; transform: rotate(-2deg) translateY(0); }
        }
        .gdf-chalk-arrow { display: block; margin: 2px 0 14px; color: #F4F3EE; opacity: 0; animation: gdf-chalk-fade 0.9s ease-out 0.45s forwards; }

        .gdf-folder-group {
          position: relative;
          width: 100%;
          margin-top: 34px;
          transform: rotate(-1.4deg);
          opacity: 0;
          animation: gdf-settle 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
          transition: transform 0.4s ease;
        }
        @keyframes gdf-settle {
          0% { opacity: 0; transform: rotate(-1.4deg) translateY(28px) scale(0.96); }
          60% { opacity: 1; transform: rotate(-1.4deg) translateY(-4px) scale(1.01); }
          100% { opacity: 1; transform: rotate(-1.4deg) translateY(0) scale(1); }
        }
        .gdf-folder-group:hover { transform: rotate(0deg) translateY(-6px); }

        .gdf-pushpin {
          position: absolute; top: -33px; left: 66px; z-index: 4;
          opacity: 0;
          filter: drop-shadow(0 3px 3px rgba(0,0,0,0.4));
          animation: gdf-pin-drop 0.5s ease-out 1.25s forwards;
        }
        @keyframes gdf-pin-drop {
          0% { opacity: 0; transform: translateY(-18px) scale(0.5); }
          60% { opacity: 1; transform: translateY(3px) scale(1.12); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .gdf-stamp {
          position: absolute; top: -16px; right: -14px; z-index: 4;
          width: 60px; height: 60px; border-radius: 50%;
          border: 2px dashed rgba(193,68,58,0.75);
          color: #C1443A;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
          transform: rotate(12deg) scale(1.8);
          opacity: 0;
          font-size: 9px; font-weight: 700; letter-spacing: 0.06em;
          background: rgba(244,243,238,0.04);
          animation: gdf-stamp-press 0.4s ease-out 1.5s forwards;
        }
        @keyframes gdf-stamp-press {
          0% { opacity: 0; transform: rotate(12deg) scale(1.8); }
          55% { opacity: 1; }
          100% { opacity: 1; transform: rotate(12deg) scale(1); }
        }

        .gdf-tab {
          position: absolute; top: -28px; left: 30px;
          width: 136px; height: 34px;
          background: linear-gradient(160deg, #E8C88A, #D2A85F);
          border-radius: 10px 10px 0 0;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 -3px 8px rgba(0,0,0,0.1);
          transition: transform 0.4s ease;
        }
        .gdf-tab span { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; color: #6B4A2B; }
        .gdf-folder-group:hover .gdf-tab { transform: translateY(-6px) rotate(-3deg); }

        .gdf-body {
          position: relative;
          background: linear-gradient(165deg, #EFD29E, #E3BD82);
          border-radius: 4px 26px 26px 26px;
          padding: 52px 32px 34px;
          box-shadow: 0 35px 70px -25px rgba(0,0,0,0.6);
          text-align: left;
        }
        .gdf-body h1 { margin: 0 0 10px; font-size: 25px; font-weight: 700; letter-spacing: -0.01em; color: #4A3320; }
        .gdf-desc { margin: 0 0 26px; font-size: 14.5px; line-height: 1.6; color: #6B4A2B; }

        .gdf-btn {
          position: relative;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; padding: 15px 20px;
          background: #4A3320; color: #F4E9D0;
          font-family: var(--font-label), sans-serif;
          font-weight: 600; font-size: 15px;
          text-decoration: none; border-radius: 10px;
          box-shadow: 0 10px 24px -8px rgba(74,51,32,0.65), inset 0 0 0 2px rgba(244,233,208,0.14);
          transition: transform 0.15s ease, box-shadow 0.3s ease;
        }
        .gdf-btn:hover { box-shadow: 0 14px 30px -8px rgba(74,51,32,0.75), inset 0 0 0 2px rgba(244,233,208,0.25); }
        .gdf-btn:active { transform: scale(0.97); }
        .gdf-btn-arrow { transition: transform 0.25s ease; }
        .gdf-btn:hover .gdf-btn-arrow { transform: translateX(4px); }
        .gdf-btn:focus-visible { outline: 3px solid #C1443A; outline-offset: 3px; }

        .gdf-footer {
          margin-top: 22px;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-size: 12px; letter-spacing: 0.03em; color: rgba(244,243,238,0.55);
        }

        @media (max-width: 480px) {
          .gdf-doodle { display: none; }
          .gdf-body { padding: 46px 22px 28px; }
          .gdf-tab { left: 22px; width: 112px; height: 30px; }
          .gdf-stamp { width: 52px; height: 52px; top: -12px; right: -10px; }
          .gdf-chalk-note { font-size: 20px; }
          .gdf-body h1 { font-size: 21px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .gdf-stage *, .gdf-stage *::before, .gdf-stage *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}