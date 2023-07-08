import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { QandAData } from "../../data/QandAData";
import { AnimatePresence, motion } from "framer-motion";

const QandA = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleShowAnswer = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  return (
    <div
      id="faq"
      className="w-full xl:w-[1300px] mx-auto flex justify-between gap-6 lg:gap-24 xl:gap-32 flex-col md:flex-row px-4 xl:px-0 pt-20 xl:pt-32"
    >
      <h4 className="text-center md:pt-6 xl:pt-0 h4-style md:text-start">
        Have questions? <br /> We have answers.
      </h4>
      <div className="flex-1">
        {QandAData.map((item, i) => (
          <div key={i} className="home-p-style">
            <button
              className={`flex items-center justify-between w-full px-5 py-6 text-xl xl:text-2xl ${
                i === 4 ? "border-y" : "border-t"
              }`}
              onClick={() => handleShowAnswer(i)}
            >
              <p>{item.question}</p>
              <FontAwesomeIcon
                icon={selectedQuestion === i ? faMinus : faPlus}
              />
            </button>
            <AnimatePresence>
              {selectedQuestion === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <p
                    className={`px-5 py-6 ${i <= 3 ? "border-t" : " border-b"}`}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QandA;
