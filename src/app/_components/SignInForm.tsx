"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import SignInButton from "./utils/SignInButton";
export const SignIn = () => {
  return (
    <div className="">
      <form action="" className="sign-in-form">
        <h2 className="title">Sign In</h2>
        <div className="input-field">
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <FontAwesomeIcon icon={faLock} />
          <input type="password" placeholder="Password" />
        </div>
        <SignInButton />
        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </form>
    </div>
  );
};
