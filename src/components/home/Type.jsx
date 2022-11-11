import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend enthusiast",
          "MERN-G stack developer",
          "Creative & people centric",
          "Working in agile teams",
          "Learning new technologies"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;