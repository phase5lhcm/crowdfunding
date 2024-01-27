"use client";
import CONSTANTS from "../constants";
import "@/app/styles/callToActionStyles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const CallToActionCard = () => {
  const [bookmarkTitle, setBookmarkTitle] = useState(false);

  const toggleBookmarkTitle = () => {
    setBookmarkTitle(!bookmarkTitle);
  };
  const removeBookmarkTitle = () => {
    setBookmarkTitle(bookmarkTitle);
  };
  return (
    <div className="container justify-content-center  d-flex">
      <div class="card " style={{ width: "60%", marginTop: "4rem" }}>
        <div class="card-body">
          <h5 class="card-title text-center" style={{ fontWeight: "bold" }}>
            {CONSTANTS.header}
          </h5>
          <h6 class="card-subtitle mb-2 text-body-secondary text-center productDescription">
            {CONSTANTS.productDescription}
          </h6>

          <div className="row" style={{ paddingTop: "2em" }}>
            <div className="col d-flex justify-content-center align-items-center">
              {" "}
              <button type="button" class="btn callToActionBtn ">
                {CONSTANTS.callToAction}
              </button>
            </div>

            <div class="col d-flex justify-content-center align-items-center">
              {/**TODO - fix transition for onHover effect */}
              {bookmarkTitle && <p>Bookmark this project</p>}
              <button
                style={{ width: "50%", borderRadius: "50px", padding: "0.2em" }}
                onMouseOver={toggleBookmarkTitle}
                onMouseLeave={removeBookmarkTitle}
              >
                {" "}
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ height: "1em" }}
                  className="faBookmark"
                  onMouseEnter={toggleBookmarkTitle}
                />
              </button>
              {/* <div class="bookmark-container">
                <div class="bookmark-icon">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    style={{ height: "1em" }}
                    className="faBookmark"
                    onMouseEnter={toggleBookmarkTitle}
                  />
                </div>

                <input type="text" class="bookmark-bar" />
                {bookmarkTitle && <p>Bookmark this project</p>}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionCard;
