import React, { ReactNode } from "react";

import { QuestionContainer, ButtonsContainer } from "./styles";

type IQuestion = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  hasLiked?: boolean;
  isAnswered?: boolean;
  isHighlighted?: boolean;
  children?: ReactNode;
};

const Question: React.FC<IQuestion> = ({
  author,
  content,
  hasLiked,
  isAnswered = false,
  isHighlighted = false,
  children,
}) => {
  console.log(children);

  return (
    <QuestionContainer isAnswered={isAnswered} isHighlighted={isHighlighted}>
      <p>{content}</p>
      <footer>
        <div>
          <img src={author.avatar} alt={author.name} />

          <span>{author.name}</span>
        </div>
        <ButtonsContainer hasLiked={hasLiked}>{children}</ButtonsContainer>
      </footer>
    </QuestionContainer>
  );
};

export { Question };
