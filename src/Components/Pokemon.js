import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = () => {
  const [num, setnum] = useState();
  const [name, setname] = useState();
  const [moves, setmoves] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setname(res.data.name);
      setmoves(res.data.moves.length);
    }
    getData();
  });

  return (
    <>
      <h1>You choose <span style={{ color: "red" }}>{num}</span>!</h1>
      <h1>Your pokemon is <span style={{ color: "red" }}>{name}</span>!</h1>
      <h1>I have <span style={{ color: "red" }}>{moves}</span> moves!</h1>
      <select
        name="" id=""
        value={num}
        onChange={(event) => {
          setnum(event.target.value);
        }}
      >
        {Array.from({ length: 1000 }, (_, index) => index +1).map((option) =>
        <option key={option} value={option}>
          {option}
        </option>
        )}
      </select>
    </>
  )
}

export default Pokemon;