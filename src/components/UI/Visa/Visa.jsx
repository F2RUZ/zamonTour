import React from "react";
import "./visa.scss";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
const Visa = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="visa">
      <hr className="visa__hr" />
      <div className="visa__wrapper">
        <h2 className="visa__title">Visa Support</h2>
        <p className="visa__text">
          Experience stress-free travel with our expert visa support. We provide
          seamless assistance and comprehensive guidance, ensuring a smooth
          journey.
        </p>
      </div>

      <Slider {...settings} className="week__slider">
        <div className="week__card  visa__card">
          <CardMedia
            component="img"
            height="500"
            image="https://zamontour.uz/assets/images/oman.jpg"
            alt="green iguana"
            className="week__pic visa__pic"
          />
          <Card className="week__item  visa__item" sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <div className="week__card-top">
                <div className="week__card-wrapper">
                  <h3 className="week__card-title">Oman</h3>
                </div>

                <div className="week__card-box">
                  <div>
                    <i className="fa-solid fa-users"></i>
                    <span className="week__card-subtext"> 200 Check Ins</span>
                  </div>

                  <div></div>
                </div>
              </div>

              <hr className="week__hr" />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Benifits of 
                </Typography>
                <Typography variant="body2" color="text.secondary">
               <i className="fa-solid fa-thumbtack"></i>
                  <span className="week__card-subtext ">
                    5 days Trip Hotel includes
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-regular fa-clock"></i>
                  <span className="week__card-subtext">
                    Short proccessing time
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-check"></i>
                  <span className="week__card-subtext">
                    Trustworthy Assistance
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained">Make a Reservation</Button>
            </CardActions>
          </Card>
        </div>
        <div className="week__card  visa__card">
          <CardMedia
            component="img"
            height="500"
            image="https://zamontour.uz/assets/images/china.jpg"
            alt="green iguana"
            className="week__pic visa__pic"
          />
          <Card className="week__item  visa__item" sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <div className="week__card-top">
                <div className="week__card-wrapper">
                  <h3 className="week__card-title">China</h3>
                </div>

                <div className="week__card-box">
                  <div>
                    <i className="fa-solid fa-users"></i>
                    <span className="week__card-subtext">300 check Ins</span>
                  </div>

                  <div></div>
                </div>
              </div>

              <hr className="week__hr" />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Benifits of 
                </Typography>
                <Typography variant="body2" color="text.secondary">
               <i className="fa-solid fa-thumbtack"></i>
                  <span className="week__card-subtext">
                    5 days Trip Hotel includes
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-regular fa-clock"></i>

                  <span className="week__card-subtext">
                    Short proccessing time
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-check"></i>
                  <span className="week__card-subtext">
                    Trustworthy Assistance
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained">Make a Reservation</Button>
            </CardActions>
          </Card>
        </div>
        <div className="week__card  visa__card">
          <CardMedia
            component="img"
            height="500"
            image="https://zamontour.uz/assets/images/hongkong.jpg"
            alt="green iguana"
            className="week__pic visa__pic"
          />
          <Card className="week__item  visa__item" sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <div className="week__card-top">
                <div className="week__card-wrapper">
                  <h3 className="week__card-title">Hong Kong</h3>
                </div>

                <div className="week__card-box">
                  <div>
                    <i className="fa-solid fa-users"></i>
                    <span className="week__card-subtext">300 check Ins</span>
                  </div>

                  <div></div>
                </div>
              </div>

              <hr className="week__hr" />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Benifits of 
                </Typography>
                <Typography variant="body2" color="text.secondary">
               <i className="fa-solid fa-thumbtack"></i>
                  <span className="week__card-subtext">
                    5 days Trip Hotel includes
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-regular fa-clock"></i>

                  <span className="week__card-subtext">
                    Short proccessing time
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-check"></i>
                  <span className="week__card-subtext">
                    Trustworthy Assistance
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained">Make a Reservation</Button>
            </CardActions>
          </Card>
        </div>
        <div className="week__card  visa__card">
          <CardMedia
            component="img"
            height="500"
            image="https://zamontour.uz/assets/images/europe.jpeg"
            alt="green iguana"
            className="week__pic visa__pic"
          />
          <Card className="week__item  visa__item" sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <div className="week__card-top">
                <div className="week__card-wrapper">
                  <h3 className="week__card-title">Europe</h3>
                </div>

                <div className="week__card-box">
                  <div>
                    <i className="fa-solid fa-users"></i>
                    <span className="week__card-subtext">300 check Ins</span>
                  </div>

                  <div></div>
                </div>
              </div>

              <hr className="week__hr" />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Benifits of 
                </Typography>
                <Typography variant="body2" color="text.secondary">
               <i className="fa-solid fa-thumbtack"></i>
                  <span className="week__card-subtext">
                    5 days Trip Hotel includes
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-regular fa-clock"></i>

                  <span className="week__card-subtext">
                    Short proccessing time
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-check"></i>
                  <span className="week__card-subtext">
                    Trustworthy Assistance
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained">Make a Reservation</Button>
            </CardActions>
          </Card>
        </div>
        <div className="week__card  visa__card">
          <CardMedia
            component="img"
            height="500"
            image="https://zamontour.uz/assets/images/india.jpg"
            alt="green iguana"
            className="week__pic visa__pic"
          />
          <Card className="week__item  visa__item" sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <div className="week__card-top">
                <div className="week__card-wrapper">
                  <h3 className="week__card-title">India</h3>
                </div>

                <div className="week__card-box">
                  <div>
                    <i className="fa-solid fa-users"></i>
                    <span className="week__card-subtext">300 check Ins</span>
                  </div>

                  <div></div>
                </div>
              </div>

              <hr className="week__hr" />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Benifits of 
                </Typography>
                <Typography variant="body2" color="text.secondary">
               <i className="fa-solid fa-thumbtack"></i>
                  <span className="week__card-subtext">
                    5 days Trip Hotel includes
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-regular fa-clock"></i>

                  <span className="week__card-subtext">
                    Short proccessing time
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-check"></i>
                  <span className="week__card-subtext">
                    Trustworthy Assistance
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained">Make a Reservation</Button>
            </CardActions>
          </Card>
        </div>
        <div className="week__card  visa__card">
          <CardMedia
            component="img"
            height="500"
            image="https://zamontour.uz/assets/images/japan.jpg"
            alt="green iguana"
            className="week__pic visa__pic"
          />
          <Card className="week__item  visa__item" sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <div className="week__card-top">
                <div className="week__card-wrapper">
                  <h3 className="week__card-title">japan</h3>
                </div>

                <div className="week__card-box">
                  <div>
                    <i className="fa-solid fa-users"></i>
                    <span className="week__card-subtext">300 check Ins</span>
                  </div>

                  <div></div>
                </div>
              </div>

              <hr className="week__hr" />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  Benifits of 
                </Typography>
                <Typography variant="body2" color="text.secondary">
               <i className="fa-solid fa-thumbtack"></i>
                  <span className="week__card-subtext">
                    5 days Trip Hotel includes
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-regular fa-clock"></i>

                  <span className="week__card-subtext">
                    Short proccessing time
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i className="fa-solid fa-check"></i>
                  <span className="week__card-subtext">
                    Trustworthy Assistance
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained">Make a Reservation</Button>
            </CardActions>
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default Visa;
