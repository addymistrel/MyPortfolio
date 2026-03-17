import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="flex flex-col items-center justify-between w-28"
          key={technology.name}
        >
          <div className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
          <p className="mt-2 text-[12px] text-secondary text-center">
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
