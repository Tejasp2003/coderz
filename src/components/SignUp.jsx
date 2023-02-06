import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Alert from "./Alert";
import styles from "../styles/Signup.module.css";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLock } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

function SignUp() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const [userName, setUserName] = useState("");

  const provider = new GoogleAuthProvider();

  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const [errorMessage, setErrorMessage] = useState({
    show: false,
    msg: "",
  });
  const navigate = useNavigate();

  const showError = (show = false, msg = "") => {
    setErrorMessage({ show, msg });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!userName || !Password || !email || !confirmPassword) {
      // setErrorMessage("Fill all fields");
      // showError(true, "Fill all the fields");
      toast.error("Fill all Details");
      return;
    }
    if (Password !== confirmPassword) {
      // setErrorMessage("Password and Confirm password not matches");
      // showError(true, "Password field not matches");
      toast.error("Password field not matches");
      return;
    }
    setErrorMessage("");
    setSubmitBtnDisabled(true);
    createUserWithEmailAndPassword(auth, email, Password)
      .then(async (userDetails) => {
        setSubmitBtnDisabled(false);
        const user = userDetails.user;
        await updateProfile(user, {
          displayName: userName,
        });

        await setDoc(doc(db, "users", user.uid), {
          userId: user.uid,
          userName: userName,
          email: email,
          createdAt: new Date().toISOString(),
        });
        navigate("/home");
      })
      .catch((error) => {
        // setErrorMessage(error.message);
        if (error.code === "auth/email-already-in-use") {
          // showError(true, "The email address is already in use");
          toast.error("Email address is already in use");
        } else if (error.code === "auth/invalid-email") {
          // showError(true, "The email address is not valid.");
          toast.error("Email address is not valid");
        } else if (error.code === "auth/operation-not-allowed") {
          // showError(true, "Operation not allowed");
          toast.error("Operation not allowed");
        } else if (error.code === "auth/weak-password") {
          // showError(true, "Password is too weak");
          toast.error("Password is too weak");
        } else {
          // showError(true, error.message);
          toast.error(`${error.message}`);
        }
        setSubmitBtnDisabled(false);

        return;
      });
  };

  const authWithGoogle =  () => {
    signInWithPopup(auth, provider)
      .then( async (result) => {
        const user = result.user;
        await setDoc(doc(db, "users", user.uid), {
          userId: user.uid,
          userName: userName,
          email: email,
          createdAt: new Date().toISOString(),
        });
        navigate("/home");
      })
      .catch((error) => {
        setErrorMessage(true, "Failed to login with Google");
      });
  };

  return (
    <div div className={styles.main__container}>
      <div className={styles.inner__container}>
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
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                required
              />
              <CgProfile className={styles.icon} />
              <span>username</span>
            </div>
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
              <span>create password</span>
            </div>
            <div className={styles.inputbox}>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <AiOutlineLock className={styles.icon} />
              <span>confirm password</span>
            </div>
          </div>

          <button
            disabled={submitBtnDisabled}
            onClick={submitHandler}
            className={styles.signupbtn}
          >
            Sign Up
          </button>
        </div>
        <div className={styles.second__container}>
          <div className={styles.already__line}>
            Already have an account?{" "}
            <Link className={styles.link__name} to="/login">
              Login
            </Link>
          </div>
          <div className={styles.signup__line}>
            <p>OR</p>
          </div>
          <div className={styles.btn__container}>
            <button
              className={styles.google_signup_btn}
              onClick={authWithGoogle}
            >
              <FcGoogle className={styles.auth__icon} /> Sign Up with Google
            </button>
          </div>
        </div>
      </div>
      <div className={styles.img__container}>
        <img src="/images/pptimg.jpg" alt="" />
      </div>
    </div>
  );
}

export default SignUp;
