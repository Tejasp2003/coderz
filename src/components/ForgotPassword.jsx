import React from "react";
import styles from "../styles/ForgotPassword.module.css";

import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Alert from "./Alert";
import { GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    show: false,
    msg: "",
  });

  const showError = (show = false, msg = "") => {
    setErrorMessage({ show, msg });
  };

  const auth = getAuth();
  const navigate = useNavigate();

  const submitHandler = () => {
    if (!email) {
      showError(true, "Fill all the fields");
      return;
    }
    setSubmitBtnDisabled(true)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        setSubmitBtnDisabled(false)
        toast.success("Recovery email sent");
        navigate("/login");
      })
      .catch((error) => {
        setSubmitBtnDisabled(false)
        if (error.code === "auth/user-not-found") toast.error("Invalid email");

        // ..
      });
  };

  const provider = new GoogleAuthProvider();
  const authWithGoogle=()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      navigate("/home");
    })
    .catch((error) => {

      toast.error("Login Failed")
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.logo}>
          <p>Cod3rs</p>
        </div>

        {errorMessage.show && (
          <Alert {...errorMessage} removeError={showError} />
        )}
        <div className={styles.inputbox}>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <HiOutlineMail className={styles.icon} />
          <span>email</span>
        </div>
      </div>

      <button
        disabled={submitBtnDisabled}
        onClick={submitHandler}
        className={styles.loginbtn}
      >
        Reset Password
      </button>
      <div className={styles.already__line}>
        Don't have an account?{" "}
        <Link className={styles.link__name} to="/signup">
          Sign Up
        </Link>
      </div>
      <div className={styles.login__line}>
        <p> Or Continue with</p>
      </div>
      <div className={styles.btn__container}>
        <button className={styles.google_login_btn} onClick={authWithGoogle}>
          <FcGoogle className={styles.auth__icon} />
          {/* <img src="/images/google-logo.png" alt="" /> */}
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
