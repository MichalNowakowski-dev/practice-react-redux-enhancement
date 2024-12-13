// Timer.jsx
import React from "react";

const Timer = ({ hours, minutes, seconds }) => {
  return (
    <section>
      Dziękujemy, że jesteś z nami już {hours}h {minutes}m {seconds}s.
    </section>
  );
};

export default Timer;
