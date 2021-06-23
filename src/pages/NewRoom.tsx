import React, { useCallback, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";

import { PageAuth, MainContent } from "../styles/pages/auth";

import { useAuth } from "../hooks/useAuth";

const NewRoom: React.FC = () => {
  const { user } = useAuth();

  const [newRoom, setNewRoom] = useState("");

  const handleCreateRoom = useCallback((event: FormEvent) => {
    event.preventDefault();
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

          <h2>Criar uma nova Sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da Sala"
              onChange={(event) => setNewRoom(event.target.value)}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui!</Link>
          </p>
        </MainContent>
      </main>
    </PageAuth>
  );
};

export { NewRoom };
