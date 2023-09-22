import brand from "/MCOnline Logo.png";
import avatar from "/avatar.png";
import { useState, useEffect } from "react";
import { Button, Dropdown, Space } from "antd";
import {
  MdAdd,
  MdHome,
  MdHowToVote,
  MdNordicWalking,
  MdNotifications,
  MdPerson,
  MdSmsFailed,
} from "react-icons/md";
import { BiChevronDown, BiSolidGroup } from "react-icons/bi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { BsFillPersonFill, BsFillPersonVcardFill } from "react-icons/bs";
import { Avatar, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';

export const Navbar = () => {
  const notificationCount = 2;
  const { currentUser, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // State to track the screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <MdSmsFailed />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  const profileItems = [
    {
      key: "1",
      label: <Link to="/user-profile">Profile</Link>,
    },
    {
      key: "2",
      label: (
        <Button
          onClick={logout}
          type="danger"
          className="bg-red-400 text-white hover:bg-red-600"
        >
          Logout
        </Button>
      ),
    },
  ];

  const downNavItems = [
    {
      lable: "Group Coaching",
      href: "/",
      icon: <BiSolidGroup />,
    },
    {
      lable: "Personal Coaching",
      href: "/",
      icon: <BsFillPersonFill />,
    },
    {
      lable: "Career Coaching",
      href: "/",
      icon: <BsFillPersonVcardFill />,
    },
  ];

  const location = useLocation();

  const handleHomeLinkClick = () => {
    // Check if the user is already on the home route
    if (location.pathname === "/") {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="sticky top-0 bg-dark1 text-white z-50">
      <div className="border-b border-b-dark2">
        <div className="container mx-auto flex items-center justify-between gap-5">
          <Link to={"/"} className="text-lg font-bold m-5">
            <Avatar src={brand} alt="MCOnline Logo" className="w-20 h-20" />
          </Link>
          <nav className={`${ open ? "flex" : "hidden" } sm:flex sm:items-center sm:gap-5`}>
          {open && (
            <Tooltip title="Close Menu" placement="right" onClick={handleMenuOpen}>
              <button className="text-primary hover:text-white focus:outline-none">
              <Badge color="secondary" badgeContent={2}>
                <NotificationsIcon />
                </Badge>
              </button>
            </Tooltip>
          )}
            <Dropdown menu={{ items }} className="cursor-pointer">
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Community
                  <BiChevronDown />
                </Space>
              </a>
            </Dropdown>
            <NavLink>Sponsors</NavLink>
            <Link to="/upload-server">
              <Button
                type="btn"
                onClick={() => setOpen(false)}
                className="bg-primary text-white hover:shadow-md"
              >
                Upload Server
              </Button>
            </Link>

            <Tooltip title="Notifications" placement="top" onClick={handleMenuOpen}>
              <div className="cursor-pointer">
              <Badge color="secondary" badgeContent={2}>
                <NotificationsIcon className="text-3xl" />
                </Badge>
              </div>
            </Tooltip>

            <Avatar
                onClick={() => setIsDrawerOpen(true)}
                className="m-5 w-8 h-8 rounded-full border border-black"
                src={currentUser?.photoURL ? currentUser.photoURL : avatar}
                alt=""
              />
          </nav>
          {!open && (
            <div className="flex items-center sm:hidden">
              <Tooltip title="Notifications" placement="left" onClick={handleMenuOpen}>
              <Badge color="primary" badgeContent={2}>
                <NotificationsIcon className="text-3xl cursor-pointer" />
                </Badge>
              </Tooltip>

              <img
                onClick={() => setIsDrawerOpen(true)}
                className="m-5 w-8 h-8 rounded-full border border-black"
                src={currentUser?.photoURL ? currentUser.photoURL : avatar}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <div className="border-b border-b-dark2">
        <nav className="container mx-auto hidden w-full p-3 sm:flex justify-between items-center sm:text-md text-xs">
          {downNavItems.map((item, index) => (
            <Dropdown key={index} menu={{ items }} className="cursor-pointer">
              <a
                className="flex items-center gap-2"
                onClick={(e) => e.preventDefault()}
              >
                <i className="text-3xl">{item.icon}</i>
                <Space>{item.lable}</Space>
              </a>
            </Dropdown>
          ))}
        </nav>
      </div>

            {/* User Profile Drawer */}
            <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        {/* Add your user profile content here */}
        <div style={{ width: '250px', padding: '20px' }}>
          {/* User profile content */}
          <h2>User Profile</h2>
          {/* Add your user profile information here */}
        </div>
      </Drawer>

            {/* User Profile Menu */}
            <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Link to="/user-profile">Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <button
            onClick={logout}
            type="button"
          >
            Logout
          </button>
        </MenuItem>
      </Menu>

      {/* Bottom Navbar */}
      {screenWidth <= 768 && (
        <BottomNavigation
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className="md:hidden fixed flex justify-around items-center bottom-0 bg-dark1 p-2 w-full"
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
            component={Link}
            to="/"
            onClick={handleHomeLinkClick}
          />
          <BottomNavigationAction
            label="Community"
            value="community"
            icon={<HowToVoteIcon />}
            component={Link}
            to="/community"
          />
          <BottomNavigationAction
            label="Upload"
            value="upload"
            icon={<AddIcon />}
            component={Link}
            to="/upload-server"
          />
          <BottomNavigationAction
            label="Sponsors"
            value="sponsors"
            icon={<PersonIcon />}
            component={Link}
            to="/sponsors"
          />
        </BottomNavigation>
      )}
    </div>
  );
};
