import React from 'react';
import {
  Typography,
} from '@mui/material';

import '../../styles/HireInfo.css';


function HireInfo() {

  return(
    <div className="hire-info-div">
      <Typography variant="h2">
        My Status
      </Typography>
      <Typography variant="h4">
        <br />
        Looking for a job as a Robotics developer or Computer vision engineer.
      </Typography>
      <Typography variant="h5">
        <br />
        I have a more then 5 years production experience (mostly in startups), you can find info about my job and pet projects below.
        <br />
      </Typography>
    </div>
  );
}

export default HireInfo;
