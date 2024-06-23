"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import SignInButton from "./utils/SignInButton";
import { Result } from "postcss";

export const SignIn = () => {
  const { data: session } = useSession();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl,
    });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} action="" className="sign-in-form">
        <h2 className="title">Sign In</h2>
        <div className="input-field">
          <FontAwesomeIcon icon={faUser} />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn solid">
          sign in
        </button>
        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <div
            className="social-icon"
            onClick={() => signIn("google", { callbackUrl })}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faGoogle} />
          </div>
          <div
            className="social-icon"
            onClick={() => signIn("github", { callbackUrl })}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </form>
    </div>
  );
};
