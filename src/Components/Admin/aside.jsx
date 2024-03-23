import React from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";

import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddHomeIcon from '@mui/icons-material/AddHome';
export default function Aside() {
  return (
    <>
      <ul>
        <li>
          {" "}
          <Link to="/"><AddHomeIcon/></Link>
        </li>
        <li>
          <Link to="/Admin"><AdminPanelSettingsIcon/></Link>
        </li>
        <li>
          {" "}
          <Link to="/Admin/List">
            <ChecklistIcon />
          </Link>
        </li>
      </ul>
    </>
  );
}
