import styled, { css } from "styled-components";

interface IButtonContainer {
  isOutlined: boolean;
}

export const ButtonContainer = styled.button<IButtonContainer>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: #835afd;
  color: #fff;
  padding: 0 32px;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  ${(props) =>
    props.isOutlined &&
    css`
      background-color: #fff;
      border: 1px solid #835afd;
      color: #835afd;
    `}

  img {
    margin-right: 8px;
  }

  &:not(:disabled)&:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
