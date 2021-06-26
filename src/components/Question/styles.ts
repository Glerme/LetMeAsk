import styled, { css } from "styled-components";

interface ButtonsProps {
  hasLiked?: boolean;
}

interface IQuestionContainer {
  isAnswered: boolean;
  isHighlighted: boolean;
}

export const QuestionContainer = styled.section<IQuestionContainer>`
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  padding: 24px;

  margin-top: 1rem;

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background-color: #f4f0ff;
      border: 1px solid #835afd;
    `}

  ${({ isAnswered }) =>
    isAnswered &&
    css`
      background-color: #dbdcdd;
      border: 1px solid #835afd;
    `}

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

      & > button {
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
      }
    }
  }
`;

export const ButtonsContainer = styled.div<ButtonsProps>`
  display: flex;
  gap: 16px;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    color: #737380;

    &:hover {
      color: #835afd;
    }

    &.like-button {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      transition: filter 0.2s;

      ${({ hasLiked }) =>
        hasLiked &&
        css`
          color: #835afd;
        `}
    }

    &.delete-button:hover {
      color: #e73f5d;
    }
  }
`;
