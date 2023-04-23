import { auth, storage, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { v4 } from "uuid";
import {  useState } from "react";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import Post from "./Post";

import { toast } from "react-toastify";
import { onSnapshot } from "firebase/firestore";

function Postdemo() {
  const [allImagesURL, setAllImagesURL] = useState([]);
  const [image, setImage] = useState([]);
  const user = auth.currentUser;
  const [items, setItems] = useState([]);
  const postId = user?.displayName + v4();
  const imageName = image?.name + v4();
  const userID = user?.uid;
  const imagesRef = ref(storage, `post/${userID}/${postId}/${imageName}`);

  let imageURL = "";
  const setPostDetails = async () => {
    if(image===null){
      toast.error("Please select an image")
      return;
    }
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
              userName: "ram",
              comment: "hello",
            },
            {
              userName: "vishi",
              comment: "hey",
            },
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
    <>
    
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={setPostDetails}>Upload</button>

      {items.map((item) => (
        <Post
        key = {item.id}
          id={item.id}
          user={user}
          userId={item.userId}
          postId={item.postId}
          userName={item.userName}
          imageURL={item.postImageUrl}
          description={item.description}
          createdAt={item.createdAt}
          likes={item.likes}
          comments={item.comment}
        />
      ))}
    </>
  );
}

export default Postdemo;
