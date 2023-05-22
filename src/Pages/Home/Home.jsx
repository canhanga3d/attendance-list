import style from './style.module.scss';
export function Home() {
  return (
    <section className={style.container}>
      <h1>Lista de presença</h1>
      <input type="text" name="" id="" placeholder="Digite o nome" />
      <button type="submit">Adicionar</button>
    </section>
  );
}
