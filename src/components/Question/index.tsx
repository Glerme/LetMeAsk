import React from "react";

import { QuestionContainer, UserInfoContainer } from "./styles";

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
      <footer>
        <UserInfoContainer>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
          <div></div>
        </UserInfoContainer>
      </footer>
    </QuestionContainer>
  );
};

export { Question };
