import React from "react";
import Welcome from "./../src/components/Welcome";
import withPopup from "./../src/hoc/withPopup";

const PopupWelcome = withPopup(Welcome);

const Task02 = () => (
  <div>
    <h2>Nasza aplikacja</h2>
    <PopupWelcome backgroundColor="rgba(0, 0, 0, 0.7)" />
  </div>
);

export default Task02;
