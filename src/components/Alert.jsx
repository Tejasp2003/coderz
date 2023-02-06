import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

function Alert({ msg, removeError }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeError();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [removeError]);
  return  <MSG>{msg}</MSG>;

//   
}

const MSG = styled.p`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 900;
    color: #000000;
    border-radius: 10px;
    background-color: red;
    padding: 7px;
    width: 195px;
    text-align: center;
    font-family: verdana;
    word-break: break-word;

    /* background-color:black; */
  }
`;

export default Alert;
