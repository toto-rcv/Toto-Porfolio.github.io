import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography } from '@mui/material';

const TimelineComponent = () => {
  return (
    <Timeline>
      <TimelineItem sx={{ "&::before": { display: "none" } }}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">2023</Typography>
          <Typography>Comencé mi carrera como desarrollador.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ "&::before": { display: "none" } }}>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">2024</Typography>
          <Typography>Primer trabajo profesional como desarrollador frontend.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineComponent;