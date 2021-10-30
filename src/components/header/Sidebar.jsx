import React, { useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";

// sidebar content
const sidebarContent = [
  { icon: "home", itemName: "Home", itemRoute: "#home" },
  { icon: "human", itemName: "About", itemRoute: "#about" },
  { icon: "service", itemName: "Service", itemRoute: "#service" },
  { icon: "portfolio", itemName: "Portfolio", itemRoute: "#portfolio" },
  { icon: "contact", itemName: "Contact", itemRoute: "#contact" },
];

// sidebar footer bottom content
const sidebarFooterContent = {
  avatar: "img/about/avatar.jpg",
  name: "Ken",
  email: "Email",
  emailRef: "mailto:k33mdukb9n@yahoo.co.jp",
};

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}
      <div
        className={click ? "edina_tm_sidebar menu-open" : "edina_tm_sidebar"}
      >
        <div className="sidebar_inner">

          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "about",
                "service",
                "portfolio",
                "contact",
              ]}
              activeNavClass="active"
              offset={0}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {sidebarContent.map((val, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <a href={val.itemRoute} onClick={handleClick}>
                        <img
                          className="svg custom"
                          src={`img/svg/${val.icon}.svg`}
                          alt="icon"
                        />
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          {/* End .menu */}

          <div className="author">
            <div className="inner">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + sidebarFooterContent.avatar
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3>{sidebarFooterContent.name}</h3>
                <a href={sidebarFooterContent.emailRef}>
                  {sidebarFooterContent.email}
                </a>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
