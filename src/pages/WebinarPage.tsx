
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Volume2, VolumeX, Play, Pause, Maximize, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const [question, setQuestion] = useState("");
  const [isAskingQuestion, setIsAskingQuestion] = useState(false);
  const [questions, setQuestions] = useState<Array<{text: string; answered: boolean}>>([]);
  const { toast } = useToast();
  const videoRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // YouTube video ID
  const videoId = "dQw4w9WgXcQ"; // Replace with your actual webinar video ID
  
  useEffect(() => {
    // Check if user has already joined from localStorage
    const hasWatched = localStorage.getItem("webinarWatched") === "true";
    if (hasWatched) {
      setHasJoined(true);
      setIsPlaying(true);
    }
    
    // Simulate generating random number of attendees every few minutes
    const interval = setInterval(() => {
      setAttendees(Math.floor(Math.random() * 50) + 130);
    }, 180000);
    
    // Hide live indicator after 45 minutes to simulate end of "live" session
    const liveTimeout = setTimeout(() => {
      setShowLiveIndicator(false);
    }, 45 * 60 * 1000);

    // Update video progress bar every second
    const progressInterval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          return newTime > duration ? duration : newTime;
        });
      }
    }, 1000);
    
    // Set fake duration
    setDuration(3600); // 1 hour video
    
    return () => {
      clearInterval(interval);
      clearTimeout(liveTimeout);
      clearInterval(progressInterval);
    };
  }, [isPlaying, duration]);
  
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

  const submitQuestion = () => {
    if (!question.trim()) return;
    
    // Add question to list
    setQuestions(prev => [...prev, {text: question, answered: false}]);
    
    // Show confirmation toast
    toast({
      title: "Question Submitted!",
      description: "Our experts will answer your question shortly.",
    });
    
    // Reset the input
    setQuestion("");
    setIsAskingQuestion(false);
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
        <div className="container mx-auto px-4 py-4 md:py-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Everything You Need to Know About MBBS Abroad
          </h1>
          
          {/* Video Player Section */}
          <div className="relative rounded-lg overflow-hidden mb-4 md:mb-6" ref={containerRef}>
            {!hasJoined && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90 flex flex-col items-center justify-center z-10 p-4 md:p-8 text-center">
                <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
                  Webinar Starting Soon
                </h2>
                <p className="text-base md:text-lg mb-6 md:mb-8 max-w-md">
                  Join our experts as they discuss everything you need to know about pursuing MBBS abroad.
                </p>
                <Button 
                  size={isMobile ? "default" : "lg"}
                  onClick={joinWebinar}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 md:px-8 py-2 md:py-4 font-semibold text-sm md:text-lg"
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 md:p-4">
                <div className="flex flex-col gap-2">
                  {/* Progress Bar */}
                  <div className="relative w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-red-600"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-y-2">
                    <div className="flex items-center gap-2 md:gap-4">
                      <button onClick={togglePlay} className="text-white hover:text-gray-300 focus:outline-none">
                        {isPlaying ? <Pause size={isMobile ? 20 : 24} /> : <Play size={isMobile ? 20 : 24} />}
                      </button>
                      
                      <button onClick={toggleMute} className="text-white hover:text-gray-300 focus:outline-none">
                        {isMuted ? <VolumeX size={isMobile ? 20 : 24} /> : <Volume2 size={isMobile ? 20 : 24} />}
                      </button>
                      
                      <span className="text-xs md:text-sm text-gray-300 hidden sm:inline-block">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 md:gap-4 ml-auto sm:ml-0">
                      {showLiveIndicator && (
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-1 md:mr-2 animate-pulse"></div>
                          <span className="text-xs md:text-sm font-medium">LIVE</span>
                        </div>
                      )}
                      
                      <span className="text-xs md:text-sm text-gray-300 hidden sm:inline-block">
                        {attendees} watching
                      </span>
                      
                      <button onClick={toggleFullScreen} className="text-white hover:text-gray-300 focus:outline-none">
                        <Maximize size={isMobile ? 16 : 20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Webinar Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold mb-2 md:mb-4">About This Webinar</h2>
              <div className="prose prose-invert max-w-none text-sm md:text-base">
                <p>
                  In this comprehensive webinar, our expert counselors guide you through everything you need to know about pursuing MBBS abroad. We cover admission requirements, costs, scholarship opportunities, and the advantages of studying medicine internationally.
                </p>
                <p className="mt-2 md:mt-4">
                  Topics covered in this session:
                </p>
                <ul className="list-disc list-inside mt-1 md:mt-2 space-y-1">
                  <li>Admission process for top medical universities abroad</li>
                  <li>Cost comparison with Indian private medical colleges</li>
                  <li>Scholarships and financial assistance options</li>
                  <li>NMC and WHO recognition of international degrees</li>
                  <li>Life as an international medical student</li>
                  <li>Career prospects after graduating from foreign universities</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-3 md:mb-4">Webinar Presenters</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-base md:text-lg">
                    DR
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base">Dr. Rahul Sharma</h4>
                    <p className="text-xs md:text-sm text-gray-400">Education Counselor, MBBS Ukraine</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-base md:text-lg">
                    AP
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base">Dr. Anya Petrov</h4>
                    <p className="text-xs md:text-sm text-gray-400">Head of Admissions, TSMU</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-2 md:mb-4">Ask Questions</h3>
                
                {isAskingQuestion ? (
                  <div className="space-y-3">
                    <Textarea 
                      placeholder="Type your question here..." 
                      className="w-full bg-gray-700 border-gray-600 text-white text-sm md:text-base"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                    <div className="flex gap-2 justify-end">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setIsAskingQuestion(false)}
                      >
                        Cancel
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={submitQuestion}
                        className="bg-blue-600 hover:bg-blue-700"
                        disabled={!question.trim()}
                      >
                        <Send className="mr-2 h-4 w-4" /> Submit
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
                      Have questions? Our experts will answer them during the Q&A section.
                    </p>
                    <Button 
                      className="w-full" 
                      variant="outline" 
                      size={isMobile ? "sm" : "default"}
                      onClick={() => setIsAskingQuestion(true)}
                    >
                      Ask a Question
                    </Button>
                  </>
                )}
                
                {/* Submitted Questions */}
                {questions.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium text-gray-300">Your Questions</h4>
                    {questions.map((q, index) => (
                      <div key={index} className="bg-gray-700/50 p-2 md:p-3 rounded text-xs md:text-sm">
                        <p>{q.text}</p>
                        <div className="flex items-center mt-1">
                          <div className={`w-2 h-2 rounded-full mr-2 ${q.answered ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                          <span className="text-xs text-gray-400">{q.answered ? 'Answered' : 'Pending'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
