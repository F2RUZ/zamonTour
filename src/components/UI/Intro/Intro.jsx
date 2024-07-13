// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./intro.scss";

//MaterialUI

import Button from "@mui/material/Button";
const Intro = () => {
  return (
    <div className="intro">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="intro__slide">
            <div className="intro__top">
              <p className="intro__text">
                Take a Glimpse Into The Beautiful City Of:
              </p>
              <h2 className="intro__title">Istanbul</h2>
              <Button variant="contained">Go There</Button>
            </div>

            <div className="intro__bottom">
              <div className="intro__card">
                <span className="intro__sircle">
                  <i className="fa-solid fa-user"></i>
                </span>

                <div className="intro__card-left">
                  <p className="intro__card-text">Population</p>
                  <h3 className="intro__card-title">69.86 M</h3>
                </div>
              </div>
              <div className="intro__card">
                <span className="intro__sircle">
                  <i className="fa-solid fa-earth-americas"></i>
                </span>

                <div className="intro__card-left">
                  <p className="intro__card-text">Territory:</p>
                  <h3 className="intro__card-title">44.48 M</h3>
                </div>
              </div>{" "}
              <div className="intro__card">
                <span className="intro__sircle">
                  <i className="fa-solid fa-house"></i>
                </span>

                <div className="intro__card-left">
                  <p className="intro__card-text">AVG Price:</p>
                  <h3 className="intro__card-title">$946.000</h3>
                </div>
              </div>{" "}
              <Button variant="contained">Explore More</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
     
          <div className="intro__slide intro__dubai">
            <div className="intro__top">
              <p className="intro__text">
                Take a Glimpse Into The Beautiful City Of:
              </p>
              <h2 className="intro__title">Dubai</h2>
              <Button variant="contained">Go There</Button>
            </div>

            <div className="intro__bottom">
              <div className="intro__card">
                <span className="intro__sircle">
                  <i className="fa-solid fa-user"></i>
                </span>

                <div className="intro__card-left">
                  <p className="intro__card-text">Population</p>
                  <h3 className="intro__card-title">67.41 M</h3>
                </div>
              </div>
              <div className="intro__card">
                <span className="intro__sircle">
                  <i className="fa-solid fa-earth-americas"></i>
                </span>

                <div className="intro__card-left">
                  <p className="intro__card-text">Territory:</p>
                  <h3 className="intro__card-title">551.500 KM2</h3>
                </div>
              </div>{" "}
              <div className="intro__card">
                <span className="intro__sircle">
                  <i className="fa-solid fa-house"></i>
                </span>

                <div className="intro__card-left">
                  <p className="intro__card-text">AVG Price:</p>
                  <h3 className="intro__card-title">$425.600</h3>
                </div>
              </div>{" "}
              <Button variant="contained">Explore More</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
       
          <div className="intro__slide intro__antalia  ">
            <div className="intro__top">
              <p className="intro__text">
                Take a Glimpse Into The Beautiful City Of:
              </p>
              <h2 className="intro__title">Antalia</h2>
              <Button variant="contained">Go There</Button>
            </div>

            <div className="intro__bottom">
              <div className="intro__card">
                <span className="intro__sircle">
                  <i className="fa-solid fa-user"></i>
                </span>

                <div className="intro__card-left">
                  <p className="intro__card-text">Population</p>
                  <h3 className="intro__card-title">8.66 M</h3>
                </div>
              </div>
              <div className="intro__card">
                <span className="intro__sircle">
                  <i className="fa-solid fa-earth-americas"></i>
                </span>

                <div className="intro__card-left">
                  <p className="intro__card-text">Teretory:</p>
                  <h3 className="intro__card-title">41.290 KM2</h3>
                </div>
              </div>{" "}
              <div className="intro__card">
                <span className="intro__sircle">
                  <i className="fa-solid fa-house"></i>
                </span>

                <div className="intro__card-left">
                  <p className="intro__card-text">AVG Price:</p>
                  <h3 className="intro__card-title">$1.100.200</h3>
                </div>
              </div>{" "}
              <Button variant="contained">Explore More</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
     
          <div className="intro__slide intro__sharm">
            <div className="intro__top">
              <p className="intro__text">
                Take a Glimpse Into The Beautiful City Of:
              </p>
              <h2 className="intro__title">Sharm El-Sheikh</h2>
              <Button variant="contained">Go There</Button>
            </div>

            <div className="intro__bottom">
              <div className="intro__card">
                <span className="intro__sircle">
                  <i className="fa-solid fa-user"></i>
                </span>

                <div className="intro__card-left">
                  <p className="intro__card-text">Population</p>
                  <h3 className="intro__card-title">649.86 M</h3>
                </div>
              </div>
              <div className="intro__card">
                <span className="intro__sircle">
                  <i className="fa-solid fa-earth-americas"></i>
                </span>

                <div className="intro__card-left">
                  <p className="intro__card-text">Teretory</p>
                  <h3 className="intro__card-title">11.86 </h3>
                </div>
              </div>{" "}
              <div className="intro__card">
                <span className="intro__sircle">
                  <i className="fa-solid fa-house"></i>
                </span>

                <div className="intro__card-left">
                  <p className="intro__card-text">AVG Price:</p>
                  <h3 className="intro__card-title">690.86 M</h3>
                </div>
              </div>{" "}
              <Button variant="contained">Explore More</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="intro__wrapper"></div>
    </div>
  );
};

export default Intro;
