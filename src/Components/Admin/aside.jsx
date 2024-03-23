import React from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";

import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <>
      <div className="aside-padding">
        <Link to="/">Home</Link>
      </div>
      <div className="aside-padding">
        <Link to="/">Home</Link>
      </div>
      <div className="aside-padding">
        <Link to="/List">
          <ChecklistIcon />
        </Link>
      </div>
    </>
  );
}
