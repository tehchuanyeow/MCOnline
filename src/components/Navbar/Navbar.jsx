import brand from "/brand.png";
import avatar from "/avatar.png";
import { SlClose, SlMenu } from "react-icons/sl";
import { useState } from "react";
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

export const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [open, setOpen] = useState(false);

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
            SiteName
          </Link>
          <nav
            className={`${
              open ? "fixed h-screen flex bg-dark1" : "hidden"
            } w-full text-white md:flex top-0 md:bg-transparent md:py-0 py-10 md:flex-row flex-col gap-5 sm:justify-around sm:items-center sm:px-0 px-10`}
          >
            {open && (
              <SlClose
                onClick={() => setOpen(false)}
                className="absolute text-primary right-5 top-5 text-3xl z-50 sm:hidden"
              />
            )}
            <Dropdown menu={{ items }} className="cursor-pointer">
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  HG Coaching
                  <BiChevronDown />
                </Space>
              </a>
            </Dropdown>
            <NavLink>Dr. Ks Guide</NavLink>
            <Link to="/upload-server">
              <Button
                type="btn"
                className="bg-primary text-white hover:shadow-md"
              >
                Upload Server
              </Button>
            </Link>
            <NavLink>Contact</NavLink>
            <nav className="sm:hidden w-full sm:px-0 flex flex-col gap-5 sm:items-center">
              {downNavItems.map((item, index) => (
                <Dropdown
                  key={index}
                  menu={{ items }}
                  className="cursor-pointer"
                >
                  <a
                    className="flex items-center gap-2"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="text-primary text-3xl">{item.icon}</i>
                    <Space>{item.lable}</Space>
                  </a>
                </Dropdown>
              ))}
            </nav>
            <div className="sm:block hidden">
              <Dropdown
                className="cursor-pointer"
                menu={{ items }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <MdNotifications className="text-3xl" />
                </a>
              </Dropdown>
            </div>

            {currentUser ? (
              <Dropdown
                className="cursor-pointer"
                menu={{ items: profileItems }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <img
                    className="w-10 h-10 rounded-full border border-black"
                    src={currentUser?.photoURL ? currentUser.photoURL : avatar}
                    alt=""
                  />
                </a>
              </Dropdown>
            ) : (
              <Link to={"/login"}>
                <Button className="text-primary border-primary">Login</Button>
              </Link>
            )}
          </nav>
          {!open && (
            <div className="flex items-center sm:hidden">
              <Dropdown
                className="cursor-pointer"
                menu={{ items }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <MdNotifications className="text-3xl" />
                </a>
              </Dropdown>

              <img
                onClick={() => setOpen(true)}
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

      {/* Bottom Navbar */}
      <div className="md:hidden fixed flex justify-around items-center bottom-0 bg-dark1 p-2 w-full">
        <Link to={"/"} onClick={handleHomeLinkClick}>
          <MdHome className="p-1 text-4xl rounded-lg" />
        </Link>
        <Link to={"/voting"}>
          <MdHowToVote className="p-1 text-3xl rounded-lg" />
        </Link>
        <Link to={"/upload-server"}>
          <MdAdd className="border p-1 text-3xl rounded-lg" />
        </Link>
        <Link to={"/"}>
          <MdNotifications className="p-1 text-3xl" />
        </Link>
        <Link to={"user-profile"}>
          <MdPerson className="border p-1 text-3xl rounded-full" />
        </Link>
      </div>
    </div>
  );
};
