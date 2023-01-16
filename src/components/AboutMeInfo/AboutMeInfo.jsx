import React from 'react';
import {
  Typography,
  CardMedia,
  Card,
  Grid,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import ShortContactCard from '../ShortContactCard/ShortContactCard';

import '../../styles/AboutMeInfo.css';

function AboutMeInfo () {

  return (
    <div className="about-me-container">
      <Typography className="about-title" variant="h1">
        Hi, I'm Yashukhin Artem
      </Typography>
      <Typography className="about-subtitle" variant="h4">
        Robotics and Computer Vision engineer
      </Typography>
      <Grid container>
        <Grid item md={7}>
          <Typography className="about-text-title" variant="h5">
            My main skills
          </Typography>
          <Typography className="about-text" variant="h6">
            <CircleIcon fontSize="small" /> Wheeled robots and manipulators (Robot Operating System (ROS))
          </Typography>
          <Typography className="about-text" variant="h6">
            <CircleIcon fontSize="small" /> Classical and ML computer vision (especially object recognition and tracking)
          </Typography>
          <Typography className="about-text-title" variant="h5">
            My secondary skills
          </Typography>
          <Typography className="about-text" variant="h6">
            <CircleIcon fontSize="small" /> Web (React js + Flask) and Embedded (QT) gui interfaces
          </Typography>
          <Typography className="about-text-title" variant="h5">
            Programming languages
          </Typography>
          <Typography className="about-text" variant="h6">
            <CircleIcon fontSize="small" /> C++, Python, JavaScript
          </Typography>
          <Typography className="about-text-title" variant="h5">
            Key frameworks
          </Typography>
          <Typography className="about-text" variant="h6">
            <CircleIcon fontSize="small" /> ROS, OpenCV, React JS, QT
          </Typography>
        </Grid>
        <Grid item md={5}>
          <ShortContactCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMeInfo;
