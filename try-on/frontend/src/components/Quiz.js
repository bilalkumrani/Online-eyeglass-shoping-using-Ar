import React from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";

var json = {
  pages: [
    {
      elements: [
        {
          type: "radiogroup",
          name: "category",
          title: "Category...?",
          choices: ["Sunglasses", "Eyeglasses"],
        },
        {
          type: "radiogroup",
          name: "color",
          title: "Color",
          choices: ["Transparent", "White", "Black"],
        },
        {
          type: "radiogroup",
          name: "facetype",
          title: "Face type",
          choices: ["Round", "Circle", "Square", "Ractangle", "Heart"],
        },
      ],
    },
  ],
};

const handleData = (data) => {
  console.log(data.valuesHash);
};

const Quiz = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <h2 className="text-muted text-center">You choice is our priority</h2>
          <Survey.Survey onComplete={handleData} json={json} />
        </div>
      </div>
    </>
  );
};

export default Quiz;
