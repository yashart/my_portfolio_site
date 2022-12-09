import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Link,
  Button,
} from '@mui/material';

import '../../styles/ShortContactCard.css';


function ShortContactCard () {

  return (
    <div className="short-contact-padding">
      <Card className="short-contact-card" variant="outlined">
        <CardMedia
          component="img"
          image="static/imgs/my_portfolio_photo.jpg"
          sx={{ width: 250 }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h4">
              Yashukhin Artem
            </Typography>
            <br />
            <Typography>
              Agrobit LLC
              <br />
              Skolkovo Innovation Center, Moscow, Russia
            </Typography>
            <br />
            <Typography variant="subtitle1" component="div">
              Email: <a style={{color:"white"}} href="mailto:yashart@mail.ru" target="_blink">yashart@mail.ru</a>
            </Typography>
            <Link
              href="http://github.com/yashart"
              className="contact-github-link"
              target="_blank"
              rel="noreferrer"
            >
              github.com/yashart
            </Link>
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
            >
              Download CV
            </Button>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}

export default ShortContactCard;
