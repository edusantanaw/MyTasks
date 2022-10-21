import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 5em;

  .edit {
    width: 25em;
    max-height: 90%;
    padding: 1.5em 1.2em 2em 1.2em;
    border: none;
    border-radius: 5px;
    background-color: #111827;
    color: #fff;
    h2 {
      font-size: 2em;
      font-weight: 400;
      padding-bottom: 0.6em;
    }
    p {
      font-size: 1.2em;
      font-weight: 200;
      padding-bottom: 1em;
      color: #d2d2d2;
    }
    span {
      margin: 0;
      font-size: 1.1em;
      font-weight: 400;
    }
    li {
      list-style: none;
      background-color: #111820;
      margin: 1em 0 1em 0;
      padding-left: 1em;
      border-radius: 5px;
      input {
        color: blue;
        margin: 1em 0.5em 1em 0;
      }
      span {
        font-size: 1em;
        font-weight: 300;
      }
    }
    .status {
      position: relative;
      span {
        font-weight: 300;
      }
      input {
        margin-top: 0.4em;
        width: 100%;
        height: 2.4em;
        font-size: 1.1em;
        cursor: pointer;
        padding: 1em;
        border-radius: 5px;
        border: 1px solid #fff;
        background-color: transparent;
        transition: 0.2s;
        &:focus {
          outline: none;
        }
        &:hover{
            border-color: violet;
            color: violet;
        }
       
        &::placeholder {
          color: #fff;
          font-weight: 300;
          letter-spacing: 2px;
        
        }
      }
      .dropdown {
        margin-top: 0.2em;
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color:  #111827;
        border: 1px solid #fff;
        width: 100%;
        padding: 1em;
        gap: 0.5em;
        border-radius: 5px;
        span {
          cursor: pointer;

          &:hover{ 
            color: violet;
          }
        }
      }
    }
    button {
      width: 100%;
      height: 2.7em;
      border: none;
      margin-top: 2em;
      font-size: 1.02em;
      font-weight: 500;
      color: #fff;
      background-color: transparent;
      border: 1px solid #fff;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
      &:hover{
        background-color: #fff;
        color:  #111827;
      }
    }
  }
`;
