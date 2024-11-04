import React from "react";
import s from "./header.module.scss";
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({}) => {
  return (
    <header className={s.main}>
      <div></div>
    </header>
  );
};
