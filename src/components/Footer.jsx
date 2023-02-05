import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GITHUB_REPO } from "../helpers/links";

const Footer = () => (
  <div className="footer">
    <footer className="text-center text-white py-5">
      <p>
        {"Made by Adam"}
        <a href={GITHUB_REPO} className="me-4 text-reset">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </p>
    </footer>
  </div>
);

export default Footer;
