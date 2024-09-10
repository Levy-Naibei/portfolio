import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-stack enthusiast",
          "Creative & people centric",
          "Sole contributor",
          "Working in an agile team",
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