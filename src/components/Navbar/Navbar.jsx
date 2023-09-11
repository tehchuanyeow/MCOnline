import brand from "/brand.png";
import avatar from "/avatar.png";
import { Container } from "../Container";
import { SlClose, SlMenu } from "react-icons/sl";
import { useState } from "react";
import { Button, Dropdown, Space } from "antd";
import { MdNordicWalking, MdNotifications, MdSmsFailed } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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
      lable: "nav1",
      href: "/",
      icon: <MdNordicWalking />,
    },
    {
      lable: "nav2",
      href: "/",
      icon: <MdNordicWalking />,
    },
    {
      lable: "nav3",
      href: "/",
      icon: <MdNordicWalking />,
    },
  ];

  return (
    <div className="dark:bg-slate-950">
      <Container>
        <div className="relative border-b p-4 flex items-center justify-between gap-5">
          <Link to={"/"} className="w-14">
            <img className="w-full" src={brand} alt="brand" />
          </Link>
          <nav
            className={`${
              open ? "md:relative absolute flex bg-dark1" : "hidden"
            } w-full text-white md:flex top-0 md:text-dark1 md:bg-transparent md:py-0 py-10 md:flex-row flex-col gap-5 justify-around items-center`}
          >
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
              <Button className="md:text-dark1 text-white">
                Upload Server
              </Button>
            </Link>
            <NavLink>Contact</NavLink>
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
                <Button>Login</Button>
              </Link>
            )}
          </nav>
          <div
            onClick={() => setOpen(!open)}
            className="z-40 md:hidden text-2xl"
          >
            {open ? (
              <SlClose className="absolute text-primary right-6 top-9 text-3xl z-20" />
            ) : (
              <SlMenu className="text-black text-xl" />
            )}
          </div>
        </div>
        <nav className="border-b w-full p-3 flex justify-between items-center">
          {downNavItems.map((item, index) => (
            <Dropdown key={index} menu={{ items }} className="cursor-pointer">
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
      </Container>
    </div>
  );
};
