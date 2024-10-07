'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadButton = () => {
    const handleDownload = () => {
        const pdfUrl = '/CVAlejandraOlaya1.3.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'AlejandraOlayaCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 uppercase"
            onClick={handleDownload}
        >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
        </Button>
    );
};

export default DownloadButton;