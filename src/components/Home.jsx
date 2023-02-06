// import React, { useEffect, useRef, useState } from "react";
// import "../styles/Home.css";
// import ReadMoreReadLess from "./ReadMoreReadLess";
// import { FcLike } from "react-icons/fc";
// import { GoComment } from "react-icons/go";
// import {
//   AiFillHeart,
//   AiOutlineHeart,
//   AiOutlineWhatsApp,
//   AiOutlineInstagram,
//   AiOutlineFacebook,
//   AiFillTwitterCircle,
//   AiOutlineMail,
//   AiOutlineLink,
// } from "react-icons/ai";
// import { BsBookmarkFill, BsBookmarkPlus, BsMessenger } from "react-icons/bs";
// import { IoIosShareAlt } from "react-icons/io";
// import { FiMoreVertical } from "react-icons/fi";
// import styled from "styled-components";
// import SideBar from "./SideBar";
// import { toast } from "react-toastify";

// function Home() {
//   const [clicked, setClicked] = useState(false);
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [liked, setLiked] = useState(false);
//   const [isShared, setIsShared] = useState(false);
//   let menuRef = useRef();
//   let shareRef = useRef();
//   useEffect(() => {
//     let handler = (e) => {
//       if (!menuRef.current.contains(e.target)) {
//         setClicked(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   });
//   useEffect(() => {
//     let handler = (e) => {
//       if (!shareRef.current.contains(e.target)) {
//         setIsShared(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   });

//   return (
//     <>
//       <SideBar />
//       <Container>
//         <div className="post">
//           <div className="postWrapper">
//             <div className="postTop">
//               <div className="postTopLeft">
//                 <div className="Profile">
//                   <img
//                     className="userProfileImg"
//                     src="/images/google-logo.png"
//                     alt=""
//                   />
//                   <div className="name__username">
//                     <span className="name__user">Purvi Patel</span>
//                     <span className="Username">@purvi123</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="postTopRight">
//                 <div className="post__date">
//                   <span className="postdate__span">17-jan-2023</span>
//                 </div>
//                 <div
//                   className="more__icon"
//                   onClick={() => {
//                     setClicked((prevState) => !prevState);
//                   }}
//                 >
//                   <FiMoreVertical />
//                 </div>
//                 {clicked && (
//                   <div className="more" ref={menuRef}>
//                     <div
//                       className=" more__div report"
//                       onClick={() => {
//                         toast.error("Post has been reported");
//                         setClicked(false);
//                       }}
//                     >
//                       {" "}
//                       Report this post
//                     </div>
//                     <div
//                       className="more__div mute"
//                       onClick={() => {
//                         toast.error("@purvi123 is muted");
//                         setClicked(false);
//                       }}
//                     >
//                       {" "}
//                       Mute @purvi123{" "}
//                     </div>
//                     <div
//                       className="more__div unfollow"
//                       onClick={() => {
//                         toast.success("Unfollowed @purvi123 successfully");
//                         setClicked(false);
//                       }}
//                     >
//                       {" "}
//                       Unfollow{" "}
//                     </div>
//                     <div
//                       className="more__div notInterested"
//                       onClick={() => {
//                         toast.success("Feedback noted");
//                         setClicked(false);
//                       }}
//                     >
//                       {" "}
//                       Not Interested in this post{" "}
//                     </div>
//                     <div
//                       className="more__div block"
//                       onClick={() => {
//                         toast.error("@purvi123 has been blocked");
//                         setClicked(false);
//                       }}
//                     >
//                       {" "}
//                       Block @purvi123
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="postCenter">
//               <img className="postImg" src="/images/image1.jpg" alt="" />
//             </div>
//             <div className="postBottom">
//               <div className="postBottomLeft">
//                 <span
//                   onClick={() => {
//                     setLiked((prevState) => !prevState);
//                   }}
//                 >
//                   {" "}
//                   {liked ? (
//                     <AiFillHeart className="likeRedIcon" />
//                   ) : (
//                     <AiOutlineHeart className="likeIcon" />
//                   )}
//                 </span>
//                 <span className="IconText">20k</span>
//                 <span>
//                   <GoComment className="CommentIcon" />
//                 </span>
//                 <span className="IconText">49</span>
//                 <span onClick={()=>{
//                   setIsShared((prevState) => !prevState);

//                 }}>
                  
//                   <IoIosShareAlt className="ShareIcon" />
//                 </span>

//                {isShared&& <div className="share__box" ref={shareRef}>
//                   <span className="share__to">Share to...</span>
//                   <div className="whatsapp">
//                     {" "}
//                     <AiOutlineWhatsApp className="share__icon" />
//                     <span>Share to Whatsapp</span>
//                   </div>
//                   <div className="instagram">
//                     <AiOutlineInstagram className="share__icon" />
//                     <span>Share to Instagarm</span>
//                   </div>
//                   <div className="facebook">
//                     <AiOutlineFacebook className="share__icon" />
//                     <span>Share to Facebook</span>{" "}
//                   </div>
//                   <div className="twitter">
//                     <AiFillTwitterCircle className="share__icon" />
//                     <span>Share to Twitter</span>{" "}
//                   </div>
//                   <div className="messenger">
//                     <BsMessenger className="share__icon" />
//                     <span>Share to Messenger</span>{" "}
//                   </div>
//                   <div className="email">
//                     <AiOutlineMail className="share__icon" />
//                     <span>Share via Email</span>{" "}
//                   </div>
//                   <div className="link">
//                     <AiOutlineLink className="share__icon" />
//                     <span>Copy Link</span>
//                   </div>
//                 </div>}
//               </div>
//               <div className="postBottomRight">
//                 <span
//                   onClick={() => {
//                     setIsBookmarked((prevState) => !prevState);
//                     if (!isBookmarked) {
//                       toast.success("Post saved successfully");
//                     } else {
//                       toast.success("Post unsaved");
//                     }
//                   }}
//                 >
//                   {isBookmarked ? (
//                     <BsBookmarkFill className="BookMarkIcon" />
//                   ) : (
//                     <BsBookmarkPlus className="BookMarkIcon" />
//                   )}
//                 </span>
//               </div>
//             </div>
//             <div className="postText">
//               <ReadMoreReadLess>
//                 The Quit India Movement was a movement started by Mahatma Gandhi
//                 on 8 August 1942. The Quit India Movement was a movement started
//                 by Mahatma Gandhi on 8 August 1942 . The Quit India Movement was
//                 a movement started by Mahatma Gandhi on 8 August 1942 . The Quit
//                 India Movement was a movement started by Mahatma Gandhi on 8
//                 August 1942 .
//               </ReadMoreReadLess>
//             </div>
//           </div>
//         </div>
        
      
       
//       </Container>
//     </>
//   );
// }

// export default Home;

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   gap: 10px;
//   margin-left: 30px;
// `;
