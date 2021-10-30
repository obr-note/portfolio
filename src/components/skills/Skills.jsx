import React from "react";

const skillsContent = [
  {
    name: "Ruby on Rails",
    skillPercent: "95",
  },
  {
    name: "React",
    skillPercent: "90",
  },
  {
    name: "MySQL",
    skillPercent: "85",
  },
  {
    name: "SQL",
    skillPercent: "85",
  },
  {
    name: "Go",
    skillPercent: "70",
  },
  {
    name: "AWS(VPC,EC2,ELB,RDS,S3)",
    skillPercent: "70",
  },
  {
    name: "Firebase",
    skillPercent: "70",
  },
  {
    name: "Typescript",
    skillPercent: "65",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
