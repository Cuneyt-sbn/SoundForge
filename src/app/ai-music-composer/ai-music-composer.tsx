"use client";

import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { AudioTab } from "./audio-tab";
import { MusicTab } from "./music-tab";
import { DecodeTab } from "./decode-tab";
import { CompareView } from "./compare-view"; // Import CompareView
import { Volume2, Music, Wand2, Sun, GitCompare } from "lucide-react"; // Import icons

export default function AIMusicComposer() {
  const [activeTab, setActiveTab] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeClasses = isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-black";
  const panelClasses = isDarkTheme ? "bg-gray-800" : "bg-gray-200";

  return (
    <div className={`min-h-screen flex flex-col ${themeClasses}`}>
      <Navbar
        expand="lg"
        className={`mx-auto mt-4 rounded-lg shadow-lg w-full max-w-4xl p-3 ${panelClasses}`}
      >
        <Container className="flex justify-between items-center">
          <Navbar.Brand
            href="/"
            className={`p-2 rounded-full transition-transform transform hover:scale-105 ${isDarkTheme ? "bg-white text-black" : "bg-black text-white"} shadow-md`}
          >
            SoundForge
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto space-x-4">
              <button onClick={() => handleTabChange(0)} className={`p-2 rounded-md transition-transform transform hover:scale-105 ${isDarkTheme ? "bg-white text-black" : "bg-black text-white"} shadow-md`}>
                <Volume2 className="mr-0" />
                Audio
              </button>
              <button onClick={() => handleTabChange(1)} className={`p-2 rounded-md transition-transform transform hover:scale-105 ${isDarkTheme ? "bg-white text-black" : "bg-black text-white"} shadow-md`}>
                <Music className="mr-0" />
                Music
              </button>
              <button onClick={() => handleTabChange(2)} className={`p-2 rounded-md transition-transform transform hover:scale-105 ${isDarkTheme ? "bg-white text-black" : "bg-black text-white"} shadow-md`}>
                <Wand2 className="mr-0" />
                Decode
              </button>
              <button onClick={() => handleTabChange(3)} className={`p-2  rounded-md transition-transform transform hover:scale-105 ${isDarkTheme ? "bg-white text-black" : "bg-black text-white"} shadow-md`}>
                <GitCompare className="mr-0" />
                Compare
              </button>
            </Nav>
          </Navbar.Collapse>
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-transform transform hover:scale-105 ${isDarkTheme ? "bg-white text-black" : "bg-black text-white"} shadow-md`}
          >
            <Sun className="mr-5" />
            
          </button>
        </Container>
      </Navbar>

      <div className="flex-grow flex items-start justify-center container mx-auto px-6 py-4">
        <div className={`w-full max-w-lg ${panelClasses} rounded-lg shadow-lg`}>
          {activeTab === 0 && <AudioTab />}
          {activeTab === 1 && <MusicTab />}
          {activeTab === 2 && <DecodeTab />}
          {activeTab === 3 && (
            <CompareView uploadedAudio={null} generatedAudio={null} />
          )}
        </div>

        {/* Info Panel */}
        <div className={`w-full max-w-xs ml-8 p-4 rounded-lg shadow-lg ${panelClasses}`}>
          <h3 className="text-xl font-bold mb-2">How It Works</h3>
          <p>{activeTab === 0 ? 
            "In the Audio Tab, enter text to convert it into audio using the AudioCraft model." :
            activeTab === 1 ?
            "In the Music Tab, input text to generate music compositions with AudioCraft." :
            activeTab === 2 ?
            "In the Decode Tab, explore how AudioCraft decodes musical properties from provided text." :
            "In the Compare Tab, analyze and compare spectrograms of uploaded and generated audio."
          }</p>
        </div>
      </div>

      <footer className={`${panelClasses} w-full py-4 mt-auto rounded-lg`}>
        <Container>
          <Nav className="flex justify-center space-x-6 text-center">
            <Nav.Link href="#" className={isDarkTheme ? "text-white hover:text-gray-400" : "text-black hover:text-gray-600"}>
              About
            </Nav.Link>
            <Nav.Link href="#" className={isDarkTheme ? "text-white hover:text-gray-400" : "text-black hover:text-gray-600"}>
              Contact Us
            </Nav.Link>
            <Nav.Link href="#" className={isDarkTheme ? "text-white hover:text-gray-400" : "text-black hover:text-gray-600"}>
              Terms of Service
            </Nav.Link>
            <Nav.Link href="#" className={isDarkTheme ? "text-white hover:text-gray-400" : "text-black hover:text-gray-600"}>
              Privacy Policy
            </Nav.Link>
          </Nav>
          <p className={`text-center mt-4 ${isDarkTheme ? "text-gray-400" : "text-gray-600"}`}>
            &copy; 2024 SoundForge. All rights reserved. Made by Cuneyt
          </p>
        </Container>
      </footer>
    </div>
  );
}