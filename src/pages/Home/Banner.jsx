import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  IconButton,
  MobileStepper,
  Button,
  Typography,
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight, ContentCopy } from '@mui/icons-material';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import thumb1 from '../../assets/thumb-1.jpg';
import thumb2 from '../../assets/thumb-2.jpg';
import thumb3 from '../../assets/thumb-3.jpg';

const images = [
  {
    title: 'PlayCY',
    description: 'playcy.net',
    src: thumb1,
    ip_address: 'playcy.net',
  },
  {
    title: 'Bird',
    description: 'example.com',
    src: thumb2,
    ip_address: 'example.com',
  },
  {
    title: 'Bali, Indonesia',
    description: 'sample.net',
    src: thumb3,
    ip_address: 'sample.net',
  },
  {
    title: 'Goč, Serbia',
    description: 'gochost.net',
    src: thumb1,
    ip_address: 'gochost.net',
  },
];

const Banner = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const maxSteps = images.length;

  const copyIpAddress = (ipAddress) => {
    navigator.clipboard.writeText(ipAddress).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024); // Adjust the breakpoint as needed
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div>
        <div>
          <Paper elevation={3} style={{ position: 'relative' }}>
            {isMobileView && ( // Show the Copy IconButton only on iPad/Mobile view
              <IconButton
                size="small"
                onClick={() => copyIpAddress(images[activeStep].ip_address)}
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  zIndex: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: 'blue',
                  },
                }}
              >
                <ContentCopy />
              </IconButton>
            )}
            <AspectRatio ratio="4/1">
              <img
                src={`${images[activeStep].src}`}
                alt={images[activeStep].title}
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.5s',
                }}
              />
            </AspectRatio>
            {!isMobileView ? ( // Desktop view
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    color: 'white',
                    marginBottom: '0.5rem',
                    letterSpacing: 'normal',
                  }}
                >
                  {images[activeStep].title}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '1rem',
                    color: 'white',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.18em',
                  }}
                >
                  IP Address: {images[activeStep].ip_address}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => copyIpAddress(images[activeStep].ip_address)}
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '1rem',
                    color: 'white',
                    borderColor: 'white',
                    transition: 'background-color 0.3s',
                    '&:hover': {
                      backgroundColor: 'blue',
                    },
                  }}
                >
                  {copied ? 'Copied' : 'Click to Copy'}
                </Button>
              </div>
            ) : null} {/* Mobile and iPad view */}
          </Paper>
        </div>
        <MobileStepper variant="dots" steps={maxSteps} position="static" activeStep={activeStep} />
      </div>
    </div>
  );
};

export default Banner;
