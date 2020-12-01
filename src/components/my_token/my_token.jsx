import React from "react";
import styles from "./my_token.module.css";

const MyToken = () => {
  return(
    <>
    <h3>토큰 전송</h3>
    <form className={styles.form}>
      <div className={styles.inputbox}>
      <b className={styles.b}>보낼 토큰</b>
      <input className={styles.input} type="text"/>
      <b>cbt</b>
      </div>
      <div className={styles.inputbox}>
      <b className={styles.b}>보낼 지갑 주소</b>
      <input className={styles.input} type="text"/>
      <button>보내기</button>
      </div>
    </form>
    </>
  )
}

export default MyToken;