import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/material/Chip';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';

const ServerCard = ({ serverData, showModal }) => {
  const { title, thumbnail, serverImage, serverName, views } = serverData;

  // Truncate the description to a certain length
  const description =
    "We are a community of developers prepping for coding interviews, participate, chat with others and get better at interviewing.";
  const maxDescriptionLength = 100;
  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.slice(0, maxDescriptionLength) + '...'
      : description;

  return (
    <Card
      variant="outlined"
      sx={{ width: 300, backgroundColor: 'white' }}
      onClick={showModal}
      className="cursor-pointer duration-300 text-white"
    >
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={thumbnail}
            srcSet={`${thumbnail}?auto=format&fit=crop&w=318&dpr=2 2x`}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-sm">
          {truncatedDescription}
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs">{views} views</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">1 hour ago</Typography>
          <IconButton
            aria-label="Vote for this Server!"
            size="md"
            variant="solid"
            color="danger"
            sx={{
              borderRadius: '50%',
              marginLeft: 'auto', // Move the IconButton to the end
            }}
            onClick={(event) => {
              // Handle IconButton click event
              event.stopPropagation(); // Prevent the card click event from firing
              // Add your IconButton click logic here
            }}
          >
            <Favorite />
          </IconButton>
        </CardContent>
      </CardOverflow>
      {/* Display title as a Chip */}
      <Chip
        label={title}
        variant="outlined"
        sx={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
      />
    </Card>
  );
};

export default ServerCard;