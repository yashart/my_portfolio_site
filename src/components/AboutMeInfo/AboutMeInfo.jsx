import React from 'react';
import {
  Typography,
  CardMedia,
  Card,
  Grid,
} from '@mui/material';
import ShortContactCard from '../ShortContactCard/ShortContactCard';

import '../../styles/AboutMeInfo.css';

function AboutMeInfo () {

  return (
    <div className="about-me-container">
      <Typography className="about-title" variant="h1">
        Hi, I'm Yashukhin Artem
      </Typography>
      <Typography className="about-subtitle" variant="h4">
        Robotics & Computer Vision developer
      </Typography>
      <Grid container>
        <Grid item md={6}>
          <Typography className="about-text" variant="h6">
            My main skills are the development of wheeled robots and classical & ML computer vision algorithms, especially object recognition and tracking.
          </Typography>
          <Typography className="about-text" variant="h6">
            I am also can writing web and embedded gui interfaces.
          </Typography>
          <Typography className="about-text" variant="h6">
            Main languages: C++, Python, JavaScript.
          </Typography>
          <Typography className="about-text" variant="h6">
            Key frameworks: ROS, OpenCV, React JS, QT.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <ShortContactCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMeInfo;
