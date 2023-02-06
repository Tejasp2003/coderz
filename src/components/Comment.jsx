import React, { useEffect, useState } from "react";
import styles from "../styles/Comment.module.css";
import { addDoc, arrayUnion, collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { v4 } from "uuid";

function Comment(props) {
    const [comment, setComment] = useState("");


    const addComment = async()=>{
        if(comment !== ""){
            await onAuthStateChanged(auth, (user) => {
                if (user) {
                  updateDoc(doc(db, "post", props.id), {
                    comment: arrayUnion({
                       
                        userName: user.displayName,
                        comment: comment,
                    })
                  });
                  setComment("");
                } else {
                }
              });
            }
            

    }


        
  return (
    <>
      <div className={styles.wrapper} ref={props.cref}  >
        <div className={styles.comment_heading}>Comments</div>
         
        {props.comments &&
            props.comments.map((comment)=>{
                return(
                    <div className={styles.comment} key={props.postId +v4()}>
                    <div className={styles.profile_icon}>
                      <img src="/images/google-logo.png" alt="" />
                    </div>
                    <div className={styles.comment_wrapper}>
                      <div className={styles.username}>
                        <span>{comment.userName}</span>
                      </div>
                      <div className={styles.comment_text}>
                        <span>{comment.comment}</span>
                      </div>
                    </div>
                  </div>
                )
            })
        }

           
       
        <div className={styles.addCommentBox}>
          <div className={styles.commentInput}>
            <input type="text" placeholder="Add a comment..." 
            value={comment}
            onChange={(e) => setComment(e.target.value)}

            
            />
          </div>
          <div className={styles.commentBtn}>
            <button className={styles.button} 
            onClick={addComment}


            
            >
                Add Comment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
