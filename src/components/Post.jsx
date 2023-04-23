import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";
import ReadMoreReadLess from "./ReadMoreReadLess";

import { GoComment } from "react-icons/go";

import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiOutlineLink,
} from "react-icons/ai";
import { BsBookmarkFill, BsBookmarkPlus, BsMessenger, BsFillHeartFill } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import styled from "styled-components";
import SideBar from "./SideBar";
import { toast } from "react-toastify";
import Comment from "./Comment";
import {
  doc,
  arrayUnion,
  updateDoc,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

function Post(props) {
  const [clicked, setClicked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [commentIconClicked, setCommentIconClicked] = useState(false);
  const [comments, setComments] = useState("");

  let menuRef = useRef();
  let shareRef = useRef();

  let commentRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!commentRef.current.contains(e.target) && commentIconClicked) {
        setCommentIconClicked(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target) && clicked) {
        setClicked(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  useEffect(() => {
    let handler = (e) => {
      if (isShared && !shareRef.current.contains(e.target)) {
        setIsShared(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  onSnapshot(doc(db, "post", props.id), (doc) => {
    if (doc.exists()) {
      setComments(doc.data().comment);
    }
  });

  return (
    <>
      <SideBar />
      <Container>
        <div className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <div className="Profile">
                  <img
                    className="userProfileImg"
                    src="/images/google-logo.png"
                    alt=""
                  />
                  <div className="name__username">
                    <span className="name__user">{props.userName}</span>
                  
                  </div>
                </div>
              </div>
              <div className="postTopRight">
               
                <div
                  className="more__icon"
                  onClick={() => {
                    setClicked((prevState) => !prevState);
                  }}
                >
                  <FiMoreVertical />
                </div>
                {clicked && (
                  <div className="more" ref={menuRef}>
                    <div
                      className=" more__div report"
                      onClick={() => {
                        toast.error("Post has been reported");
                        setClicked(false);
                      }}
                    >
                      {" "}
                      Report this post
                    </div>
                    <div
                      className="more__div mute"
                      onClick={() => {
                        toast.error("@purvi123 is muted");
                        setClicked(false);
                      }}
                    >
                      {" "}
                      Mute @purvi123{" "}
                    </div>
                    <div
                      className="more__div unfollow"
                      onClick={() => {
                        toast.success("Unfollowed @purvi123 successfully");
                        setClicked(false);
                      }}
                    >
                      {" "}
                      Unfollow{" "}
                    </div>
                    <div
                      className="more__div notInterested"
                      onClick={() => {
                        toast.success("Feedback noted");
                        setClicked(false);
                      }}
                    >
                      {" "}
                      Not Interested in this post{" "}
                    </div>
                    <div
                      className="more__div block"
                      onClick={() => {
                        toast.error("@purvi123 has been blocked");
                        setClicked(false);
                      }}
                    >
                      {" "}
                      Block @purvi123
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="postCenter">
              <img className="postImg" src={props.imageURL} alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <span>
                  {props.likes.includes(props.user.uid) ? (
                    <AiFillHeart
                      className="likeRedIcon"
                      onClick={async () => {
                        setLiked(false);

                        await updateDoc(doc(db, "post", props.id), {
                          likes: arrayRemove(props.user.uid),
                        });
                      }}
                    />
                  ) : (
                    <AiOutlineHeart
                      className="likeIcon"
                      onClick={async () => {
                        setLiked(true);

                        await updateDoc(doc(db, "post", props.id), {
                          likes: arrayUnion(props.user.uid),
                        });
                      }}
                    />
                  )}
                </span>
                <span className="IconText">
                  {props.likes.length > 0 ? props.likes.length : 0}
                </span>

                <span>
                  <GoComment
                    className="CommentIcon"
                    onClick={() => {
                      setCommentIconClicked((prevState) => !prevState);
                    }}
                  />
                </span>

                {commentIconClicked && (
                  <Comment
                    cref={commentRef}
                    id={props.id}
                    comments={props.comments}
                    postId = {props.postId}
                  />
                )}
                <span className="IconText">
                  {props.comments?.length > 0 ? props.comments?.length : 0}
                </span>
                <span
                  onClick={() => {
                    setIsShared((prevState) => !prevState);
                  }}
                >
                  <IoIosShareAlt className="ShareIcon" />
                </span>

                {isShared && (
                  <div className="share__box" ref={shareRef}>
                    <span className="share__to">Share to...</span>
                    <div className="whatsapp">
                      {" "}
                      <AiOutlineWhatsApp className="share__icon" />
                      <span>Share to Whatsapp</span>
                    </div>
                    <div className="instagram">
                      <AiOutlineInstagram className="share__icon" />
                      <span>Share to Instagarm</span>
                    </div>
                    <div className="facebook">
                      <AiOutlineFacebook className="share__icon" />
                      <span>Share to Facebook</span>{" "}
                    </div>
                    <div className="twitter">
                      <AiFillTwitterCircle className="share__icon" />
                      <span>Share to Twitter</span>{" "}
                    </div>
                    <div className="messenger">
                      <BsMessenger className="share__icon" />
                      <span>Share to Messenger</span>{" "}
                    </div>
                    <div className="email">
                      <AiOutlineMail className="share__icon" />
                      <span>Share via Email</span>{" "}
                    </div>
                    <div className="link">
                      <AiOutlineLink className="share__icon" />
                      <span>Copy Link</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="postBottomRight">
                <span
                  onClick={() => {
                    setIsBookmarked((prevState) => !prevState);
                    if (!isBookmarked) {
                      toast.success("Post saved successfully");
                    } else {
                      toast.success("Post unsaved");
                    }
                  }}
                >
                  {isBookmarked ? (
                    <BsBookmarkFill className="BookMarkIcon" />
                  ) : (
                    <BsBookmarkPlus className="BookMarkIcon" />
                  )}
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </Container>
    </>
  );
}

export default Post;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-left: 30px;
`;
