import React from "react";

import { QuestionContainer } from "./styles";

type IQuestion = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

const Question: React.FC<IQuestion> = ({ author, content }) => {
  return (
    <QuestionContainer>
      <p>{content}</p>
      <footer></footer>
    </QuestionContainer>
  );
};

export { Question };
