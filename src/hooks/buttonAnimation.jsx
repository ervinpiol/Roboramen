import { useState } from "react";

const buttonAnimation = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    setTimeout(() => {
      setActiveButton(null);
    }, 300);
  };

  return { activeButton, handleButtonClick };
};

export default buttonAnimation;
