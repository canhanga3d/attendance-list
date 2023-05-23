import React from 'react';
import style from './style.module.scss';
export function Header({avatar, name}) {
  return (
    <>
      <header className={style.header}>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{name}</strong>
          <img src={avatar} alt="Foto de perfil" />
        </div>
      </header>
    </>
  );
}
