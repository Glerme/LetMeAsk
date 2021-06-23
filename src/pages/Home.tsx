import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import { PageAuth, MainContent, CreateRoom } from "../styles/pages/auth";
import { useAuth } from "../hooks/useAuth";

const Home: React.FC = () => {
  const history = useHistory();
  const { signInGoogle, user } = useAuth();

  const handleCreateRoom = useCallback(async () => {
    if (!user) {
      await signInGoogle();
    }

    history.push("/rooms/new");
  }, []);

  return (
    <PageAuth>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real.</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="LetMeAsk" />
          <CreateRoom onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </CreateRoom>
          <div>Ou entre em uma sala</div>

          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entre em uma sala</Button>
          </form>
        </MainContent>
      </main>
    </PageAuth>
  );
};

export { Home };
