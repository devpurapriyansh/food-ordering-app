"use client";

import React from "react";
import Countdown from "react-countdown";


const endingDate = new Date("2023-09-20")
const CountDown = () => {
  return <Countdown  className=" text-5xl font-bold text-yellow-300" date={endingDate} />;
};

export default CountDown;
