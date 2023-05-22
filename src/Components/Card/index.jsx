import style from './style.module.scss';
export function Card({ name, time }) {
  return (
    <div className={style.card}>
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
}
