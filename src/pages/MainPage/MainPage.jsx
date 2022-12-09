import React from 'react';
import { Typography, Button } from '@mui/material';
import ShortContactCard from '../../components/ShortContactCard/ShortContactCard';
import MySkillsTimeline from '../../components/MySkillsTimeline/MySkillsTimeline';
import AboutMeInfo from '../../components/AboutMeInfo/AboutMeInfo';
import HireInfo from '../../components/HireInfo/HireInfo';
import ContactMe from '../../components/ContactMe/ContactMe';

function MainPage() {
  return(
    <div className="MainPage">
      <AboutMeInfo />
      <HireInfo />
      <MySkillsTimeline />
      <ContactMe />
    </div>
  );
}

export default MainPage;
