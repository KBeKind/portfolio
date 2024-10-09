"use client";
import React, { useState } from "react";
import Card from "./Card";
import Confetti from "react-confetti";

const CardForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [answeredCorrect, setAnsweredCorrect] = useState(false);
  const [answeredWrong, setAnsweredWrong] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputVal = inputValue.toLowerCase();
    if (
      inputVal === "" ||
      inputVal === "" ||
      inputVal === "" ||
      inputVal === ""
    ) {
      setAnsweredWrong(false);
      setAnsweredCorrect(true);
    } else {
      setAnsweredCorrect(false);
      setAnsweredWrong(true);
    }

    console.log("Submitted value:", inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-10">
        <label for="input1">Who is the best mother?</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          id="input1"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-indigo-800"
          placeholder="Answer Here!"
        />

        <button
          type="submit"
          className="mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          Click To Check Your Answer
        </button>
      </form>
      {answeredCorrect && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          recycle={false}
          colors={["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]}
        />
      )}
      {answeredCorrect && <Card></Card>}
      {answeredWrong && (
        <div>
          Im sorry your answer was incorrect.
          <br />
          The correct answer rhymes with &quot;Dandy Prepfer&quot;
        </div>
      )}
    </div>
  );
};

export default CardForm;
