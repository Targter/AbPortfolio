// import { techimg } from "./MotionValue";
import { lazy } from "react";
// import Box4Geometry from "./Box4Geometry";
import { techimg } from "./MotionValue";
import { useMemo } from "react";
import Box4Geometry from "./Page2Model";
// const BallModel = lazy(() => import("./Page2Model"));
const Box4container = () => {
  const memoizedTechimg = useMemo(() => techimg, []);

  return (
    <>
      <div className="max-w-6xl flex flex-row flex-wrap items-center justify-center lg:gap-10  gap-4 mb-[100px]">
      
        {memoizedTechimg.map((item, index) => (
          <div className="lg:w-28 w-16 lg:h-28 h-16 " key={index}>
            <Box4Geometry imgUrl={item.imgurl} key={item.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Box4container;
// export default StarWrapper(Box4container, "Dballs");
