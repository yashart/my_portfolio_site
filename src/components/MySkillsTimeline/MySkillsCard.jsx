import React from 'react';

import {
  Chip,
  Dialog,
  Typography,
  Link,
  DialogTitle,
  DialogContent,
} from '@mui/material';

function MySkillsCard(props) {
  const [open_photo, setOpenPhoto] = React.useState(false);

  const handleClickOpenPhoto = () => {
    setOpenPhoto(true);
  };
  const handleClosePhoto = () => {
    setOpenPhoto(false);
  };

  let labels_view = props.labels.map((label, index) => {
    return (
      <span key={index}>
        <Chip label={label} color="rose" />
        <span> </span>
      </span>
    );
  });

  let photo_link = "";
  if (props.photo !== "") {
    photo_link = <Link
        style={{float: "right"}}
        variant="h5"
        component="button"
        onClick={handleClickOpenPhoto}
        underline="hover"
      >
        Photo
      </Link>
  }
  let external_link = "";
  if (props.link !== "") {
    external_link = <Link
      style={{float: "right", paddingRight: "15px"}}
      target="_blank"
      rel="noreferrer"
      variant="h5"
      href={props.link}
      underline="hover"
    >
      Link
    </Link>
  }

  return (
    <div>
      {labels_view}
      <Typography variant="h4">{props.title}</Typography>
      <Typography variant="h5">{props.subtitle}</Typography>
      <Typography style={{whiteSpace: "pre-line"}}>
        {props.text}
      </Typography>
      {photo_link}
      {external_link}

      <Dialog
        onClose={handleClosePhoto}
        open={open_photo}
        maxWidth="xl"
      >
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <img src={props.photo} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MySkillsCard;
