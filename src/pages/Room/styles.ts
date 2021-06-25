import styled, { css } from "styled-components";

type IButtonLiked = {
  isLike: boolean;
};

export const ContainerPage = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
  }
`;

export const Content = styled.div`
  max-width: width 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    max-height: 45px;
  }

  & > div {
    display: flex;
    gap: 16px;

    & > button {
      height: 40px;
    }
  }
`;

export const MainContent = styled.main`
  max-width: 800px;
  margin: 0 auto;

  & > div {
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    & > h1 {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      color: #29292e;
    }

    & > span {
      margin-left: 1rem;
      background-color: #e559f9;
      border-radius: 9999px;
      padding: 8px 16px;
      color: #fff;
      font-size: 14px;
    }
  }

  & > form {
    textarea {
      width: 100%;
      border: 0;
      padding: 1rem;
      border-radius: 8px;
      background-color: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
    }

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;

      span {
        font-size: 14px;
        color: #737388;
        font-weight: 500;

        button {
          background-color: transparent;
          border: 0;

          color: #835afd;
          text-decoration: underline;
          font-size: 14px;

          cursor: pointer;
        }
      }
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: #29292e;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const ButtonLiked = styled.button<IButtonLiked>`
  border: 0;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  align-items: flex-end;
  color: #737380;

  gap: 8px;

  transition: filter 0.2;

  &:hover {
    filter: brightness(0.8);
  }

  ${(props) =>
    props.isLike &&
    css`
      color: #835a9d;

      svg path {
        stroke: #835a9d;
      }
    `}
`;
