import React from "react";
import SideBar from "./SideBar";
import styles from "../styles/Notification.module.css";

function Notification() {
  return (
    <>
      <SideBar />
      <div className={styles.notification_container}>
        <div className={styles.notification_items}>
          <div className={styles.notification_today}>
            <h3>Today</h3>

            <div className={styles.notification}>
              <div className={styles.profile_img}>
                <img src="/images/google-logo.png" alt="" />{" "}
              </div>
              <div className={styles.notification_text}>
                <p>@test223 commented on your post</p>
              </div>
            </div>
            <div className={styles.notification}>
              <div className={styles.profile_img}>
                <img src="/images/google-logo.png" alt="" />{" "}
              </div>
              <div className={styles.notification_text}>
                <p>@user123 posted a new post</p>
              </div>
            </div>
            <div className={styles.notification}>
              <div className={styles.profile_img}>
                <img src="/images/google-logo.png" alt="" />{" "}
              </div>
              <div className={styles.notification_text}>
                <p>@xyz, @tkl, @vtl and 40 others have liked your post</p>
              </div>
            </div>
            <div className={styles.notification}>
              <div className={styles.profile_img}>
                <img src="/images/google-logo.png" alt="" />{" "}
              </div>
              <div className={styles.notification_text}>
                <p>@Tejas2003 started following @Vishi2107</p>
              </div>
            </div>
          </div>
          <div className={styles.notification_yesterday}>
            <h3>Older</h3>

            <div className={styles.notification}>
              <div className={styles.profile_img}>
                <img src="/images/google-logo.png" alt="" />
              </div>
              <div className={styles.notification_text}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic omnis sequi necessitatibus ipsam minus assumenda nemo consequuntur cum tenetur quidem, neque suscipit ex est veniam laudantium temporibus repudiandae molestias! Laboriosam hic placeat architecto repudiandae cupiditate sed quis debitis. Id qui quos sed suscipit quasi sit ducimus soluta ab optio.</p>
              </div>
            </div>
            <div className={styles.notification}>
              <div className={styles.profile_img}>
                <img src="/images/google-logo.png" alt="" />
              </div>
              <div className={styles.notification_text}>
                <p>@test223 commented on your post</p>
              </div>
            </div>
            <div className={styles.notification}>
              <div className={styles.profile_img}>
                <img src="/images/google-logo.png" alt="" />
              </div>
              <div className={styles.notification_text}>
                <p>@test223 commented on your post</p>
              </div>
            </div>
            <div className={styles.notification}>
              <div className={styles.profile_img}>
                <img src="/images/google-logo.png" alt="" />
              </div>
              <div className={styles.notification_text}>
                <p>@test223 commented on your post</p>
              </div>
            </div>
            <div className={styles.notification}>
              <div className={styles.profile_img}>
                <img src="/images/google-logo.png" alt="" />
              </div>
              <div className={styles.notification_text}>
                <p>@test223 commented on your post</p>
              </div>
            </div>
            <div className={styles.notification}>
              <div className={styles.profile_img}>
                <img src="/images/google-logo.png" alt="" />
              </div>
              <div className={styles.notification_text}>
                <p>@test223 commented on your post</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
