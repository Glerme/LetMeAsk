import React, { ReactNode } from "react";

import { QuestionContainer } from "./styles";

type IQuestion = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
};

const Question: React.FC<IQuestion> = ({ author, content, children }) => {
  return (
    <QuestionContainer>
      <p>{content}</p>
      <footer>
        <div>
          <img src={author.avatar} alt={author.name} />

          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </QuestionContainer>
  );
};

export { Question };
