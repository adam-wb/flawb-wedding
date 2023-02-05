import React from "react";

const PageNotFound = () => (
  <div id="PageNotFound">
    <div className="container py-3">
      <div className="row">
        <div className="col">
          <h1>{"Page not found :("}</h1>
          <p>
            {
              "Please use one of the buttons on the menu to find what you're looking for."
            }
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default PageNotFound;
