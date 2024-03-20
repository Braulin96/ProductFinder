import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useNavigate } from "react-router-dom";
// Icons
import { GoHome } from "react-icons/go";
import { GoQuestion } from "react-icons/go";
import { CiLogout } from "react-icons/ci";

const actions = [
  { icon: <GoHome color="#1976d2" size={24} />, name: "Home", link: "/" },
  {
    icon: <GoQuestion color="#1976d2" size={24} />,
    name: "Edit Answers",
    link: "/questions",
  },
  {
    icon: <CiLogout color="#1976d2" size={24} />,
    name: "Logout",
    link: "/",
  },
];

const SpeedDialNav = () => {
  const navigate = useNavigate();

  const handleActionClick = (link, name) => {
    if (name === "Logout") {
      localStorage.clear(); // Clear localStorage only for "New Answers"
      window.location.href = link;
    }
    navigate(link);
  };

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon color="red" />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleActionClick(action.link, action.name)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default SpeedDialNav;
