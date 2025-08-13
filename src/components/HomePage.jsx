import "./../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    // যদি আগে music চালু ছিল, আবার play কর
    if (localStorage.getItem("musicPlaying") === "true") {
      audioRef.current
        .play()
        .catch(() => console.log("Autoplay blocked until user interaction"));
    }

    // Confetti generate inline
    const container = document.querySelector(".home");
    const colors = ["#FF4C4C", "#FFD700", "#FF69B4", "#00CED1", "#4CFF4C", "#4C4CFF"];

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.width = `${5 + Math.random() * 8}px`;
      confetti.style.height = `${8 + Math.random() * 10}px`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
      confetti.style.animationDelay = `${Math.random() * 5}s`;
      confetti.style.top = `${-10 - Math.random() * 10}vh`; // start from above
      container.appendChild(confetti);
    }
  }, []);

  const handleClick = (path) => {
    // প্রথম click এ music চালু কর + state save কর
    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => localStorage.setItem("musicPlaying", "true"))
        .catch((err) => console.log("Autoplay blocked:", err));
    }
    navigate(path);
  };

  return (
    <div className="home">
      <audio ref={audioRef} loop>
        <source src="/music/happy-birthday-323162.mp3" type="audio/mpeg" />
      </audio>

      <div className="overlay">
        <h1>🎂 Welcome to Your Special Day 🎂</h1>
        <p>Click to go to the next page</p>
        <button onClick={() => handleClick("/wish")}>Click here</button>
      </div>
    </div>
  );
}
