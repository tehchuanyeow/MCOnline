import React, { useState, useEffect } from 'react';
import { Container } from '../../components/Container';
import {
  Paper,
  Typography,
  IconButton,
  Box,
  MobileStepper,
  Button,
  Chip,
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight, ContentCopy } from '@mui/icons-material';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import thumb1 from '../../assets/thumb-1.jpg';
import thumb2 from '../../assets/thumb-2.jpg';
import thumb3 from '../../assets/thumb-3.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'PlayCY',
    ip_address: 'playcy.net',
    imgPath: thumb1,
  },
  {
    label: 'Bird',
    ip_address: 'example.com',
    imgPath: thumb2,
  },
  {
    label: 'Bali, Indonesia',
    ip_address: 'sample.net',
    imgPath: thumb3,
  },
  {
    label: 'Goč, Serbia',
    ip_address: 'gochost.net',
    imgPath: thumb1,
  },
];

const Banner = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showChip, setShowChip] = useState(false);
  const maxSteps = images.length;

  useEffect(() => {
    // Check if the screen width is less than or equal to 719px (mobile view)
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 719);
    };

    // Initialize the view state and add a resize listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Remove the resize listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleDotClick = (index) => {
    setActiveStep(index);
  };

  const copyIpAddress = (ipAddress) => {
    navigator.clipboard.writeText(ipAddress).then(() => {
      setCopied(true);
      setShowChip(true);

      setTimeout(() => {
        setCopied(false);
        setShowChip(false);
      }, 2000); // Reset copied state and hide the Chip after 2 seconds
    });
  };

  const renderNavigationDots = () => {
    return (
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <IconButton size="small" onClick={handleNext} disabled={maxSteps === 0}>
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton size="small" onClick={handleBack} disabled={maxSteps === 0}>
            <KeyboardArrowLeft />
          </IconButton>
        }
      >
        {images.map((step, index) => (
          <IconButton
            key={index}
            onClick={() => handleDotClick(index)}
            color={index === activeStep ? 'primary' : 'default'}
          >
            <span className="dot-button" />
          </IconButton>
        ))}
      </MobileStepper>
    );
  };

  return (
    <div className="bg-dark1 p-5">
      <Container>
        <div className="relative">
          <AutoPlaySwipeableViews
            axis="x"
            index={activeStep}
            onChangeIndex={setActiveStep}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                <img
                  src={step.imgPath}
                  alt={step.label}
                  className="w-full md:h-96 h-40 object-cover cursor-pointer rounded-2xl"
                />
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <div
            className={`absolute ${
              isMobileView ? 'top-2 right-2' : 'left-0 bottom-0 right-0'
            } p-4`}
            style={{
              background: isMobileView
                ? 'transparent'
                : 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
            }}
          >
            {isMobileView ? (
              <div
                style={{
                  color: 'white',
                  fontSize: '0.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Chip // Wrap the Chip and IconButton in a div
                    label={`${images[activeStep].label} - IP: ${images[activeStep].ip_address}`}
                    color="primary"
                    style={{
                      marginBottom: '0.2rem',
                      transition: 'opacity 0.5s',
                      opacity: copied ? 0 : 1,
                    }}
                  />
                  <IconButton
                    color="primary"
                    size="small"
                    onClick={() => {
                      copyIpAddress(images[activeStep].ip_address);
                    }}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      transition: 'opacity 0.5s',
                      opacity: copied ? 0 : 1,
                    }}
                  >
                    <ContentCopy />
                  </IconButton>
                </div>
                {showChip && (
                  <Chip
                    label="COPIED"
                    color="primary"
                    style={{
                      fontSize: '0.8rem',
                      marginBottom: '0.2rem',
                      transition: 'opacity 0.5s',
                      opacity: copied ? 1 : 0,
                    }}
                  />
                )}
              </div>
            ) : (
              <div
                style={{
                  color: 'white',
                  fontSize: '0.8rem',
                  padding: '8px',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Typography variant="h5">{images[activeStep].label}</Typography>
                <Typography variant="body2" style={{ marginBottom: '0.5rem' }}>
                  IP: {images[activeStep].ip_address}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => copyIpAddress(images[activeStep].ip_address)}
                  style={{
                    background: copied ? 'transparent' : 'yellow',
                    boxShadow: copied ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {copied ? 'COPIED' : 'Click to Copy'}
                </Button>
              </div>
            )}
          </div>
        </div>
        {renderNavigationDots()}
      </Container>
    </div>
  );
};

export default Banner;
