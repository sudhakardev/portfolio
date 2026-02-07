import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface ThreeDWrapperProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
}

const ThreeDWrapper = ({ children, className = "", intensity = 15 }: ThreeDWrapperProps) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const rotX = ((mouseY - centerY) / (rect.height / 2)) * -intensity;
        const rotY = ((mouseX - centerX) / (rect.width / 2)) * intensity;

        setRotateX(rotX);
        setRotateY(rotY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`perspective-1000 ${className}`}
        >
            <motion.div
                animate={{ rotateX, rotateY }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="preserve-3d w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ThreeDWrapper;
