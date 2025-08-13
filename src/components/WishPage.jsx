import "./../styles/wish.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function WishPage() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    const colors = ["#FF4C4C", "#4CFF4C", "#4C4CFF", "#FFD700", "#FF69B4", "#00CED1"];
    const container = document.getElementById("balloon-container");

    for (let i = 0; i < 30; i++) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.left = `${Math.random() * 100}vw`;
      balloon.style.animationDuration = `${5 + Math.random() * 5}s`;
      container.appendChild(balloon);
    }

    // Autoplay চেষ্টা
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch(() => {
          console.log("Autoplay blocked, waiting for user interaction");
        });
    }
  }, []);

  const handleClick = (path) => {
    // যদি autoplay ব্লক হয়, প্রথম ক্লিকেই চালু করো
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((err) => console.log("Play error:", err));
    }
    navigate(path);
  };

  return (
    <div className="wish">
      {/* public/music/ ফোল্ডার থেকে মিউজিক */}
      <audio ref={audioRef} loop>
        <source src="/music/abid-muu.mp3" type="audio/mpeg" />
      </audio>

      <div id="balloon-container"></div>

      <div className="message">
        <h1>Happy Birthday</h1>

        <p className="p2">
          Happy Birthday, Marjana. Just as this day is special for you, it is equally special for me. 
          I always wish for you to stay happy, for pain to never touch you, and for you to never remain 
          in a place where sorrow lives.

          I found you, yet I lost you — and that pain will stay with me for a lifetime. 
          If I had never hidden my emotions and weaknesses from you, maybe things wouldn’t have 
          turned out this way. I was wrong! But now, I have changed. Now I know what I truly want… 
          losing you has helped me find myself. “Mialwwueo”… maybe!

          Anyway, I won’t look back anymore. Today is a beautiful day, and I hope yours will be filled 
          with love, smiles, and joy.
        </p>

        <hr />

        <p className="p1">
          Happy Birthday, Marjana. আজকের এই দিনটা তোমার কাছে যেমন বিশেষ, আমার কাছেও তেমনই বিশেষ। 
          আমি সবসময় চাই তুমি ভালো থাকো, কষ্ট যেন তোমাকে কখনো স্পর্শ না করে। 
          যেখানে কষ্ট পাবে, সেখানে যেন তুমি কখনোই না থাকো।

          তোমাকে আমি পেয়েও হারিয়েছি — এই কষ্ট আমার সারাজীবনের। আমার আবেগ আর দুর্বলতার কথা 
          তোমাকে না বললে হয়তো আজ এমনটা হতো না। I was wrong! কিন্তু এখন আমি বদলে গেছি, 
          এখন আমি জানি আমি কী চাই… তোমাকে হারিয়ে আমি নিজেকে চিনেছি। “Mialwwueo”… Maybe!

          যাই হোক, আর অতীতে ফিরব না। আজ তোমার জন্য একটা সুন্দর দিন। 
          আশা করি তোমার দিনটা ভালোবাসা, হাসি আর আনন্দে ভরে উঠবে।
        </p>

        <button onClick={() => handleClick("/")}>Back to Home</button>
      </div>
    </div>
  );
}
