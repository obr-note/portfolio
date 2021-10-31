import React, { useState } from "react";
import Modal from "react-modal";
import Tilt from "react-parallax-tilt";
import ModalFour from "./modal/ModalFour";
import ModalOne from "./modal/ModalOne";
import ModalThree from "./modal/ModalThree";
import ModalTwo from "./modal/ModalTwo";

Modal.setAppElement("#root");

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <div className="service_list">
      <ul>
        {/* Start Project Motion & Web Graphy */}
        <li data-aos="fade-right" data-aos-duration="1200">
          <Tilt>
            <div className="list_inner" onClick={toggleModalOne}>
              <div className="hover">
                <img className="svg custom" src="img/svg/1.svg" alt="" />
                <div className="service_title">
                  <h3>(自社プロダクト)コミュニティサービス</h3>
                </div>
                <div className="learn_more">
                  もっと詳しく<span></span>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Project Motion & Web Graphy */}

        {/* Start Project Ui/Ux Consultancy */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
          <Tilt>
            <div className="list_inner" onClick={toggleModalTwo}>
              <div className="hover">
                <img className="svg custom" src="img/svg/2.svg" alt="" />
                <div className="service_title">
                  <h3>(個人開発)Twitter風アプリ</h3>
                </div>
                <div className="learn_more">
                  もっと詳しく<span></span>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Project Ui/Ux Consultancy */}

        {/* Start Project Branding & Design */}
        {/* <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
          <Tilt>
            <div className="list_inner" onClick={toggleModalThree}>
              <div className="hover">
                <img className="svg custom" src="img/svg/3.svg" alt="" />
                <div className="service_title">
                  <h3>Branding &amp; Design</h3>
                </div>
                <div className="learn_more">
                  Learn More<span></span>
                </div>
              </div>
            </div>
          </Tilt>
        </li> */}
        {/* End Project Branding & Design */}

        {/* Start Project Mobile App Design */}
        {/* <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
          <Tilt>
            <div className="list_inner" onClick={toggleModalFour}>
              <div className="hover">
                <img className="svg custom" src="img/svg/4.svg" alt="" />
                <div className="service_title">
                  <h3>Mobile App Design</h3>
                </div>
                <div className="learn_more">
                  Learn More<span></span>
                </div>
              </div>
            </div>
          </Tilt>
        </li> */}
        {/* End Project Mobile App Design */}
      </ul>

      {/* Start Modal Motion Graphy */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ModalOne />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Motion Graphy */}

      {/* Start Modal Branding & Design */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ModalTwo />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Branding & Design */}

    </div>
  );
};

export default Project;
