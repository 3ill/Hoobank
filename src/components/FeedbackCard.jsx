import React from "react";
import { quotes } from "../assets";
import styles from "../styles";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p
        className={` text-[18px] font-poppins w-[290px] h-[128px] leading-[32px] text-white my-10`}
      >
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

        <div className="flex flex-col ml-4">
          <h4
            className={` text-[20px] font-poppins font-semibold  leading-[32px] text-white`}
          >
            {name}
          </h4>
          <p  className={` text-[16px] font-poppins font-normal  leading-[24px]  text-dimWhite`}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
