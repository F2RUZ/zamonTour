import React from "react";
import "./location.scss";
const Location = () => {
  return (
    <div className="location">
      <h2 className="Location__title">Best Locations</h2>
      <p className="location__text">
        Discover the best offers in each city, curated just for you. Immerse
        yourself in a world of savings and indulge in unparalleled experiences.
      </p>
      <div className="location__wrapper">
        <input type="radio" name="slide" id="c1" checked />
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="icon">
              <i className="fa-regular fa-square-plus"></i>
            </div>
            <div className="description">
              <h4>Nyu York</h4>
              <p>Population: 2M</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card">
          <div className="row">
            <div className="icon">
              <i className="fa-regular fa-square-plus"></i>
            </div>
            <div className="description">
              <h4>Antalya</h4>
              <p>Population: 3.5M</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card">
          <div className="row">
            <div className="icon">
              <i className="fa-regular fa-square-plus"></i>
            </div>
            <div className="description">
              <h4>Istanbul</h4>
              <p>Population: 4.1M</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card">
          <div className="row">
            <div className="icon">
              <i className="fa-regular fa-square-plus"></i>
            </div>
            <div className="description">
              <h4>Sharm El-Sheikh</h4>
              <p>Population: 3M</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c5" />
        <label htmlFor="c5" className="card">
          <div className="row">
            <div className="icon">
              <i className="fa-regular fa-square-plus"></i>
            </div>
            <div className="description">
              <h4>Sharm El-Sheikh</h4>
              <p>Population: 3M</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Location;
