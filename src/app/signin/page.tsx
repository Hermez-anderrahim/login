// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import log from "./_assets/log.svg";
// import register from "./_assets/register.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebookF,
//   faTwitter,
//   faGoogle,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";
import SignInButton from "../_components/utils/SignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import SignOutButton from "../_components/utils/SignOutButton";
import { SignIn } from "../_components/SignInForm";

export default async function Signin() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-screen w-screen">
      {session !== null && session !== undefined ? (
        <div> you are alredy signed in</div>
      ) : (
        <div>
          <SignIn />
        </div>
      )}
    </div>
  );

  // const [isSignUpMode, setIsSignUpMode] = useState(false);

  // const handleSignUpClick = () => {
  //   setIsSignUpMode(true);
  // };

  // const handleSignInClick = () => {
  //   setIsSignUpMode(false);
  // };

  // return (
  //   <div className="big-container">
  //     <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
  //       <div className="forms-container">
  //         <div className="signin-signup">
  //           <form action="" className="sign-in-form">
  //             <h2 className="title">Sign In</h2>
  //             <div className="input-field">
  //               <FontAwesomeIcon icon={faUser} />
  //               <input type="text" placeholder="Username" />
  //             </div>
  //             <div className="input-field">
  //               <FontAwesomeIcon icon={faLock} />
  //               <input type="password" placeholder="Password" />
  //             </div>
  //             <button onClick={() => signIn()} className="btn solid">
  //               sign in
  //             </button>

  //             <p className="social-text">Or Sign in with social platforms</p>
  //             <div className="social-media">
  //               <a href="#" className="social-icon">
  //                 <FontAwesomeIcon icon={faFacebookF} />
  //               </a>
  //               <a href="#" className="social-icon">
  //                 <FontAwesomeIcon icon={faTwitter} />
  //               </a>
  //               <a href="#" className="social-icon">
  //                 <FontAwesomeIcon icon={faGoogle} />
  //               </a>
  //               <a href="#" className="social-icon">
  //                 <FontAwesomeIcon icon={faLinkedinIn} />
  //               </a>
  //             </div>
  //           </form>

  //           <form action="" className="sign-up-form">
  //             <h2 className="title">Sign Up</h2>
  //             <div className="input-field">
  //               <FontAwesomeIcon icon={faUser} />
  //               <input type="text" placeholder="Username" />
  //             </div>
  //             <div className="input-field">
  //               <FontAwesomeIcon icon={faEnvelope} />
  //               <input type="email" placeholder="Email" />
  //             </div>
  //             <div className="input-field">
  //               <FontAwesomeIcon icon={faLock} />
  //               <input type="password" placeholder="Password" />
  //             </div>
  //             <input type="submit" value="Sign Up" className="btn solid" />
  //             <p className="social-text">Or Sign up with social platforms</p>
  //             <div className="social-media">
  //               <a href="#" className="social-icon">
  //                 <FontAwesomeIcon icon={faFacebookF} />
  //               </a>
  //               <a href="#" className="social-icon">
  //                 <FontAwesomeIcon icon={faTwitter} />
  //               </a>
  //               <a href="#" className="social-icon">
  //                 <FontAwesomeIcon icon={faGoogle} />
  //               </a>
  //               <a href="#" className="social-icon">
  //                 <FontAwesomeIcon icon={faLinkedinIn} />
  //               </a>
  //             </div>
  //           </form>
  //         </div>
  //       </div>

  //       <div className="panels-container">
  //         <div className="panel left-panel">
  //           <div className="content">
  //             <h3>New here?</h3>
  //             <p>
  //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
  //               minus natus est.
  //             </p>
  //             <button
  //               className="btn transparent"
  //               id="sign-up-btn"
  //               onClick={handleSignUpClick}
  //             >
  //               Sign Up
  //             </button>
  //           </div>
  //           <Image src={log} width={45} className="image" alt="" />
  //         </div>

  //         <div className="panel right-panel">
  //           <div className="content">
  //             <h3>One of us?</h3>
  //             <p>
  //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
  //               minus natus est.
  //             </p>
  //             <button
  //               className="btn transparent"
  //               id="sign-in-btn"
  //               onClick={handleSignInClick}
  //             >
  //               Sign In
  //             </button>
  //           </div>
  //           <Image src={register} width={45} className="image" alt="" />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
}
