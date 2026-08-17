export const FitnessTrackerSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" className={className}>
    <rect width="800" height="600" fill="#fdf9f3"/>
    <circle cx="400" cy="180" r="45" fill="#436444"/>
    <path d="M400 225 L400 380" stroke="#436444" strokeWidth="12" strokeLinecap="round"/>
    <path d="M400 260 L340 320" stroke="#436444" strokeWidth="12" strokeLinecap="round"/>
    <path d="M400 260 L460 320" stroke="#436444" strokeWidth="12" strokeLinecap="round"/>
    <path d="M400 380 L350 480" stroke="#436444" strokeWidth="12" strokeLinecap="round"/>
    <path d="M400 380 L450 480" stroke="#436444" strokeWidth="12" strokeLinecap="round"/>
    <rect x="320" y="280" width="40" height="50" rx="8" fill="#8c4e33"/>
    <rect x="325" y="290" width="30" height="30" rx="4" fill="#fdf9f3"/>
    <text x="340" y="310" fontSize="12" fill="#436444" textAnchor="middle" fontFamily="sans-serif">72</text>
    <path d="M200 150 L280 150 L300 120 L320 180 L340 140 L360 160 L400 160" stroke="#C0564B" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <circle cx="150" cy="450" r="60" fill="#E1EADF" opacity="0.5"/>
    <circle cx="650" cy="150" r="80" fill="#feae8c" opacity="0.3"/>
    <circle cx="600" cy="400" r="40" fill="#5B8FB9" opacity="0.2"/>
  </svg>
);

export const WalkingTogetherSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" className={className}>
    <rect width="800" height="600" fill="#fdf9f3"/>
    <circle cx="300" cy="180" r="40" fill="#436444"/>
    <path d="M300 220 L300 380" stroke="#436444" strokeWidth="10" strokeLinecap="round"/>
    <path d="M300 260 L250 320" stroke="#436444" strokeWidth="10" strokeLinecap="round"/>
    <path d="M300 260 L350 320" stroke="#436444" strokeWidth="10" strokeLinecap="round"/>
    <path d="M300 380 L260 470" stroke="#436444" strokeWidth="10" strokeLinecap="round"/>
    <path d="M300 380 L340 470" stroke="#436444" strokeWidth="10" strokeLinecap="round"/>
    <circle cx="500" cy="180" r="40" fill="#8c4e33"/>
    <path d="M500 220 L500 380" stroke="#8c4e33" strokeWidth="10" strokeLinecap="round"/>
    <path d="M500 260 L450 320" stroke="#8c4e33" strokeWidth="10" strokeLinecap="round"/>
    <path d="M500 260 L550 320" stroke="#8c4e33" strokeWidth="10" strokeLinecap="round"/>
    <path d="M500 380 L460 470" stroke="#8c4e33" strokeWidth="10" strokeLinecap="round"/>
    <path d="M500 380 L540 470" stroke="#8c4e33" strokeWidth="10" strokeLinecap="round"/>
    <path d="M350 300 Q400 280 450 300" stroke="#5B8FB9" strokeWidth="3" fill="none" strokeDasharray="8,4"/>
    <path d="M390 270 C390 260 400 250 410 260 C420 250 430 260 430 270 C430 290 410 310 410 310 C410 310 390 290 390 270" fill="#C0564B" opacity="0.8"/>
    <circle cx="150" cy="500" r="50" fill="#E1EADF" opacity="0.4"/>
    <circle cx="650" cy="100" r="70" fill="#feae8c" opacity="0.3"/>
    <circle cx="700" cy="450" r="30" fill="#5B8FB9" opacity="0.2"/>
  </svg>
);

export const RelaxingOutdoorsSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" className={className}>
    <rect width="800" height="600" fill="#fdf9f3"/>
    <circle cx="400" cy="200" r="45" fill="#5B8FB9"/>
    <path d="M400 245 L400 350" stroke="#5B8FB9" strokeWidth="12" strokeLinecap="round"/>
    <path d="M400 280 L320 320" stroke="#5B8FB9" strokeWidth="12" strokeLinecap="round"/>
    <path d="M400 280 L480 320" stroke="#5B8FB9" strokeWidth="12" strokeLinecap="round"/>
    <path d="M400 350 L340 420 Q380 440 400 400 Q420 440 460 420 L400 350" fill="#5B8FB9"/>
    <circle cx="400" cy="280" r="120" fill="none" stroke="#5B8FB9" strokeWidth="2" opacity="0.3"/>
    <circle cx="400" cy="280" r="160" fill="none" stroke="#5B8FB9" strokeWidth="1" opacity="0.2"/>
    <circle cx="280" cy="180" r="4" fill="#8c4e33"/>
    <circle cx="520" cy="200" r="3" fill="#436444"/>
    <circle cx="300" cy="350" r="5" fill="#5B8FB9"/>
    <circle cx="500" cy="330" r="4" fill="#8c4e33"/>
    <ellipse cx="200" cy="480" rx="60" ry="30" fill="#E1EADF" opacity="0.6"/>
    <ellipse cx="600" cy="500" rx="50" ry="25" fill="#E1EADF" opacity="0.5"/>
    <circle cx="120" cy="150" r="40" fill="#feae8c" opacity="0.3"/>
    <circle cx="680" cy="400" r="60" fill="#E1EADF" opacity="0.3"/>
  </svg>
);

