import React from "react";
import { Link } from "react-router-dom";

import googleicon from './googlelogo_color_92x30dp.png'
export default function logo(props) {
  return (
    <>
    <Link
         to={'HomeGoolgeIcon'}
         className={`${props.textsize} text-sky-700 text-center ${props.pt} ${props.mb} ${props.ml}  font-extrabold uppercase`} >
          <img className={`${props.imgW}  mx-auto ${props.imgH}`} src={googleicon} alt="f"></img>
        
    </Link>
    </>
  );
}
