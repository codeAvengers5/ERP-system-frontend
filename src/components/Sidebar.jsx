import React from "react";

const Sidebar = ({ currentPage }) => {
  const getPageLinks = () => {
    const links = {
      page1: [
        {
          id: 1,
          name: "Dashboard",
          href: "/",
          icon: "/icons/dashboard.svg"
        },
        {
          id: 2,
          name: "User and Permission",
          href: "/user-and-permission",
          icon: "/icons/user-and-permission.svg"
        },
        {
          id: 3,
          name: "Help and Support",
          href: "/help-and-support",
          icon: "/icons/help.svg"
        }
      ],
      page2: [
        {
          id: 1,
          name: "Dashboard",
          href: "/",
          icon: "/icons/dashboard.svg"
        },
        {
          id: 2,
          name: "Profile",
          href: "/profile",
          icon: "/icons/profile.svg"
        },
        {
          id: 3,
          name: "News and Policy",
          href: "/news-and-policy",
          icon: "/icons/news.svg"
        },
        {
          id: 4,
          name: "Inventory (Resources)",
          href: "/inventory",
          icon: "/icons/inventory.svg"
        },
        {
          id: 5,
          name: "Contact Us Info",
          href: "/contact-us-info",
          icon: "/icons/contact.svg"
        },
        {
          id: 6,
          name: "Help and Support",
          href: "/help-and-support",
          icon: "/icons/help.svg"
        }
      ],
      page3: [
        {
          id: 1,
          name: "Dashboard",
          href: "/",
          icon: "/icons/dashboard.svg"
        },
        {
          id: 2,
          name: "Profile",
          href: "/profile",
          icon: "/icons/profile.svg"
        },
        {
          id: 3,
          name: "Recruitment",
          href: "/recruitment",
          icon: "/icons/recruitment.svg"
        },
        {
          id: 4,
          name: "Event",
          href: "/event",
          icon: "/icons/event.svg"
        },
        {
          id: 5,
          name: "Employee",
          href: "/employee",
          icon: "/icons/employee.svg"
        },
        {
          id: 6,
          name: "Leave Application",
          href: "/leave-application",
          icon: "/icons/leaveapp.svg"
        },
        {
          id: 7,
          name: "Attendance",
          href: "/attendance",
          icon: "/icons/attendance.svg"
        },
        {
          id: 8,
          name: "Inventory (Resources)",
          href: "/inventory",
          icon: "/icons/inventory.svg"
        },
        {
          id: 9,
          name: "Help and Support",
          href: "/help-and-support",
          icon: "/icons/help.svg"
        }
      ],
      page4: [
        {
          id: 1,
          name: "Dashboard",
          href: "/",
          icon: "/icons/dashboard.svg"
        },
        {
          id: 2,
          name: "Profile",
          href: "/profile",
          icon: "/icons/profile.svg"
        },
        {
          id: 3,
          name: "Inventory (Resources)",
          href: "/inventory",
          icon: "/icons/inventory.svg"
        },
        {
          id: 4,
          name: "Help and Support",
          href: "/help-and-support",
          icon: "/icons/help.svg"
        }
      ],
      page5: [
        {
          id: 1,
          name: "Dashboard",
          href: "/",
          icon: "/icons/dashboard.svg"
        },
        {
          id: 2,
          name: "Profile",
          href: "/profile",
          icon: "/icons/profile.svg"
        },
        {
          id: 3,
          name: "Leave Application",
          href: "/leave-application",
          icon: "/icons/leaveapp.svg"
        },
        {
          id: 4,
          name: "Help and Support",
          href: "/help-and-support",
          icon: "/icons/help.svg"
        }
      ]
    };

    return links[currentPage] || [];
  };

  const pageLinks = getPageLinks();

  return (
    <div className="relative h-[1024px] w-1/6 overflow-hidden bg-[#f5f8fa]">
      <div className="absolute left-[0px] top-[0px] h-[1024px] w-full bg-[#cbd4de]" />
      <div className="absolute left-[0px] top-[0px] h-[111px] w-full bg-[#FFFFFF] shadow-xl">
        <div className="font-inter absolute left-[65px] top-[24px] inline-block h-[45px] w-[191px] text-3xl font-semibold text-[#17A1FA]">
          Mekedoina
        </div>
        <img
          className="absolute left-[20px] top-[30px] h-[35px] w-[35px] rounded-[50%] object-cover"
          alt="logo"
          src="/icons/logo.svg"
        />
      </div>
      <nav className="absolute left-[35px] top-[130px]">
        <ul>
          {pageLinks.map(link => (
            <li key={link.id}>
              <a
                href={link.href}
                className="font-Inter my-[49px] flex items-center py-[10px] text-[18px] text-black">
                {link.icon && (
                  <span className="mr-2 inline-flex items-center">
                    <img
                      src={link.icon}
                      className="mr-10 h-[24px] w-[25px]"
                      alt={link.name}
                    />
                  </span>
                )}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
