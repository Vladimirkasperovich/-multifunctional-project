import React from "react";
import s from "./text-field.module.scss";
// interface Props {
//
// }

export const TextField: React.FC = () => {
  return <input type="text" className={s.input} />;
};