export const DoctorsOrdersSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" className={className}>
    <rect width="800" height="600" fill="#fdf9f3"/>
    <circle cx="350" cy="180" r="45" fill="#436444"/>
    <path d="M350 225 L350 400" stroke="#436444" strokeWidth="12" strokeLinecap="round"/>
    <path d="M350 260 L290 320" stroke="#436444" strokeWidth="12" strokeLinecap="round"/>
    <path d="M350 260 L410 320" stroke="#436444" strokeWidth="12" strokeLinecap="round"/>
    <path d="M350 400 L310 500" stroke="#436444" strokeWidth="12" strokeLinecap="round"/>
    <path d="M350 400 L390 500" stroke="#436444" strokeWidth="12" strokeLinecap="round"/>
    <path d="M320 240 Q300 260 320 280" stroke="#8c4e33" strokeWidth="4" fill="none"/>
    <circle cx="320" cy="280" r="8" fill="#8c4e33"/>
    <rect x="500" y="200" width="120" height="160" rx="8" fill="white" stroke="#436444" strokeWidth="3"/>
    <rect x="520" y="180" width="80" height="20" rx="4" fill="#436444"/>
    <line x1="520" y1="250" x2="600" y2="250" stroke="#E1EADF" strokeWidth="2"/>
    <line x1="520" y1="280" x2="580" y2="280" stroke="#E1EADF" strokeWidth="2"/>
    <line x1="520" y1="310" x2="560" y2="310" stroke="#E1EADF" strokeWidth="2"/>
    <path d="M530 245 L535 250 L545 240" stroke="#436444" strokeWidth="2" fill="none"/>
    <path d="M530 275 L535 280 L545 270" stroke="#436444" strokeWidth="2" fill="none"/>
    <circle cx="150" cy="450" r="60" fill="#E1EADF" opacity="0.4"/>
    <circle cx="650" cy="120" r="50" fill="#feae8c" opacity="0.3"/>
    <circle cx="700" cy="480" r="35" fill="#5B8FB9" opacity="0.2"/>
  </svg>
);

export const GoalsSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" className={className}>
    <rect width="800" height="600" fill="#fdf9f3"/>
    <circle cx="400" cy="250" r="120" fill="none" stroke="#436444" strokeWidth="8" opacity="0.3"/>
    <circle cx="400" cy="250" r="80" fill="none" stroke="#436444" strokeWidth="6" opacity="0.5"/>
    <circle cx="400" cy="250" r="40" fill="#436444"/>
    <line x1="550" y1="150" x2="400" y2="250" stroke="#8c4e33" strokeWidth="4"/>
    <polygon points="400,250 420,240 415,260" fill="#8c4e33"/>
    <rect x="200" y="420" width="400" height="8" rx="4" fill="#E1EADF"/>
    <rect x="200" y="420" width="300" height="8" rx="4" fill="#436444"/>
    <circle cx="200" cy="424" r="12" fill="#436444"/>
    <circle cx="300" cy="424" r="12" fill="#436444"/>
    <circle cx="400" cy="424" r="12" fill="#436444"/>
    <circle cx="500" cy="424" r="12" fill="#E1EADF" stroke="#436444" strokeWidth="2"/>
    <path d="M195 424 L200 429 L210 419" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M295 424 L300 429 L310 419" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M395 424 L400 429 L410 419" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="600" cy="150" r="8" fill="#8c4e33"/>
    <circle cx="180" cy="180" r="6" fill="#5B8FB9"/>
    <circle cx="650" cy="350" r="10" fill="#436444"/>
    <circle cx="150" cy="400" r="5" fill="#8c4e33"/>
    <circle cx="100" cy="200" r="40" fill="#feae8c" opacity="0.3"/>
    <circle cx="700" cy="450" r="50" fill="#E1EADF" opacity="0.3"/>
  </svg>
);