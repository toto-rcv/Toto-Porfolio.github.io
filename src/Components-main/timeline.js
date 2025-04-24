import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography } from '@mui/material';
import "./Timeline.css"; // Importa el archivo CSS para estilos

const TimelineComponent = () => {
  const textStyle = { fontFamily: '"Onest Variable", system-ui, sans-serif' };

  return (
    <Timeline>
      <TimelineItem sx={{ "&::before": { display: "none" } }}>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: 'rgb(249 203 19)' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className='projects'>
            <div>
              <Typography
                variant="h3"
                fontSize={"1.25rem"}
                mb={1}
                color='rgb(249 203 19)'
                noWrap
                style={textStyle}
                fontWeight={700}
              >
                Creador de S.A.D.A
              </Typography>
              <Typography
                variant="h4"
                fontSize={"1.25rem"}
                mb={1}
                style={textStyle}
                fontWeight={600}
              >
                Fuerza Aérea
              </Typography>
              <Typography mb={1} style={textStyle}>2024-2025</Typography>
            </div>
            <div className='text-conteiner'>
              <Typography mb={1} style={textStyle} display={{ sm: "flex" }} flexDirection={{ xs: "column" }}>
                Cree el programa S.A.D.A. para
                optimizar la detección y gestión de avistamientos de aeronaves
                no autorizadas en el espacio aéreo argentino.
                <Typography
                  component="span"
                  mb={1}
                  mt={1}
                  style={textStyle}

                >
                  <a
                    href="https://www.linkedin.com/in/tomas-cejas/overlay/1745246785700/single-media-viewer/?profileId=ACoAAD1vZ5wBbeqTIIvyDT-XZlwaroYWscIGySM"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'rgb(254 240 138)', textDecoration: 'none', fontFamily: '"Onest Variable", system-ui, sans-serif' }}
                  >
                    Saber Más.
                  </a>
                </Typography>
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ "&::before": { display: "none" } }}>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: 'rgb(249 203 19)' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className='projects'>
            <div>
              <Typography
                variant="h3"
                fontSize={"1.25rem"}
                mb={1}
                color='rgb(249 203 19)'
                noWrap
                style={textStyle}
                fontWeight={700}
              >
                Desarrollador en Print3D
              </Typography>
              <Typography
                variant="h4"
                fontSize={"1.25rem"}
                mb={1}
                style={textStyle}
                fontWeight={600}
              >
                Digital House
              </Typography>
              <Typography mb={1} style={textStyle}>2024-2025</Typography>
            </div>
            <div className='text-conteiner'>
              <Typography mb={1} style={textStyle} display={{ sm: "flex" }} flexDirection={{ xs: "column" }}>
                En Digital House trabaje con un equipo de desarrolladores en la creación de una aplicación web para la gestión de impresoras 3D.
                <Typography
                  component="span"
                  mb={1}
                  mt={1}
                  style={textStyle}
                >
                  <a
                    href="https://www.linkedin.com/in/tomas-cejas/overlay/1745246785700/single-media-viewer/?profileId=ACoAAD1vZ5wBbeqTIIvyDT-XZlwaroYWscIGySM"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'rgb(254 240 138)', textDecoration: 'none', fontFamily: '"Onest Variable", system-ui, sans-serif' }}
                  >
                    Saber Más.
                  </a>
                </Typography>
              </Typography>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineComponent;