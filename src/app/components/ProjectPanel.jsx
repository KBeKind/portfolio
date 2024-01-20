import React from "react";
import Link from "next/link";

const ProjectPanel = (props) => {
  return (
    <div className="bg-sky-700 rounded h-full p-4">
      <Link href={props.link} className="m-2 text-2xl">
        {props.name}
        <p className="text-sm mx-2">{props.tech}</p>
        <img
          src={props.imageSource}
          alt={`${props.name} Link`}
          className="me-2 mt-2"
        />
      </Link>
    </div>
  );
};

export default ProjectPanel;
