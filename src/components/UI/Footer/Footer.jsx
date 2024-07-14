import React from "react";
import "./footer.scss";

import Button from "@mui/material/Button";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <h2 className="footer__title">ARE YOU LOOKING TO TRAVEL ?</h2>
          <p className="footer__text">
            Make A Reservation By Clicking The Button
          </p>
        </div>
        <Button variant="contained">Outlined</Button>
      </div>
    </div>
  );
};

export default Footer;
