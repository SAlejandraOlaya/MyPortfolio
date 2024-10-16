'use client'
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false });

export default function ResumeVersion() {
    const params = useParams();
    const version = params.version;

    const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });
    const [showConfetti, setShowConfetti] = useState(true);

    const isLatesVersion = version == process.env.NEXT_PUBLIC_CV_VERSION

    console.log({ 'process.env.NEXT_PUBLIC_CV_VERSION': process.env.NEXT_PUBLIC_CV_VERSION })

    const detectSize = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        if (!isLatesVersion) {
            return;
        }
        detectSize();
        window.addEventListener('resize', detectSize);
        const timer = setTimeout(() => setShowConfetti(false), 80000);
        return () => {
            window.removeEventListener('resize', detectSize);
            clearTimeout(timer);
        }
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-140px)] overflow-hidden p-4">
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
            <div className="z-10 p-6 text-center rounded-lg shadow-lg sm:p-8">
                {isLatesVersion ?
                    <>
                        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">¡Felicitaciones!</h1>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            Tienes la versión más actualizada de mi <a href="/CVAlejandraOlayaV1.4.pdf" target="_blank" className="text-[#B85EFF] hover:underline">CV</a> (v1.4)
                        </p>
                    </> :
                    <>
                        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">¡Ups!</h1>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            no tienes la última versión de mi CV,
                            <br /> para descargarla haz click
                            <a href="/CVAlejandraOlayaV1.4.pdf" target="_blank" className="text-[#B85EFF] hover:underline"> aquí </a>
                        </p>

                    </>}
            </div>
        </div>
    );
}