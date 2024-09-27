"use client";

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Wand2 } from "lucide-react";

export function DecodeTab() {
  const [decodedInfo, setDecodedInfo] = useState<string | null>(null);

  const handleDecode = () => {
    // Simulatie van AI-decodeerproces
    setTimeout(() => {
      setDecodedInfo(
        "Gecodeerde muziek informatie: Toonsoort: C majeur, Tempo: 120 BPM, Instrumenten: Piano, Gitaar, Drums"
      );
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-900 text-white">
      <div className="max-w-lg w-full bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Decode Music</h2>
          <p className="text-gray-300">Upload an audio file to decode its musical properties</p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-full flex items-center space-x-2">
            <Form.Control
              type="file"
              accept="audio/*"
              className="bg-gray-700 text-white w-2/3 p-2 rounded-lg"
            />
            <Button
              onClick={handleDecode}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center"
            >
              <Wand2 className="mr-2 h-5 w-5" />
              Decode
            </Button>
          </div>

          {decodedInfo && (
            <div className="w-full">
              <Form.Control
                as="textarea"
                value={decodedInfo}
                readOnly
                className="bg-gray-700 text-white p-4 rounded-lg h-32 w-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}