import React from "react";
import { useCallback } from "react";

import copyImg from "../../assets/images/copy.svg";

import { RoomCodeContainer } from "./styles";

interface RoomCodeProps {
  code: string;
}

const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  const copyRoomCode = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, []);

  return (
    <RoomCodeContainer onClick={copyRoomCode}>
      <div>
        <img src={copyImg} alt="Copiar" />
      </div>
      <span>Sala {code}</span>
    </RoomCodeContainer>
  );
};

export { RoomCode };
