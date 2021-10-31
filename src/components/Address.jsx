import React from "react";

const Address = () => {
  return (
    <ul className="wrapper">
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/email.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Email</h3>
            <ul>
              <li>
                <a href="mailto:k33mdukb9n@yahoo.co.jp">k33mdukb9n@yahoo.co.jp</a>
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
    </ul>
  );
};

export default Address;
