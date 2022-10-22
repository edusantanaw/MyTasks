import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #0f172a;
  .header {
    padding: 1.5em 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: #111820;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
    h1 {
      font-weight: bold;
      font-size: 2em;
      text-transform: uppercase;
      letter-spacing: 0.2em;
    }

    button {
      width: 13em;
      height: 3em;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      background-color: #4f46e5;
      color: #fff;
      font-weight: 500;
      font-size: 1em;
      transition: 0.2s;
      &:hover {
        background-color: #4338ca;
      }
    }
  }
  .tasks {
    padding: 1.5em 5em;
    display: flex;
    gap: 2em;
    h2 {
      color: #fff;
      font-weight: 500;
      font-size: 1.4em;
    }

    .top {
      display: flex;
      align-items: center;
      justify-content: center;
     
    }
  }
  .task {
    background-color: #111820;
    width: 90%;
    height: 5em;
    box-shadow: 1px 1px 1px #fff;
    border-radius: 5px;
    padding: 1em;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
      background-color: #11181b;
    }
    h3 {
      font-size: 1.3em;
    }
    span{
      margin: 0;
    }
  }

  .list {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    
  }
  span {
    color: #fff;
    font-weight: 300;
    margin-left: 1.7em;
  }

  @media (max-width: 870px) {
    .header{
      padding: 1em 3em;
      h1{
        font-size: 1.8em;
        font-weight: bold;
      }   
      button{
      width: 10em;
    }
  }
    .tasks{
      padding: 2em 2em;
      flex-direction: column;
      align-items: center;
    }

    .list {
      width: 100%;
    }
  }
`;


export const Status = styled.div`

        background-color: ${props => props.color || 'blue'};
        width: 1.1em;
        height: 1.1em;
        border-radius: 50%;
        display: inline;
        margin-right: 0.5em;
      
`