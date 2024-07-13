import React from "react";
import Explore from "../UI/Explore/Explore";
import Footer from "../UI/Footer/Footer";
import Forms from "../UI/Forms/Forms";
import Intro from "../UI/Intro/Intro";
import Location from "../UI/Locations/Location";
import Maps from "../UI/Maps/Maps";
import Reservation from "../UI/Reservation/Reservation";
import Visa from "../UI/Visa/Visa";
import Week from "../UI/Week/Week";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Week />
      <Visa />
      <Explore />
      <Location />
      <Reservation />
      <Maps />
      <Forms />
      <Footer />
    </>
  );
};

export default Layout;