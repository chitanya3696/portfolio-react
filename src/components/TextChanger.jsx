import React, { useState, useEffect } from "react";

const TextChanger = () => {
  const texts = ["Hello I am Chaitanya"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        if (endValue < texts[index].length) {
          setEndValue((prev) => prev + 1);
        } else {
          setIsForward(false);
        }
      } else {
        if (endValue > 0) {
          setEndValue((prev) => prev - 1);
        } else {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length); // Cycle through texts
        }
      }
    }, 150); // Adjust the speed of animation by changing the delay here

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div className="bg-[#171d32] text- h-auto w-full overflow-hidden text-center p-4">
      {currentText}
    </div>
  );
};

export default TextChanger;
