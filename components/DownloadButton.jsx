'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import { FiExternalLink } from "react-icons/fi";

const DownloadButton = () => {
    const handleOpen = () => {
        const pdfUrl = '/CV_Alejandra_Olaya_v1_3.pdf';
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 uppercase"
            onClick={handleOpen}
        >
            <span>Descargar CV</span>
            <FiExternalLink className="text-xl" />
        </Button>
    );
};

export default DownloadButton;