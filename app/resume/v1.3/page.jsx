'use client'
import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

const ResumeV11 = () => {
    const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });
    const [showConfetti, setShowConfetti] = useState(true);

    const detectSize = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        detectSize();
        window.addEventListener('resize', detectSize);
        const timer = setTimeout(() => setShowConfetti(false), 80000);
        return () => {
            window.removeEventListener('resize', detectSize);
            clearTimeout(timer);
        }
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center h-[calc(100vh-140px)] overflow-hidden">
            {showConfetti && windowDimension.width > 0 && (
                <ReactConfetti
                    width={windowDimension.width}
                    height={windowDimension.height + 140}
                    recycle={false}
                    numberOfPieces={600}
                    style={{ position: 'fixed', top: 0, left: 0 }}
                    gravity={0.02}
                />
            )}
            <div className="z-10 p-8 text-center rounded-lg shadow-lg">
                <h1 className="mb-4 text-6xl font-bold">¡Felicitaciones!</h1>
                <p className="text-4xl">Tienes la versión mas actualizada de mi <a href="/CVAlejandraOlayaV1.3.pdf" target="_blank" className="text-[#B85EFF]">CV</a> (v1.3)</p>
            </div>
        </div>
    );
};

export default ResumeV11;