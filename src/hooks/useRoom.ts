import { useEffect, useState } from "react";
import { database } from "../services/firebase";

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

export const useRoom = (roomId: string) => {
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

  return { questions, title };
};
