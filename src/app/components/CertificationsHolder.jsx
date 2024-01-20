import React from "react";
import CertificationPanel from "./CertificationPanel";
import { CERTIFICATION_LIST } from "../constants/certifications";

const CertificationsHolder = () => {
  const certifications = [];

  return (
    <div>
      {CERTIFICATION_LIST.map((cert, index) => (
        <React.Fragment key={index}>
          <CertificationPanel
            title={cert.title}
            organization={cert.organization}
            date={cert.date}
            imageSource={cert.imageSource}
            skills={cert.skills}
          />
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CertificationsHolder;
