"use client";
import React from "react";
import { logosmall } from "../../public/images/index";
import Image from "../../node_modules/next/image";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidHelpCircle } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { BsPersonCheckFill } from "react-icons/bs";
import { FcAdvertising } from "react-icons/fc";
import { usePathname, useRouter } from "../../node_modules/next/navigation";

const Sidebar = () => {
  const menus = {
    itAdmin: [
      {
        id: 1,
        name: "Dashboard",
        href: "/it_admin/dashboard",
        icon: <BiSolidDashboard size={33} />
      },
      {
        id: 2,
        name: "User and Permission",
        href: "/it_admin/users",
        icon: <BsPeopleFill size={33} />
      },
      {
        id: 3,
        name: "Help and Support",
        href: "/help",
        icon: <BiSolidHelpCircle size={33} />
      }
    ],
    manager: [
      {
        id: 1,
        name: "Dashboard",
        href: "/manager/dashboard",
        icon: <BiSolidDashboard size={33} />
      },
      {
        id: 2,
        name: "Profile",
        href: "/manager/profile",
        icon: <MdPerson size={33} />
      },
      {
        id: 3,
        name: "News and Policy",
        href: "/manager/news",
        icon: <IoNewspaper size={33} />
      },
      {
        id: 4,
        name: "Contact Us Info",
        href: "/manager/contact_us",
        icon: <BiSolidContact size={33} />
      },
      {
        id: 5,
        name: "Help and Support",
        href: "/help",
        icon: <BiSolidHelpCircle size={33} />
      }
    ],
    hr: [
      {
        id: 1,
        name: "Dashboard",
        href: "/hr/dashboard",
        icon: <BiSolidDashboard size={33} />
      },
      {
        id: 2,
        name: "Profile",
        href: "/profile",
        icon: <MdPerson size={33} />
      },
      {
        id: 3,
        name: "Recruitment",
        href: "/hr/job_vacancy",
        icon: <MdWork size={33} />
      },
      {
        id: 4,
        name: "Event",
        href: "/hr/event",
        icon: <MdEventAvailable size={33} />
      },
      {
        id: 5,
        name: "Employee",
        href: "/hr/employees",
        icon: <MdPeople size={33} />
      },
      {
        id: 6,
        name: "Leave Application",
        href: "/hr/leave",
        icon: <IoLogOut size={33} />
      },
      {
        id: 7,
        name: "Attendance",
        href: "/hr/attendance",
        icon: <BsPersonCheckFill size={33} />
      },
      {
        id: 8,
        name: "Promotion",
        href: "/hr/promotion",
        icon: <FcAdvertising size={33} />
      },
      {
        id: 9,
        name: "Help and Support",
        href: "/help",
        icon: <BiSolidHelpCircle size={33} />
      }
    ],
    employee: [
      {
        id: 1,
        name: "Dashboard",
        href: "/employee/dashboard",
        icon: <BiSolidDashboard size={25} />
      },
      {
        id: 2,
        name: "Profile",
        href: "/profile",
        icon: <MdPerson size={33} />
      },
      {
        id: 3,
        name: "Leave Application",
        href: "/employee/leave",
        icon: <IoLogOut size={33} />
      },
      {
        id: 4,
        name: "Help and Support",
        href: "/help",
        icon: <BiSolidHelpCircle size={33} />
      }
    ]
  };

  const [userRole, setUserRole] = useState("");
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    let user = true;
    if (user) {
      setUserRole("itAdmin");
    }
  }, [userRole]);

  const userMenus = menus[userRole] || []; // Get the corresponding menu array for the user role

  const [side, setSide] = useState(false);

  const handleSide = () => {
    setSide(!side);
  };
  const handlenavigate = getMenuItem => {
    router.push(getMenuItem);
  };

  return (
    <div className="fixed left-0 top-0 z-20 h-[100vh] md:sticky">
      <div className="fixed inset-y-0 z-20  h-[73px] bg-white md:hidden">
        <div className="m-6 flex flex-row items-center justify-between">
          <Link
            href={"/"}
            className="flex h-[45px] items-center gap-x-[10px] text-heading_2 font-semibold text-[#17A1FA] md:w-[191px] md:text-heading_1">
            <Image
              className="h-[35px] w-[35px] rounded-[50%]  object-cover"
              alt="logo"
              quality="100%"
              priority="true"
              src={logosmall}
            />
          </Link>

          <button
            onClick={handleSide}
            className="rounded-lg bg-white p-2 text-black">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
      <div
        className={`h-screen w-[280px]
           ${side ? "fixed left-0 top-0 z-20 " : "sticky left-0 hidden md:flex"}`}>
        <div className="flex h-full w-full flex-1 flex-col bg-[#cbd4de]">
          <div className="py-5.5 lg:py-6.5 my-15.5 inset-shadow flex h-[70px] w-full flex-shrink-0 items-center justify-between gap-1 bg-white p-4 px-6 shadow-xl ">
            <Link
              href={"/"}
              className="flex h-[45px] w-[150px] items-center gap-x-[10px] text-heading_2 font-semibold text-[#17A1FA] md:w-[191px] md:text-heading_1">
              <Image
                className="h-[20px] w-[20px] rounded-[50%] object-cover md:h-[35px]  md:w-[35px]"
                alt="logo"
                src={logosmall}
              />
              <span>Mekedoina</span>
            </Link>
            {side && (
              <button
                type="button"
                onClick={handleSide}
                className="text-gray-500 h-10 w-10 items-center justify-center rounded-lg p-2 text-sm md:hidden">
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  id="close">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7.05 7.05a1 1 0 0 0 0 1.414L10.586 12 7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 0 0 1.414-1.414L13.414 12l3.536-3.536a1 1 0 0 0-1.414-1.414L12 10.586 8.464 7.05a1 1 0 0 0-1.414 0Z"></path>
                </svg>
              </button>
            )}
          </div>
          <nav className="flex flex-1 flex-col overflow-y-scroll p-4  pt-8">
            <div>
              <ul className="mb-6 flex flex-col gap-[60px]">
                {userMenus.map(menuItem => (
                  <li key={menuItem.id}>
                    <label
                      onClick={() => handlenavigate(menuItem.href)}
                      className={`{ flex w-[250px] cursor-pointer items-center gap-x-[15px] rounded-lg px-4 py-2 text-small font-regular text-black duration-300 ease-in-out hover:text-white
                   md:text-base ${pathName.includes(menuItem.href) && " text-tx_primary"}`}>
                      {menuItem.icon}
                      {menuItem.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
