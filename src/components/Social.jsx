import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const SocialShare = [
  // {
  //   iconName: <FiFacebook />,
  //   link: "https://www.facebook.com/ken.obara.3939",
  // },
  { iconName: <FiTwitter />, link: "https://twitter.com/2_obr" },
  { iconName: <FiGithub />, link: "https://github.com/obrkn" },
  // {
  //   iconName: <FiInstagram />,
  //   link: "https://www.instagram.com/ken.obara.3939",
  // },
  // {
  //   iconName: <FiLinkedin />,
  //   link: "https://www.linkedin.com/in/ken-obara-807a891b1",
  // },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
