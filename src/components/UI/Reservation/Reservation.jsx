import Button from "@mui/material/Button";
import "./reservation.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const Reservation = () => {
  return (
    <div className="reservation">
      <div className="reservation__wrapper">
        <p className="reservation__subtext">Book Prefered Deal Here</p>
        <hr className="explore__hr reservation__hr" />
        <h2 className="reservation__title">Make Your Reservation</h2>
        <Button variant="outlined">Descover more</Button>

        <div className="reservation__cards">
          <Card className="reservation__card" sx={{ maxWidth: 400 }} >
            <CardActionArea>
              <span className="reservation__sircle intro__sircle">
                <i className="fa-solid fa-phone"></i>
              </span>
              <CardContent>
                <Typography
                  fontFamily="Poppins"
                  fontWeight="700"
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="center"
                >
                  Make a Phone Call
                </Typography>
                <Typography
                  fontFamily="Poppins"
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  +998 99 299 99 96
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className="reservation__card" sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <span className="reservation__sircle intro__sircle">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <CardContent>
                <Typography
                  fontFamily="Poppins"
                  fontWeight="700"
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="center"
                >
                  Contact Us via Email
                </Typography>
                <Typography
                  textAlign="center"
                  variant="body2"
                  color="text.secondary"
                >
                  zamonbiznes@mail.ru
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className="reservation__card" sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <span className="reservation__sircle intro__sircle">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <CardContent>
                <Typography
                  fontFamily="Poppins"
                  fontWeight="700"
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign="center"
                >
                  Visit Our Offices
                </Typography>
                <Typography
                  fontFamily="Poppins"
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  15/25, Chilanzar - 9, Tashkent
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
