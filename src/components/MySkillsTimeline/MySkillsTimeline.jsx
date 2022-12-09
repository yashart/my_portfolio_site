import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  Typography,
  Button,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CreateIcon from '@mui/icons-material/Create';
import SchoolIcon from '@mui/icons-material/School';
import ExtensionIcon from '@mui/icons-material/Extension';

import MySkillsCard from './MySkillsCard.jsx';

import '../../styles/MySkillsTimeline.css';
import { MY_SKILLS_DATA } from '../../constants/MySkillsData.jsx';


function MySkillsTimeline() {
  const [skills_data, setSkillsData] = React.useState(MY_SKILLS_DATA);
  const [skill_data_state, setSkillsDataState] = React.useState(0);
  const [skill_label, setSkillLabel] = React.useState("All");

  let skills_view = skills_data.map(skill =>
    {
      if ((skill_label === "All") || (skill.labels.includes(skill_label))) {
        if ((skill.type === "work") && ((skill_data_state === 0) || (skill_data_state === 1))) {
          return (
            <VerticalTimelineElement
              className="timeline-content--work"
              iconClassName="timeline-icon--work"
              dateClassName="timeline-date--work"
              date={skill.date}
              icon={<WorkIcon />}
              key={skill.id}
            >
              <MySkillsCard
                title={skill.title}
                subtitle={skill.subtitle}
                text={skill.text}
                labels={skill.labels}
                photo={skill.photo}
                link={skill.link}
              />
            </VerticalTimelineElement>
          );
        }
        if ((skill.type === "volonteur") && ((skill_data_state === 0) || (skill_data_state === 2))) {
          return (
            <VerticalTimelineElement
              className="timeline-content--volunteer"
              iconClassName="timeline-icon--volunteer"
              dateClassName="timeline-date--volunteer"
              date={skill.date}
              icon={<CreateIcon />}
              key={skill.id}
            >
              <MySkillsCard
                title={skill.title}
                subtitle={skill.subtitle}
                text={skill.text}
                labels={skill.labels}
                photo={skill.photo}
                link={skill.link}
              />
            </VerticalTimelineElement>
          )
        }
        if ((skill.type === "education") && ((skill_data_state === 0) || (skill_data_state === 3))) {
          return (
            <VerticalTimelineElement
              className="timeline-content--education"
              iconClassName="timeline-icon--education"
              dateClassName="timeline-date--education"
              date={skill.date}
              icon={<SchoolIcon />}
              key={skill.id}
            >
              <MySkillsCard
                title={skill.title}
                subtitle={skill.subtitle}
                text={skill.text}
                labels={skill.labels}
                photo={skill.photo}
                link={skill.link}
              />
            </VerticalTimelineElement>
          );
        }
        if ((skill.type === "pet") && ((skill_data_state === 0) || (skill_data_state === 4))) {
          return (
            <VerticalTimelineElement
              className="timeline-content--pet"
              iconClassName="timeline-icon--pet"
              dateClassName="timeline-date--pet"
              date={skill.date}
              icon={<ExtensionIcon />}
              key={skill.id}
            >
              <MySkillsCard
                title={skill.title}
                subtitle={skill.subtitle}
                text={skill.text}
                labels={skill.labels}
                photo={skill.photo}
                link={skill.link}
              />
            </VerticalTimelineElement>
          );
        }
      }
    }
  );

  return (
    <div className="timeline-wrap-div">
      <Typography className="timeline-header-text" variant="h2">
        My Skills Timeline
      </Typography>
      <div align="center" style={{marginBottom: "30px"}}>
        <Typography className="timeline-icons-tooltip">
          My areas of ​​interest
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setSkillsDataState(0);
            setSkillLabel("All");
          }}
        >
          All
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setSkillsDataState(1);
            setSkillLabel("All");
          }}
        >
          Work
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            setSkillsDataState(2);
            setSkillLabel("All");
          }}
        >
          Volonteur
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={() => {
            setSkillsDataState(3);
            setSkillLabel("All");
          }}
        >
          Education
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setSkillsDataState(4);
            setSkillLabel("All");
          }}
        >
          Pet Projects
        </Button>
        <Typography className="timeline-icons-tooltip">
          ..and my competencies (all buttons clickable)
        </Typography>
        <Button
          variant="contained"
          color="rose"
          onClick={() => {
            setSkillLabel("ROS");
          }}
        >
          Robotics (ROS)
        </Button>
        <span> </span>
        <Button
          variant="contained"
          color="rose"
          onClick={() => {
            setSkillLabel("Open CV");
          }}
        >
          Open CV
        </Button>
        <span> </span>
        <Button
          variant="contained"
          color="rose"
          onClick={() => {
            setSkillLabel("Computer Vision");
          }}
        >
          Computer Vision
        </Button>
        <span> </span>
        <Button
          variant="contained"
          color="rose"
          onClick={() => {
            setSkillLabel("QT");
          }}
        >
          QT
        </Button>
        <span> </span>
        <Button
          variant="contained"
          color="rose"
          onClick={() => {
            setSkillLabel("Science");
          }}
        >
          Science
        </Button>
        <span> </span>
        <Button
          variant="contained"
          color="rose"
          onClick={() => {
            setSkillLabel("Social");
          }}
        >
          Soft Skills
        </Button>
        <span> </span>
        <Button
          variant="contained"
          color="rose"
          onClick={() => {
            setSkillLabel("Web");
          }}
        >
          Web
        </Button>
        <span> </span>
        <Button
          variant="contained"
          color="rose"
          onClick={() => {
            setSkillLabel("Other");
          }}
        >
          Other
        </Button>
      </div>

      <VerticalTimeline lineColor="red">
        {skills_view}
      </VerticalTimeline>
    </div>
  );
};

export default MySkillsTimeline;
