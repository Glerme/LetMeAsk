import React, { FormEvent } from "react";
import { useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";

import { RoomCode } from "../../components/RoomCode";
import { Button } from "../../components/Button";

import { ContainerPage, Content, MainContent, UserInfo } from "./styles";
import { useCallback } from "react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";

type IParams = {
  id: string;
};

const Room: React.FC = () => {
  const params = useParams<IParams>();
  const roomId = params.id;
  const { user } = useAuth();

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
          <RoomCode code={roomId} />
        </Content>
      </header>

      <MainContent>
        <div>
          <h1>Sala React</h1>
          <span>4 Perguntas</span>
        </div>

        <form onSubmit={handleCreateQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(e) => setNewQuestion(e.target.value)}
            value={newQuestion}
          />

          <div>
            {user ? (
              <UserInfo>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </UserInfo>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login.</button>
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>
      </MainContent>
    </ContainerPage>
  );
};

export { Room };
