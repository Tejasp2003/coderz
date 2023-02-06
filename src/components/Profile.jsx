import React, { useEffect, useRef } from "react";
import { useState } from "react";
import SideBar from "./SideBar";
import Editprofile from "./Editprofile";
import styles from "../styles/Profile.module.css";
import { CiEdit } from "react-icons/ci";
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import {BiEditAlt} from "react-icons/bi"
import {FaRegEdit} from "react-icons/fa"
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiFillInstagram,
  AiOutlineFacebook,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiOutlineLink,
  AiFillGithub,
} from "react-icons/ai";
function Profile() {
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsClicked(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <SideBar />
      <div className={styles.profile_container}>
        <div className={styles.profile}>
          <div className={styles.profile_img}>
            <img src="/images/google-logo.png" alt="profile" />
          </div>

          <div className={styles.followers}>
            <h3>Followers</h3>
            <p>100</p>
          </div>
          <div className={styles.following}>
            <h3>Following</h3>
            <p>100</p>
          </div>
        </div>
        <div className={styles.bio}>
          <div className={styles.bio_content}>
         <div className={styles.username__edit}>
          <div className={styles.username}>
          <h3>Tejas Patel</h3>
          <h6>@Tejas2003</h6>
          </div>
          <div className={styles.editprofile}>
            < FaRegEdit className={styles.edit__icon}/>
          </div>
         
            

          
            </div>
            
            <div className="bio_text">
              <div>CE LDRP' 24</div>
              <div>Cricket</div>
              <div>Love to Code</div>
              <div>Web Development</div>
              <div>DSA</div>
              <div>Html, Css, Javascript, React, Python, Java</div>
            </div>
          </div>
        </div>
        <div className={styles.social_links}>
          <h2>Social Links</h2>
          <div className={styles.links}>
            <BsLinkedin className={styles.social_link} />
            <BsGithub className={styles.social_link} />
            <SiLeetcode className={styles.social_link} />
            <BsTwitter className={styles.social_link} />
            <GrMail className={styles.social_link} />
            <AiFillInstagram className={styles.social_link} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
