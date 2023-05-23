import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card } from '../../Components/Card';
import style from './style.module.scss';
import { Header } from '../../Components/Header';

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);
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
  useEffect(() => {
   async function fetchData(){
    const response = await  fetch('https://api.github.com/users/canhanga3d')
    const data = await response.json();
    const {name, avatar_url} = data;
    setUser({
      name,
      avatar_url
    })
   }
  fetchData();
  }, []);
  return (
    <div className={style.container}>
      {user && <Header avatar={user.avatar_url} name={user.name} />}
      <main>
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
    </div>
  );
}
