"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import log from "./_assets/log.svg";
import register from "./_assets/register.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const SignUp = () => {
  return (
    <div className="">
      <form action="/api/register" method="POST" className="sign-up-form">
        <h2 className="title">Sign Up</h2>
        {/* <div className="input-field">
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder="Username" />
        </div> */}
        <div className="input-field">
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <FontAwesomeIcon icon={faLock} />
          <input type="password" placeholder="Password" />
        </div>
        {/* <input type="submit" value="Sign Up" className="btn solid" /> */}
        <button type="submit" className="btn solid">
          sign up
        </button>
        <p className="social-text">Or Sign up with social platforms</p>
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
