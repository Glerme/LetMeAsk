import styled from "styled-components";

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  }

  & > aside {
    flex: 7;

    background-color: #835afd;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    @media (max-width: 800px) {
      margin-bottom: 2rem;
    }

    & > img {
      max-width: 320px;
    }

    & > strong {
      font: 700 36px "Poppins", sans-serif;
      line-height: 42px;
      margin-top: 1rem;
    }

    & > p {
      font-size: 24px;
      line-height: 24px;
      margin-top: 1rem;
      color: #f8f8f8;
    }
  }

  & > main {
    flex: 8;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
  max-width: 320px;

  text-align: center;

  @media (max-width: 800px) {
    padding-bottom: 5rem;
  }

  & > img {
    align-items: center;
  }

  & > h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: "Poppins", sans-serif;
  }

  & > div {
    display: flex;
    align-items: center;

    font-size: 14px;
    color: #a8a8b3;

    margin: 32px 0;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background-color: #a8a8b3;
      margin-right: 16px;
    }

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background-color: #a8a8b3;
      margin-left: 16px;
    }
  }

  & > form {
    & > input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background-color: #fff;
      border: 1px solid #a8a8a8;
    }

    & > button {
      margin-top: 1rem;
    }

    & > button,
    & > input {
      width: 100%;
    }
  }

  & > p {
    font-size: 14px;
    color: #737380;
    margin-top: 16px;

    & > a {
      color: #e559f9;
    }
  }
`;

export const CreateRoom = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: #ea4335;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  & > img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
