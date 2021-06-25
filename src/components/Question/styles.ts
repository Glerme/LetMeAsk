import styled from "styled-components";

export const QuestionContainer = styled.section`
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  padding: 24px;

  margin-top: 1rem;

  & + div {
    margin-top: 18px;
  }

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      margin-top: 24px;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: #737380;
        font-size: 14px;
      }
      /* 
      & > button {
        border: 0;
        background-color: transparent;
        cursor: pointer;

        display: flex;
        align-items: flex-end;
        color: #737380;
      } */
    }
  }
`;
