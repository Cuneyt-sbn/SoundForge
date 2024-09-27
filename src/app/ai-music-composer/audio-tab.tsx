"use client";

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Mic } from "lucide-react";

export function AudioTab() {
  const [textInput, setTextInput] = useState<string>("");

  const handleConvertToAudio = () => {
    console.log("Converting text to audio:", textInput);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Audio Tab</h2>
        <p className="text-gray-300">Enter text to convert it into audio.</p>
      </div>

      <Form.Control
        type="text"
        placeholder="Enter text to convert to audio"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        className="bg-gray-700 text-white w-full p-2 rounded-lg mb-4"
      />

      <div className="flex justify-center">
        <Button
          onClick={handleConvertToAudio}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
        >
          <Mic className="mr-2" />
          Convert to Audio
        </Button>
      </div>
    </div>
  );
}