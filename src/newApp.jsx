import React, { useEffect, useState } from "react";
import "./App.css";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
// import Fl
export default function App() {
  gsap.registerPlugin(Flip);

  const [Expanded, setExpanded] = useState(false);

  // useEffect(() => {
  const SizeIncreasedFunction = (event) => {
    console.log("I am called;", event);
    // setExpanded(!Expanded);
    // gsap.to("ContainerBox")

    Flip.fit(".img1container", ".ContainerBox", {
      fitChild: "img1container",
      // scale: true,
      width: "300px",
      duration: 2,
      xPercent: 20,
      ease: "power1.inOut",
    });
  };
  // SizeIncreasedFunction();
  // }, []);
  // useEffect
  // useEffect(() => {
  //   const state = Flip.getState(".img1container");
  //   const container = document.querySelector(".ContainerBox");
  //   const box = document.querySelector(".img1container");

  //   container.appendChild(box);
  //   Flip.from(state, {
  //     duration: 1,
  //     ease: "power1.out",
  //     width: "50%",
  //     height: "50%",
  //     position: "absolute",
  //     top: 0,
  //     left: 0,
  //   });
  // }, []);

  return (
    <div className="ContainerBox w-[100%] h-[100vh]  overflow-hidden">
      <nav className="w-full h-[50px]"></nav>
      <div className="herosection flex flex-col justify-around  w-full gap-[50px] pt-[20px] ">
        <div className="item1 w-full h-[300px] bg-blue-300 flex flex-col justify-center items-center text-3xl font-bold ">
          <p>Helloworld</p>
          <p>Helloworld</p>
          <p>Helloworld</p>
        </div>
        <div className="item2 w-full h-[220px] bg-green-200 flex gap-[20px] justify-end items-end pb-[20px]">
          <div
            className=" img1container w-[100px] h-[100px]"
            id="img1container"
            onClick={SizeIncreasedFunction}
          >
            <img src="/images.jpeg" className="h-full w-full" />
          </div>
          <div className="w-[100px] h-[100px]">
            <img src="/images.jpeg" className="h-full w-full" />
          </div>
          <div className="w-[100px] h-[100px]">
            <img src="/images.jpeg" className="h-full w-full" />
          </div>
          <div className="w-[100px] h-[100px]">
            <img src="/images.jpeg" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
