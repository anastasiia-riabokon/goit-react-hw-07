import css from "./Notification.module.css";

export const Notification = ({text}) => {
  return <p className={css.notice}>{text}</p>;
};
export default Notification;
