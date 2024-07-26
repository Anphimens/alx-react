import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

export function Notifications() {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div
      className="Notifications"
      style={{
        position: "relative",
        padding: "10px",
        border: "1px solid black",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img
          src={closeIcon}
          alt="Close icon"
          style={{ width: "15px", height: "15px" }}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
