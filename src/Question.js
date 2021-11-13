import React from "react";
import { useState } from "react";
import data from "./data";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

export const Question = () => {
  console.log(data);

  const [clicked, setClicked] = useState(false);

  // The
  const flip = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };


  return (
    <div className="don">
              {/* .map call back was used here to get the index and the content of the array */}
        {data.map((item, index) => {
          return (
            <div className="question_casing">
                <div  className="wrapper">  
              <div className="wrapper-2">
                  {/* This button toggles and time it is clicked */}
                <button onClick={() => flip(index)}  className="btn">
                  {clicked === index ? <FaMinusCircle  />: <FaPlusCircle />}
                </button>
               </div>
               <div className="qtn">
                <h4 className="title">{item.title}</h4>
                <div className="underLine"></div>
              </div>
              </div>
                {/* this will help in showing single question and answer */}
              {clicked === index ? (
                <div className="paragraph">
                  <p>{item.info}</p>
                </div>
              ) : null}


            </div>
          );
        })}
        </div>
   );
};
