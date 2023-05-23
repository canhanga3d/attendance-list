import style from './style.module.scss';
export type CardProps = {
  name: string;
  time: string;
  id?: string;
};
export function Card({ name, time }: CardProps) {
  return (
    <div className={style.card}>
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
}
