import PersonIcon from "@material-ui/icons/Person";
import TelegramIcon from "@material-ui/icons/Telegram";
import MoneyIcon from "@material-ui/icons/Money";
import DraftsIcon from "@material-ui/icons/Drafts";

export const MenuItems = [
  {
    name: "Clinical policies",
  },
  {
    name: "Action Center",
    code: 1,
    icon: <DraftsIcon />,
  },
  {
    name: " Case management Correspondence",
    code: 1,
    icon: <TelegramIcon />,
  },

  {
    name: " Case management Roster",
    code: 1,
    icon: <TelegramIcon />,
  },
  {
    name: "Claims",
    code: 1,
    icon: <MoneyIcon />,
  },
  {
    name: "Medical/Behavioral Health",
    code: 1,
    userdropdown: true,
    icon: <MoneyIcon />,
  },

  {
    name: "Appeals",
    code: 1,
    icon: <DraftsIcon />,
  },
  {
    name: "Correspondenceh",
    code: 1,
    icon: <DraftsIcon />,
  },
  {
    name: "Change Password",
    code: 1,
    icon: <PersonIcon />,
  },
];

export const UserMenuItems = [
  {
    name: "Action Center",
    code: 1,
    icon: <DraftsIcon />,
  },
  {
    name: " Case management Correspondence",
    code: 1,
    icon: <TelegramIcon />,
  },
  {
    name: " Case management Roster",
    code: 1,
    icon: <TelegramIcon />,
  },
  {
    name: "Eligibility Search",
    code: 1,
    icon: <TelegramIcon />,
  },
  {
    name: "Claims",
    code: 1,
    icon: <MoneyIcon />,
  },
  {
    name: "Medical/Behavioral Health",
    code: 1,
    userdropdown: true,
    value: "admindropdown",
    icon: <MoneyIcon />,
  },
  {
    name: "   Prior Authorization Pharmacy",
    code: 1,
    admindropdown: true,
    value: "userdropdown",
    icon: <MoneyIcon />,
  },

  {
    name: "Appeals",
    code: 1,
    icon: <DraftsIcon />,
  },
  {
    name: "Correspondence",
    code: 1,
    icon: <MoneyIcon />,
  },
  {
    name: "Change Password",
    code: 1,
    icon: <PersonIcon />,
  },
];

export const UserItems = [
  {
    id: 1,
    title: "Request Medical PA",
    icon: <PersonIcon />,
    path: "/medical-pa",
  },
  {
    id: 2,
    title: "View Auth Medical test",
    icon: <PersonIcon />,
  },
];

export const RoleItems = [
  {
    id: 1,
    title: "Request Pharmacy PA",
    icon: <PersonIcon />,
  },
  {
    id: 2,
    title: "View Authorizations Pharmacy",
    icon: <PersonIcon />,
  },
];
