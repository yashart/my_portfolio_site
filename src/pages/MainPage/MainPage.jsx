import React from 'react';
import { Typography, Button } from '@mui/material';
import ShortContactCard from '../../components/ShortContactCard/ShortContactCard';
import MySkillsTimeline from '../../components/MySkillsTimeline/MySkillsTimeline';
import AboutMeInfo from '../../components/AboutMeInfo/AboutMeInfo';

function MainPage() {
  return(
    <div className="MainPage">
      <AboutMeInfo />
      <MySkillsTimeline />
    </div>
  );
}

export default MainPage;
