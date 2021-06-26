import React from "react";
import { useHistory, useParams } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";

import { RoomCode } from "../../components/RoomCode";
import { Button } from "../../components/Button";
import { Question } from "../../components/Question";

import { useRoom } from "../../hooks/useRoom";

import { ContainerPage, Content, MainContent } from "./styles";
import { database } from "../../services/firebase";

type IParams = {
  id: string;
};

const AdminRoom: React.FC = () => {
  const params = useParams<IParams>();
  const roomId = params.id;
  const history = useHistory();
  const { questions, title } = useRoom(roomId);

  const handleEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  };

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm("Tem certeza que deseja excluir essa pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  };

  const handleAnsweredQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  };

  const handleCheckedQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  };

  return (
    <ContainerPage>
      <header>
        <Content>
          <img src={logoImg} alt="LetmeAsk" />

          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
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
            isAnswered={question.isAnswered}
            isHighlighted={question.isHighlighted}
          >
            {!question.isAnswered && (
              <>
                <button
                  type="button"
                  onClick={() => handleAnsweredQuestion(question.id)}
                >
                  <img src={checkImg} alt="Marcar pergunta como respondida" />
                </button>
                <button
                  type="button"
                  onClick={() => handleCheckedQuestion(question.id)}
                >
                  <img src={answerImg} alt="Dar destaque a pergunta" />
                </button>
              </>
            )}
            <button
              type="button"
              onClick={() => handleDeleteQuestion(question.id)}
            >
              <img src={deleteImg} alt="Remover pergunta" />
            </button>
          </Question>
        ))}
      </MainContent>
    </ContainerPage>
  );
};

export { AdminRoom };
