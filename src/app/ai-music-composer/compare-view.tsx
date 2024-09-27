"use client";

import { useEffect, useRef } from "react";

export function CompareView({ uploadedAudio, generatedAudio }: { uploadedAudio: string | null, generatedAudio: string | null }) {
  const uploadedCanvasRef = useRef<HTMLCanvasElement>(null);
  const generatedCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const drawSpectrogram = (canvas: HTMLCanvasElement | null, color: string) => {
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Simulating spectrogram drawing
          ctx.fillStyle = color;
          ctx.fillRect(10, 10, 50, 50);
          ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';
          ctx.fillRect(30, 30, 50, 50);
        }
      }
    };

    drawSpectrogram(uploadedCanvasRef.current, 'rgb(200, 0, 0)');
    drawSpectrogram(generatedCanvasRef.current, 'rgb(0, 200, 0)');
  }, [uploadedAudio, generatedAudio]);

  return (
    <div className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-white">Compare Spectrograms</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Uploaded Audio</h3>
          {uploadedAudio ? (
            <canvas ref={uploadedCanvasRef} width="400" height="200" className="w-full border rounded-lg" />
          ) : (
            <p className="text-gray-300">No uploaded audio available</p>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Generated Audio</h3>
          {generatedAudio ? (
            <canvas ref={generatedCanvasRef} width="400" height="200" className="w-full border rounded-lg" />
          ) : (
            <p className="text-gray-300">No generated audio available</p>
          )}
        </div>
      </div>
    </div>
  );
}