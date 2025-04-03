
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Volume2, VolumeX, Play, Pause, Maximize } from "lucide-react";

const WebinarPage = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasJoined, setHasJoined] = useState(false);
  const [attendees, setAttendees] = useState(157); // Fake number to show "other attendees"
  const [showLiveIndicator, setShowLiveIndicator] = useState(true);
  const { toast } = useToast();
  const videoRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // YouTube video ID
  const videoId = "dQw4w9WgXcQ"; // Replace with your actual webinar video ID
  
  useEffect(() => {
    // Simulate generating random number of attendees every few minutes
    const interval = setInterval(() => {
      setAttendees(Math.floor(Math.random() * 50) + 130);
    }, 180000);
    
    // Hide live indicator after 45 minutes to simulate end of "live" session
    const liveTimeout = setTimeout(() => {
      setShowLiveIndicator(false);
    }, 45 * 60 * 1000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(liveTimeout);
    };
  }, []);
  
  // Simulate video player controls
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    
    // This would interact with the YouTube Player API in a real implementation
    try {
      if (videoRef.current && videoRef.current.contentWindow) {
        const message = isPlaying ? '{"event":"command","func":"pauseVideo","args":""}' : '{"event":"command","func":"playVideo","args":""}';
        videoRef.current.contentWindow.postMessage(message, '*');
      }
    } catch (e) {
      console.error("Error controlling YouTube player", e);
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    // This would interact with the YouTube Player API in a real implementation
    try {
      if (videoRef.current && videoRef.current.contentWindow) {
        const message = isMuted ? '{"event":"command","func":"unMute","args":""}' : '{"event":"command","func":"mute","args":""}';
        videoRef.current.contentWindow.postMessage(message, '*');
      }
    } catch (e) {
      console.error("Error controlling YouTube player", e);
    }
  };
  
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };
  
  const joinWebinar = () => {
    setHasJoined(true);
    setIsPlaying(true);
    
    toast({
      title: "Joined Successfully!",
      description: "You are now watching the live webinar.",
    });
    
    // Get participant data from localStorage
    try {
      const participants = JSON.parse(localStorage.getItem("webinarParticipants") || "[]");
      // Mark as watched in localStorage
      localStorage.setItem("webinarWatched", "true");
    } catch (e) {
      console.error("Error updating participant data", e);
    }
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">
            Everything You Need to Know About MBBS Abroad
          </h1>
          
          {/* Video Player Section */}
          <div className="relative rounded-lg overflow-hidden mb-6" ref={containerRef}>
            {!hasJoined && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90 flex flex-col items-center justify-center z-10 p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Webinar Starting Soon
                </h2>
                <p className="text-lg mb-8 max-w-md">
                  Join our experts as they discuss everything you need to know about pursuing MBBS abroad.
                </p>
                <Button 
                  size="lg" 
                  onClick={joinWebinar}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-4 font-semibold text-lg"
                >
                  Join Webinar Now
                </Button>
              </div>
            )}
            
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                ref={videoRef}
                src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&origin=${window.location.origin}`}
                title="MBBS Abroad Webinar"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ pointerEvents: hasJoined ? 'none' : 'auto' }}
                onLoad={() => setIsVideoReady(true)}
              ></iframe>
            </div>
            
            {/* Custom Video Controls */}
            {hasJoined && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex flex-col gap-2">
                  {/* Progress Bar */}
                  <div className="relative w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-red-600"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button onClick={togglePlay} className="text-white hover:text-gray-300">
                        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                      </button>
                      
                      <button onClick={toggleMute} className="text-white hover:text-gray-300">
                        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                      </button>
                      
                      <span className="text-sm text-gray-300">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      {showLiveIndicator && (
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-sm font-medium">LIVE</span>
                        </div>
                      )}
                      
                      <span className="text-sm text-gray-300">
                        {attendees} watching
                      </span>
                      
                      <button onClick={toggleFullScreen} className="text-white hover:text-gray-300">
                        <Maximize size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Webinar Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="col-span-2">
              <h2 className="text-xl font-semibold mb-4">About This Webinar</h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  In this comprehensive webinar, our expert counselors guide you through everything you need to know about pursuing MBBS abroad. We cover admission requirements, costs, scholarship opportunities, and the advantages of studying medicine internationally.
                </p>
                <p className="mt-4">
                  Topics covered in this session:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Admission process for top medical universities abroad</li>
                  <li>Cost comparison with Indian private medical colleges</li>
                  <li>Scholarships and financial assistance options</li>
                  <li>NMC and WHO recognition of international degrees</li>
                  <li>Life as an international medical student</li>
                  <li>Career prospects after graduating from foreign universities</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Webinar Presenters</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    DR
                  </div>
                  <div>
                    <h4 className="font-medium">Dr. Rahul Sharma</h4>
                    <p className="text-sm text-gray-400">Education Counselor, MBBS Ukraine</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">
                    AP
                  </div>
                  <div>
                    <h4 className="font-medium">Dr. Anya Petrov</h4>
                    <p className="text-sm text-gray-400">Head of Admissions, TSMU</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Ask Questions</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Have questions? Our experts will answer them during the Q&A section.
                </p>
                <Button className="w-full" variant="outline">
                  Submit a Question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WebinarPage;
