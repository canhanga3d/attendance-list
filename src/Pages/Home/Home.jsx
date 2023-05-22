import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card } from '../../Components/Card';
import style from './style.module.scss';

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  function handleStudents(e) {
    e.preventDefault();

    const newStudents = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-AO', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      id: uuidv4(),
    };
    setStudents((prevState) => [...prevState, newStudents]);
    e.target.reset();
  }

  return (
    <main className={style.container}>
      <h1>Lista de Presença</h1>
      <form onSubmit={handleStudents}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o nome..."
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {students.map(({ name, time, id }) => (
        <Card name={name} time={time} key={id} />
      ))}
    </main>
  );
}
