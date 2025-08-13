import "./../styles/intro.css";
import { useNavigate } from "react-router-dom";

export default function IntroPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="intro">
      <div className="love-container" onClick={handleClick}>
        ❤️
      </div>
      <p className="hint">Click the heart to start</p>
    </div>
  );
}
