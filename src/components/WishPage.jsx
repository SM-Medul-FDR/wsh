import "./../styles/wish.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function WishPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const colors = ["#FF4C4C", "#4CFF4C", "#4C4CFF", "#FFD700", "#FF69B4", "#00CED1"];
    const container = document.getElementById("balloon-container");

    for (let i = 0; i < 30; i++) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";

      // Random color from array
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      balloon.style.left = `${Math.random() * 100}vw`;
      balloon.style.animationDuration = `${5 + Math.random() * 5}s`;
      container.appendChild(balloon);
    }
  }, []);

  return (
    <div className="wish">
      <audio autoPlay loop>
        <source src="/public/music/happy-birthday-323162.mp3" type="audio/mpeg" />
      </audio>
      <div id="balloon-container"></div>
      <div className="message">
        <h1>🎉 Happy Birthday 🎉</h1>
        <p>Wishing you a day filled with love and joy! ❤️</p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </div>
  );
}
