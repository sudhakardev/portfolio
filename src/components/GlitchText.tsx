import React from 'react';

interface GlitchTextProps {
    text: string;
    className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
    return (
        <div className={`relative inline-block ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 text-primary opacity-70 animate-glitch hidden group-hover:block whitespace-nowrap" style={{ clipPath: 'inset(10% 0 10% 0)' }}>
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-20 text-secondary opacity-70 animate-glitch hidden group-hover:block whitespace-nowrap" style={{ clipPath: 'inset(80% 0 5% 0)', animationDirection: 'reverse' }}>
                {text}
            </span>
        </div>
    );
};

export default GlitchText;
