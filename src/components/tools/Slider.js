import React from "react";
import "../../css/Slider.css";
import "use-slider/lib/slider.min.css";
import useSlider from "use-slider";
import Banner2 from "../../images/websitebanner.jpg";
import Banner from "../../images/Poster2.jpg";
import Banner3 from "../../images/Poster4.jpg";
import Banner4 from "../../images/poster5.jpg";
import { NavLink } from "react-router-dom";

const Slider = () => {
  const { ref } = useSlider({
    draggable: false,
    autoPlay: true,
    loop: true,
    navigation: true,
  });

  return (
    <div id="Slider">
      <div className="slideStyl" ref={ref}>
        <div className="photoSlide">
          <NavLink to="/Store">
            <img src={Banner} alt="photoslide" />
          </NavLink>
        </div>
        <div className="photoSlide">
        <NavLink to="/CompanyPack">
          <img src={Banner2} alt="photoslide" />
          </NavLink>
        </div>

        <div className="photoSlide">
        <NavLink to="/Identification">
          <img src={Banner4} alt="photoslide" />
          </NavLink>
        </div>

        <div className="photoSlide">
          <img src={Banner3} alt="photoslide" />
        </div>
      </div>

      <div className="motionSlide">
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-top.png",
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-mid.png",
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage:
                  "url('url('http://front-end-noobs.com/jecko/img/wave-bot.png",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
