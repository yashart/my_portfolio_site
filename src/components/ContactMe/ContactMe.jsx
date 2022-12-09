import React from 'react';

import {
  Typography,
  Link,
} from '@mui/material'

import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';

import '../../styles/ContactMe.css';


function ContactMe() {
  return(
    <div className="contact-me-div">
      <Typography variant="h2">
        Contact Me
      </Typography>

      <Typography variant="h4">
        <MailIcon fontSize="large" />Email:  <Link href="mailto:yashart@mail.ru" target="_blink">yashart@mail.ru</Link>
      </Typography>
      <Typography variant="h4">
        <TelegramIcon fontSize="large"/>Telegram:  <Link href="https://t.me/yashart33" target="_blink">@yashart33</Link>
      </Typography>
    </div>
  );
}

export default ContactMe;
