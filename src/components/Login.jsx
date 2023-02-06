import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Alert from "./Alert";
import styles from "../styles/Login.module.css";
import { AiOutlineLock } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import {FcGoogle} from "react-icons/fc"
import { toast } from "react-toastify";


function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    show: false,
    msg: "",
  });

  const showError = (show = false, msg = "") => {
    setErrorMessage({ show, msg });
  };

  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Password || !email) {
      // showError(true, "Fill all the fields");
      toast.error("Fill all Details")
      return;
    }

    setErrorMessage("");
    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(auth, email, Password)
      .then(async (userDetails) => {
        setSubmitBtnDisabled(false);
        console.log(userDetails);
        navigate("/home");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          // showError(true, "User not found! login first");
          toast.error("User not Found! Sign up first")
        } else if (error.code === "auth/wrong-password") {
          // showError(true, "Wrong Password");
          toast.error("Wrong Email or Password")
        } else {
          // showError(true, error.code);
          toast.error(`${error.message}`)
        }

        setSubmitBtnDisabled(false);
        return;
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
        <div className={styles.inputbox}>
          <input
            type="password"
            required
            value={Password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <AiOutlineLock className={styles.icon} />
          <span>enter password</span>
        </div>

      </div>
        <div className={styles.forgot__password}>
          <Link className={styles.link__name} to="/ForgotPassword">
            Forgot Password ?
          </Link>
        </div>

      <button
        disabled={submitBtnDisabled}
        onClick={submitHandler}
        className={styles.loginbtn}
      >
        Login
      </button>
      <div className={styles.already__line}>
        Don't have an account?{" "}
        <Link className={styles.link__name} to="/signup">
         Sign Up
        </Link>
      </div>
      <div className={styles.login__line}>
        <p> Or Login with</p>
      </div>
      <div className={styles.btn__container}>
        <button className={styles.google_login_btn} onClick={authWithGoogle}>
          <FcGoogle className={styles.auth__icon}/>
          {/* <img src="/images/google-logo.png" alt="" /> */}
           Login with Google
        </button>
       
      </div>
    </div>
   
  );
}

export default Login;
