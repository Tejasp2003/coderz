import { useState } from "react";
import "../styles/SideBar.css";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineEditCalendar } from "react-icons/md";
import { HiAcademicCap, HiOutlineHome } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import {  storage, db } from "../firebase";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { v4 } from "uuid";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import Post from "./Post";

import { toast } from "react-toastify";
import { onSnapshot } from "firebase/firestore";
import Modal from "./Modal";

function SideBar() {
  const [allImagesURL, setAllImagesURL] = useState([]);
  const [image, setImage] = useState([]);
  const user = auth.currentUser;
  const [items, setItems] = useState([]);
  const postId = user?.displayName + v4();
  const imageName = image?.name + v4();
  const userID = user?.uid;
  const imagesRef = ref(storage, `post/${userID}/${postId}/${imageName}`);

  let imageURL = "";
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  function checkActiveRoute(route) {
    if (location.pathname === route) {
      return true;
    }
  }

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const navigate = useNavigate();





  const setPostDetails = async () => {
    if (image !== null) {
      await uploadBytes(imagesRef, image).then((snapshot) => {
        toast.success("Image uploaded successfully")
      });
    }
    await getDownloadURL(
      ref(storage, `post/${userID}/${postId}/${imageName}`)
    ).then((url) => {
      imageURL = url;

      setAllImagesURL([...allImagesURL, imageURL]);
    });

    await onAuthStateChanged(auth, (user) => {
      if (user) {
       


        addDoc(collection(db, `post/`), {
          userId: user.uid,
          userName: user.displayName,
          postId: postId,
          description: "hello 1 post content",
          createdAt: new Date().toISOString(),
          postImageUrl: imageURL,
          likes: [],
          comments: [
            {
              
            }
          ],
        });
      } else {
      }
    });
    setImage(null);
  };
  const postCollection = collection(db, "post");

  onSnapshot(
    postCollection,
    (querySnapshot) => {
      const postList = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItems(postList);
    }
  )









  
  return (
    <div className="container">
    
      <div className="logo">
        <h1>Coders</h1>
      </div>

      <div className="border-line"></div>
      <div className="items">
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Upload Image</h2>
            <form onSubmit={setPostDetails}>
              <label htmlFor="file-input">Choose file:</label>
              <input type="file" id="file-input" onChange={(e) => setImage(e.target.files[0])} />
              <button type="submit">Submit</button>
            </form>
            <button onClick={() => setShowModal(false)} className="close-button">X</button>
          </div>
        </div>
      )}
        <div className="items-list">
      <div className="addPostBtn"

        onClick={() => {
          setShowModal(true);
        }}
      >
      
          <IoMdAddCircle className="addIcon" />
          <span>Add Post</span>
        
      </div>
      
   

          <button
            className={checkActiveRoute("/home") ? "active" : ""}
            onClick={() => {
              // setIsActive(true)

              navigate("/home");
            }}
          >
            <HiOutlineHome className="home-icon" />

            <span>Home</span>
          </button>
          <button
            onClick={() => {
              navigate("/events");
            }}
            className={checkActiveRoute("/events") && "active"}
          >
            <HiAcademicCap className="events-icon" />{" "}
            <span>Learn</span>
          </button>

          <button
            onClick={() => {
              navigate("/profile");
            }}
            className={checkActiveRoute("/profile") && "active"}
          >
            <CgProfile className="profile-icon" /> <span> Profile</span>
          </button>

          <button
            onClick={() => {
              navigate("/about");
            }}
            className={checkActiveRoute("/settings") && "active"}
          >
            <AiOutlineSetting className="settings-icon" /> <span>About</span>
          </button>
        </div>
        <div className="logout">
          <button className="logout-btn" onClick={signOutHandler}>
            <BiLogOut className="logout-icon" />{" "}
            <span className="logout-span">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
