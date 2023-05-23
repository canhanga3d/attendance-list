import React from 'react';
import style from './style.module.scss';
import { ProfileResponse } from '../../Pages/Home/Home';
export function Header({ avatar_url, name }:ProfileResponse) {
  return (
    <>
      <header className={style.header}>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{name}</strong>
          <img src={avatar_url} alt="Foto de perfil" />
        </div>
      </header>
    </>
  );
}
