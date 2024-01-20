import React from "react";
import Link from "next/link";

const CertificationPanel = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.organization}</p>
      <p>{props.date}</p>
      <Link href={`/certificate-view/${props.imageSource}`}>
        {props.name}
        <img
          src={`/images/certs/${props.imageSource}`}
          alt={`${props.title} Link`}
        />
      </Link>
      {props.skills.map((skill, index) => (
        <React.Fragment key={index}>
          <span>{skill}</span>
          {index < props.skills.length - 1 && <span> - </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CertificationPanel;
