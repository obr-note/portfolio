import React from "react";
import Hobbies from "../Hobbies";
import Certification from "../Certification";
import Experience from "../Experience";
import Education from "../Education";

const ModalContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h3>Certification</h3>
          <Certification />
        </div>
        {/* End  Certification */}

        <div className="col-6 achievements-wrapper">
          <h3>Hobbies</h3>
          <Hobbies />
        </div>
        {/* End  Hobbies */}
      </div>
      {/* End .row */}

      <div className="row resume-box">
        <div className="col-6">
          <h3>Experience</h3>
          <Experience />
        </div>
        {/* End  Experience */}

        <div className="col-6">
          <h3>Education</h3>
          <Education />
        </div>
        {/* End  Education */}
      </div>
    </>
  );
};

export default ModalContent;
