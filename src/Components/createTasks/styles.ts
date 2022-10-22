import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  padding-top: 5em;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
  form {
    width: 25em;
    background-color: #111827;
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 1.5em 1.2em 2em 1.2em;
    border: none;
    border-radius: 5px;
    overflow: hidden;

    label {
      font-size: 1em;
      font-weight: 500;
      color: #fff;
      padding-bottom: 5px;
    }
    input,
    textarea {
      background-color: transparent;
      border: 1px solid #fff;
      margin-bottom: 1.5em;
      height: 2.6em;
      border-radius: 5px;
      padding: 10px;
      color: #fff;
    }
    textarea {
      height: 8em;
    }
    .subtasks {
      width: 100%;
      max-height: 10em;
      overflow: auto;
      input {
        width: 100%;
        display: block;
        &:focus{
          outline: none;
          border-color: #fff;
        }
      }

      ::-webkit-scrollbar {
        background: #1d1d1d;
        border-radius: 1em;
        width: 10px;
        margin-left: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #f2f2f2;
        height: 1px;
        width: 1px;
        border-radius: 1em;
      }
    }
    button {
      width: 100%;
      height: 2.7em;
      border: none;
      margin-bottom: 1.3em;
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

   
    select{
        margin-bottom: 1em;
    }
    #error{
      margin: 0;
      color: red;
      text-align: center;
    }
}
.inputErro{
  border-color: red;
}
  
`;
