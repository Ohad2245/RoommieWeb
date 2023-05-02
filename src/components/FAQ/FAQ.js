/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function FAQ({ faq, index, toggleFAQ }) {
  // const [userLike, setUserLike] = useState(false);
  // const [likeCount, setLikeCount] = useState(0);

  // const handleClick = () => {
  //   console.log("Clicked");
  //   setUserLike(!userLike);
  //   if (!userLike) {
  //     setLikeCount(likeCount + 1);
  //   } else {
  //     setLikeCount(likeCount - 1);
  //   }
  // };

  return (
    <>
      <div
        className={"faq " + (faq.open ? "open" : "")}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        <div className="faq-question">{faq.question}</div>
        <div className="faq-answer">
          {faq.answer}
          <br />
          {faq.image}
        </div>
        {/* <button onClick={handleClick}>
          {userLike ? (
            <AiOutlineLike style={{ color: "red" }} />
          ) : (
            <AiOutlineLike />
          )}
          <span>{likeCount}</span>
        </button> */}
      </div>
    </>
  );
}

export default FAQ;
