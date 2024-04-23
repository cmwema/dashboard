import {
  IoMdHome,
  IoMdPerson,
  IoMdPeople,
  IoMdBug,
  IoMdCart,
  IoMdBookmarks,
  IoMdApps,
  IoMdBookmark,
  IoMdCreate,
  IoMdCalendar,
  IoMdSettings,
  IoMdAnalytics,
  IoMdLogIn,
} from "react-icons/io";

export const menuItems = [
  {
    title: "main",
    items: [
      {
        to: "/",
        title: "Homepage",
        Icon: IoMdHome,
      },
      {
        to: "profile",
        title: "Profile",
        Icon: IoMdPerson,
      },
    ],
  },
  {
    title: "lists",
    items: [
      {
        to: "users",
        title: "Users",
        Icon: IoMdPeople,
      },
      {
        to: "products",
        title: "Products",
        Icon: IoMdBug,
      },
      {
        to: "orders",
        title: "Orders",
        Icon: IoMdCart,
      },
      {
        to: "posts",
        title: "Posts",
        Icon: IoMdBookmarks,
      },
    ],
  },
  {
    title: "general",
    items: [
      {
        to: "elements",
        title: "Elements",
        Icon: IoMdApps,
      },
      {
        to: "notes",
        title: "Notes",
        Icon: IoMdBookmark,
      },
      {
        to: "forms",
        title: "Forms",
        Icon: IoMdCreate,
      },
      {
        to: "calendar",
        title: "Calendar",
        Icon: IoMdCalendar,
      },
    ],
  },
  {
    title: "maintenance",
    items: [
      {
        to: "settings",
        title: "Settings",
        Icon: IoMdSettings,
      },
      {
        to: "backups",
        title: "Backups",
        Icon: IoMdHome,
      },
    ],
  },
  {
    title: "analytics",
    items: [
      {
        to: "charts",
        title: "Charts",
        Icon: IoMdAnalytics,
      },
      {
        to: "logs",
        title: "Logs",
        Icon: IoMdLogIn,
      },
    ],
  },
];
