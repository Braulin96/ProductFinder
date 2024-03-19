import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import { GoHome } from "react-icons/go";
import { GoQuestion } from "react-icons/go";
import { MdRestartAlt } from "react-icons/md";

const actions = [
  { icon: <GoHome color="#1976d2" size={24} />, name: "Home" },
  { icon: <GoQuestion color="#1976d2" size={24} />, name: "Edit Answers" },
  { icon: <MdRestartAlt color="#1976d2" size={24} />, name: "New Answers" },
];

const SpeedDialNav = () => {
  return (
    <Box sx={{ height: 200, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
export default SpeedDialNav;
