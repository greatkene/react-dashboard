import { FaBalanceScale, FaHome, FaUber, FaUser } from "react-icons/fa";

export const sidebarLink = [
  {
    id: 1,
    name: "Dashboard",
    link: "/",
    icon: <FaHome size={22} />,
  },
  {
    id: 2,
    name: "Item 2",
    link: "/",
    icon: <FaBalanceScale size={22} />,
  },
  {
    id: 3,
    name: "Item 3",
    link: "/",
    icon: <FaUber size={22} />,
  },
  {
    id: 4,
    name: "Item 4",
    link: "/",
    icon: <FaUser size={22} />,
  },
];
