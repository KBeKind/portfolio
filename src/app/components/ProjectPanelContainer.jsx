import React from "react";

import ProjectPanel from "./ProjectPanel";

const ProjectPanelContainer = (props) => {
  return (
    <div className="relative group w-full lg:w-fit bg-sky-700 justify-center duration-500 hover:!scale-105 lg:group-hover/1:scale-90 hover:rounded lg:group-hover/1:m-4 hover:mb-8 hover:mt-8 ">
      <div className="absolute -inset-1 bg-gradient-to-b from-sky-300 to-sky-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-500"></div>
      <div className="relative px-1 py-1  leading-none flex items-top justify-center space-x-6">
        <ProjectPanel
          name={props.name}
          imageSource={props.imageSource}
          link={props.link}
        />
      </div>
    </div>
  );
};

export default ProjectPanelContainer;
