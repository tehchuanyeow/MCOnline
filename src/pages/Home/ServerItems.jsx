import React, { useState, useEffect } from "react";
import { Grid, Button, Modal, Backdrop, Fade, Paper, Typography } from "@mui/material";
import ServerCard from "./ServerCard";
import ServerModal from "../../components/ServerModal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import thumb1 from '../../assets/thumb-1.jpg';
import thumb2 from '../../assets/thumb-2.jpg';
import thumb3 from '../../assets/thumb-3.jpg';

const ServerItems = ({ filter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActiveItem, setModalActiveItem] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(calculateCardsPerPage());
  const [items, setItems] = useState(null); // Initialize as null

  useEffect(() => {
    // Fetch or generate items data and then set the state
    const numItems = 30; // Number of items to generate
    const thumbImages = [thumb1, thumb2, thumb3]; // List of thumbnail images
    const serverNames = ["Server Name 1", "Server Name 2", "Server Name 3"]; // List of server names
    const titles = ["Server Title 1", "Server Title 2", "Server Title 3"]; // List of titles
    const generatedItems = [];

    for (let i = 1; i <= numItems; i++) {
      const thumbnail = thumbImages[i % thumbImages.length];
      const serverName = serverNames[i % serverNames.length];
      const title = titles[i % titles.length];

      const item = {
        id: i,
        thumbnail: thumbnail,
        title: title,
        serverName: serverName,
        serverImage: thumbnail, // Rotating between thumb1 to thumb3
        views: Math.floor(Math.random() * 500), // Random views for demonstration
        uploadedAt: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 28) + 1}/2023`, // Random date for demonstration
      };

      generatedItems.push(item);
    }

    setItems(generatedItems); // Set the state after data is generated
  }, []); // Empty dependency array to run this effect only once

// Calculate the number of cards per row based on screen width percentage
function calculateCardsPerPage() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 673) {
    return 1; // 25% or less width, display 1 item per row
  } else if (screenWidth <= 936) {
    return 2; // Between 25% and 50% width, display 2 items per row
  } else if (screenWidth <= 1275) {
    return 3; // Between 50% and 75% width, display 3 items per row
  } else {
    return 4; // Greater than 75% width, display 4 items per row (default)
  }
}

  useEffect(() => {
    // Update cardsPerPage when the window is resized
    const handleResize = () => {
      setCardsPerPage(calculateCardsPerPage());
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!items) {
    // Render loading or placeholder content while items are being fetched/generated
    return <div>Loading...</div>;
  }

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / cardsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startItemIndex = (currentPage - 1) * cardsPerPage;
  const endItemIndex = currentPage * cardsPerPage;

  // Calculate the number of cards needed to fill the current page, including extras
  const numCardsToFillPage = endItemIndex - startItemIndex;
  const displayedItems = items.slice(startItemIndex, endItemIndex);

  const showModal = (itemId) => {
    setIsModalOpen(true);
    setModalActiveItem(itemId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const transitionDuration = 500;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const comments = [
    {
      serverImage: thumb3,
      serverName: "Julia HG",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
    },
    {
      serverImage: thumb3,
      serverName: "Julia HG",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
    },
    {
      serverImage: thumb3,
      serverName: "Julia HG",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
    },
    {
      serverImage: thumb3,
      serverName: "Julia HG",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
    },
    {
      serverImage: thumb3,
      serverName: "Julia HG",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
    },
    {
      serverImage: thumb3,
      serverName: "Julia HG",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
    },
    {
      serverImage: thumb3,
      serverName: "Julia HG",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolor. Omnis sapiente atque qui nobis nisi, sed rerum quaerat harum.",
    },
  ];

  const buttonStyle = {
    borderRadius: "50%", // Makes the button circular
    width: "40px", // Adjust the width and height to your preferred size
    height: "40px", // Adjust the width and height to your preferred size
    marginLeft: "10px", // Add spacing between buttons
    minWidth: "auto", // Prevents the button from stretching
    transition: `transform ${transitionDuration}ms`, // Add a transition effect
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "16px", // Add padding to create space around content
        borderRadius: "8px", // Add rounded corners
        background: "white", // Set background color
        display: "flex",
        flexDirection: "column", // Stack children vertically
        alignItems: "center", // Center horizontally
      }}
    >
      {/* "For You" Typography Title */}
      <Typography variant="h5" style={{ alignSelf: "flex-start", fontWeight: "bold" }}>
        For You
      </Typography>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cardsPerPage}, 1fr)`,
          gap: "16px",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          height: "auto", // Set the height to auto
          maxWidth: "100%", // Ensure the grid doesn't overflow
          position: "relative", // Relative positioning for the container
          overflow: "hidden", // Hide overflowing content
        }}
      >
        {displayedItems.map((server, index) => (
          <Grid item key={server.id}>
            <ServerCard showModal={() => showModal(server.id)} serverData={server} />
          </Grid>
        ))}

        {/* Previous Page Button */}
        {currentPage !== 1 && (
          <Button
            variant="contained"
            color="primary"
            onClick={handlePrevPage}
            style={{
              ...buttonStyle,
              position: "absolute", // Absolute positioning for the button
              top: "50%", // Place the button in the vertical center of the container
              left: "0", // Position at the left edge
              zIndex: "2", // Ensure it's above the cards
              transform: "translateY(-50%)", // Adjust vertical alignment
            }}
          >
            <ArrowBackIcon />
          </Button>
        )}

        {/* Next Page Button */}
        {currentPage !== totalPages && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextPage}
            style={{
              ...buttonStyle,
              position: "absolute", // Absolute positioning for the button
              top: "50%", // Place the button in the vertical center of the container
              right: "0", // Position at the right edge
              zIndex: "2", // Ensure it's above the cards
              transform: "translateY(-50%)", // Adjust vertical alignment
            }}
          >
            <ArrowForwardIcon />
          </Button>
        )}
      </div>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <div>
            {/* Your modal content here */}
            <ServerModal
              closeModal={closeModal}
              isModalOpen={isModalOpen}
              comments={comments}
              modalActiveItem={modalActiveItem}
              setModalActiveItem={setModalActiveItem}
            />
          </div>
        </Fade>
      </Modal>
    </Paper>
  );  
};  
export default ServerItems;