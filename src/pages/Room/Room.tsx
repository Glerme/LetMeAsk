import React, { FormEvent, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";

import { RoomCode } from "../../components/RoomCode";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/useAuth";

import { database } from "../../services/firebase";

import { ContainerPage, Content, MainContent, UserInfo } from "./styles";

type IParams = {
  id: string;
};

type IFirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  }
>;

type IQuestion = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

const Room: React.FC = () => {
  const params = useParams<IParams>();
  const roomId = params.id;
  const { user } = useAuth();

  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    //pega os objetos do firebase e transforma em array
    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: IFirebaseQuestions =
        databaseRoom?.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
          };
        }
      );

      setQuestions(parsedQuestions);
      setTitle(databaseRoom.title);
    });
  }, [roomId]);

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
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} Pergunta(s )</span>}
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

        {JSON.stringify(questions)}
      </MainContent>
    </ContainerPage>
  );
};

export { Room };
