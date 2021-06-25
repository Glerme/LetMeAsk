import React from "react";
import { useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";

import { RoomCode } from "../../components/RoomCode";
import { Button } from "../../components/Button";
import { Question } from "../../components/Question";

import { useRoom } from "../../hooks/useRoom";

import { ContainerPage, Content, MainContent } from "../Room/styles";

type IParams = {
  id: string;
};

const AdminRoom: React.FC = () => {
  const params = useParams<IParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  return (
    <ContainerPage>
      <header>
        <Content>
          <img src={logoImg} alt="LetmeAsk" />

          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </Content>
      </header>

      <MainContent>
        <div>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} Pergunta(s )</span>}
        </div>

        {questions.map((question, index) => (
          <Question
            content={question.content}
            author={question.author}
            key={index}
          />
        ))}
      </MainContent>
    </ContainerPage>
  );
};

export { AdminRoom };
