import React from "react";
import Sidebar from "../../components/header/Sidebar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import Project from "../../components/project/Project";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/Contact";
import Address from "../../components/Address";
import Map from "../../components/Map";

const HomeLight = () => {
  document.body.classList.add("light");
  return (
    <div className="home-light edina_tm_mainpart">
      <Sidebar />
      {/* End Header */}
      <Hero />
      {/* End Hero */}
      <About />
      {/* End Hero */}

      <div className="edina_tm_services" id="project">
        <div className="container">
          <div className="edina_tm_title">
            <h3>What I Did</h3>
            <p>
              これまで関わったプロジェクトです。今後増やしていく予定です。
            </p>
          </div>
          {/* End edian_tm_title */}
          <Project />
        </div>
      </div>
      {/* End Services */}

      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Portfolio</h3>
            <p>
              これまで作成したポートフォリオです。準備中です。
            </p>
          </div>
          {/* End edian_tm_title */}
          {/* <Portfolio /> */}
        </div>
      </div>
      {/* End Portfolio */}

      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
            <p>
              連絡はメールからお願いします。
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default HomeLight;
