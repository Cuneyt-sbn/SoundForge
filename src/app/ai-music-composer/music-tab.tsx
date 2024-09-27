"use client";

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Music, Download, Play, Pause } from "lucide-react";

export function MusicTab() {
  const [composition, setComposition] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [textInput, setTextInput] = useState<string>("");

  const handleCompose = () => {
    setTimeout(() => {
      setComposition("AI-generated music composition...");
      const newAudioUrl = "/placeholder.svg?height=50&width=200";
      setAudioUrl(newAudioUrl);
    }, 2000);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg space-y-6">
      {/* Text Input for Text-to-Music */}
      <Form.Control
        type="text"
        placeholder="Enter text to generate music"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        className="bg-gray-700 text-white w-full p-2 rounded-lg mb-4"
      />

      {/* Composition Details */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Music Composition</h2>
        <p className="text-gray-300">
          {composition ? composition : "No composition yet."}
        </p>
      </div>

      {/* Centered Compose Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleCompose}
          className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
        >
          <Music className="mr-2" />
          Compose Music
        </Button>
      </div>

      {/* Audio Playback and Download */}
      {audioUrl && (
        <>
          {/* Placeholder for Music */}
          {/* Add actual audio element here */}
          <div className="mt-4 flex justify-center space-x-4">
            <Button
              onClick={togglePlayPause}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg"
            >
              {isPlaying ? (
                <Pause className="mr-2" />
              ) : (
                <Play className="mr-2" />
              )}
              {isPlaying ? "Pause" : "Play"}
            </Button>
            <Button
              className="bg-yellow-600 hover:bg-yellow700 text-white font-semibold px4 py2 rounded-lg"
            >
              <Download className='mr2' />
              Download
            </Button> 
          </div> 
         </>
       )}
     </div> 
   ); 
 }