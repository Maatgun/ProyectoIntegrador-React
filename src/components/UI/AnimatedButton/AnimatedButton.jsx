import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const AnimatedButton = () => {
  const [hovered, setHovered] = useState(false);

  const buttonAnimation = useSpring({
    transform: hovered ? "scale(1.5)" : "scale(1)",
    backgroundColor: hovered ? "#ff7f50" : "#3498db",
  });

  return (
    <animated.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...buttonAnimation,
      }}
      className="animated-button"
    >
      {hovered ? "¡Hoy es un buen día!" : "Woof Woof !"}
    </animated.button>
  );
};

export default AnimatedButton;
