import s from "./preloader.module.scss";
import React from "react";
import preloader from "../../assets/img/preloader.gif"

export const Preloader = () =>{
  return <img className={s.preloader} src={preloader} alt="loading"/>
}