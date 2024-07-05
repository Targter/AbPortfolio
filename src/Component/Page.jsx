import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Page = () => {
  const InvisibleContainer = useRef();
  const item = useRef();
  const fitImg = useRef();
  const hoverBox = useRef();

  const ContainerShownFunction = (src) => {
    // console.log(event, "this is event");
    gsap.fromTo(
      ".recentlyImgContainer",
      {
        visibility: "invisible",
        opacity: 0,
        y: "-200px",
        xPercent: 0,
        onComplete: () => {
          hoverBox.current.src = src;
        },
      },
      {
        visibility: "visible",
        y: 0,
        opacity: 1,
        duration: 1,
        xPercent: 0,
      }
    );
  };

  const ContainerHideFunction = () => {
    // console.log("Iamon");
    gsap.fromTo(
      ".recentlyImgContainer",
      { visibility: "visible", opacity: 1 },
      {
        visibility: "invisible",
        opacity: 0,
        duration: 0.9,
      }
    );
  };
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prevMousePos, setPrevMousePos] = useState({ x: 0, y: 0 });
  var t1 = gsap.timeline();
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPrevMousePos(mousePos);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos]);

  //
  const MoveItems = (e) => {
    const deltaX = mousePos.x - prevMousePos.x;
    const deltaY = mousePos.y - prevMousePos.y;
    t1.to(".itemsvg", {
      x: `+=${deltaX * 0.1}`,
      y: `+=${deltaY * 0.1}`,
      duration: 0.5,
      ease: "power1.out",
    });
  };
  //

  const images = [
    { id: 1, src: "./a12.png", pth: "page1" },
    { id: 2, src: "./db.jpeg", pth: "page2" },
    { id: 3, src: "./images.jpeg", pth: "page3" },
    // Add more images as needed
  ];

  // import useGsap :
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    t1.fromTo(
      ".itemsvg",
      { opacity: 0, y: "100px" },
      {
        y: 0,
        opacity: 1,
        stagger: 0.7,
        ease: "elastic.out(1, 0.3)",
        duration: 1,
      }
    );

    t1.fromTo(
      ".FullStack",
      { y: "200px", opacity: 0, duration: 0.8 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.7,
        ease: "back.inOut(4)",
      }
    );
    t1.fromTo(
      ".softwareneg",
      { opacity: 0, y: "100px", duration: 0.9 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.7,
        ease: "back.inOut(4)",
      }
    );
    // softwareneg

    t1.fromTo(
      ".provide ,.resume ,.details ,.box11",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  });
  return (
    <>
      <div
        className="container w-full bg-white h-[82vh] flex justify-start items-center gap-[100px]"
        onMouseEnter={(e) => MoveItems(e, e.currentTarget)}
        onMouseMove={(e) => MoveItems(e, e.currentTarget)}
        onMouseLeave={(e) => MoveItems(e)}
      >
        <div
          className="recentlyImgContainer w-[400px] border-r-8 border-b-8 rounded-b-xl h-[95vh] flex flex-col gap-11 items-center absolute top-[25px] invisible"
          ref={InvisibleContainer}
        >
          <div className="w-full h-[80px] bg-slate-600 rounded mt-9 flex justify-center items-center ">
            <p className="font-extrabold text-4xl text-white">MyName</p>
          </div>
          <img className="border-2 w-[200px] h-[200px] " ref={hoverBox} />

          <div
            className="detailscontainer w-[80%] text-justify font-semibold text-ls
"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            dolor nesciunt numquam doloremque aliquam odit cupiditate vero
            architecto iure quis repudiandae, voluptates praesentium ex
            recusandae officia? Sed omnis eaque fuga accusantium ipsa aperiam
            ullam provident, nesciunt, velit totam nihil voluptatibus?
          </div>
        </div>
        <div
          className="h-auto lg:w-full w-[1000px] flex lg:flex-row flex-col justify-start items-start overflow-hidden text-black mb-[120px] lg:justify-center  lg:items-center  mt-[200px]"
          id="Home"
        >
          <div className="lg:h-[530px] h-auto flex flex-col justify-center items-center  text-center lg:mt-[100px] mt-[80px]">
            <div className=" w-[400px] lg:w-[500px] text-black lg:h-[50px] h-[20px] lg:text-3xl text-sm provide font-medium">
              Providing the best project experience
            </div>

            <div className=" lg:w-10/12 w-full lg:h-[250px] h-[100px] lg:text-7xl text-4xl flex flex-col itmes-center mt-[20px] ">
              <span className="FullStack font-bold">Full Stack</span>

              <span>
                {" "}
                <svg
                  className="inline justify-center items-center text-slate-800 itemsvg"
                  // width="200"
                  width="200"
                  height="60"
                  viewBox="80 45 120 100"
                  fill="red"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    // className="bg-red-100"
                    // color="red"
                    d="M89.1138 112.613C83.1715 121.719 73.2139 133.243 59.9641 133.243C53.7005 133.243 47.6777 130.665 47.6775 119.464C47.677 90.9369 86.6235 46.777 122.76 46.7764C143.317 46.776 151.509 61.0389 151.509 77.2361C151.509 98.0264 138.018 121.799 124.608 121.799C120.352 121.799 118.264 119.462 118.264 115.756C118.264 114.789 118.424 113.741 118.746 112.613C114.168 120.429 105.335 127.683 97.0638 127.683C91.0411 127.683 87.9898 123.895 87.9897 118.576C87.9897 116.642 88.3912 114.628 89.1138 112.613ZM115.936 68.7103C112.665 68.7161 110.435 71.4952 110.442 75.4598C110.449 79.4244 112.689 82.275 115.96 82.2693C119.152 82.2636 121.381 79.4052 121.374 75.4405C121.367 71.4759 119.128 68.7047 115.936 68.7103ZM133.287 68.6914C130.016 68.6972 127.786 71.4763 127.793 75.4409C127.8 79.4055 130.039 82.2561 133.311 82.2504C136.503 82.2448 138.732 79.3863 138.725 75.4216C138.718 71.457 136.479 68.6858 133.287 68.6914Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              {/* <dotlottie-player src="/lottie/wink-purple.lottie"></dotlottie-player> */}

              <span className="block softwareneg font-bold">
                {" "}
                Software Engineer
              </span>
            </div>

            <div className="myinfo w-full lg:h-[100px] h-[50px] flex justify-center resume mt-[20px] mb-[20px]">
              <button className="bg-[#2B2D42] lg:h-[70px] h-[30px] lg:w-[300px] w-[150px] rounded-lg lg:text-xl text-sm  lg:font-bold font-light hover:bg-slate-700 text-slate-400 hover:text-white transition duration-300 ease-in-out">
                Download Resume
              </button>
            </div>
            <div className="w-3/4 lg:h-[200px] h-auto text-lg text-center lg:p-0 p-2 details ">
              I'm a Full Stack Software Engineer with experience in Website,
              Mobile, and Software development. Check out my projects and
              skills.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end pr-[20px] overflow-auto gap-[10px] box11">
        {/*  */}
        {images.map((image, index) => (
          <Link to={image.pth} key={index}>
            {" "}
            <div
              className="ItemContainer"
              ref={item}
              onMouseEnter={() => ContainerShownFunction(image.src)}
              onMouseLeave={ContainerHideFunction}
            >
              <img
                // id={image.id}
                src={image.src}
                ref={fitImg}
                className="   rounded-lg imgcontainer w-full h-full "
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
