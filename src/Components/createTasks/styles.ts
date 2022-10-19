import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  padding-top: 5em;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
  form {
    width: 25em;
    height: 35em;
    background-color: #111827;
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 1.5em 1.2em;
    border: none;
    border-radius: 5px;
    overflow:hidden;
    label{
        font-size:1em;
        font-weight :300;
        color: #fff;
        padding-bottom:3px;
    }
    input, textarea{
        background-color: transparent;
        border:  1px solid #94a3b8;
        margin-bottom: 1.5em;
        height: 2.5em;
        border-radius: 4px;
        padding: 10px;
        color:#fff;
    }
    textarea{
        height: 8em;
    }
    .subtasks{
        width:100%;
        height:6.8em;
        overflow-y: scroll;
        scrollbar-arrow-color: red;
        input{
            width: 100%;
            display: block;
        }
    }

    button{
        height: 2.7em;
        border:none;
        border-radius: 15px;
    }
  }
`;
