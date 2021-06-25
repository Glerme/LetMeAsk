import React, { FormEvent, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";

import { RoomCode } from "../../components/RoomCode";
import { Button } from "../../components/Button";
import { Question } from "../../components/Question";

import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";

import { database } from "../../services/firebase";

import { ContainerPage, Content, MainContent, UserInfo } from "../Room/styles";

type IParams = {
  id: string;
};

const AdminRoom: React.FC = () => {
  const params = useParams<IParams>();
  const roomId = params.id;
  const { user } = useAuth();
  const { questions, title } = useRoom(roomId);

  const [newQuestion, setNewQuestion] = useState("");

  const handleCreateQuestion = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (newQuestion.trim() === "") {
        return;
      }

      if (!user) {
        throw new Error("You must be logged in");
      }

      const question = {
        content: newQuestion,
        author: {
          name: user?.name,
          avatar: user?.avatar,
        },
        isHighlighted: false,
        isAnswered: false,
      };

      await database.ref(`rooms/${roomId}/questions`).push(question);

      setNewQuestion("");
    },
    [user, newQuestion, roomId]
  );

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
