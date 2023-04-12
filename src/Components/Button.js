import React from "react";
import './Button.css'

const Button = ({numClick, texto, ButtonClick, increase, }) => {
  return (
    <div>

      <button
        className={ButtonClick ? "boton-clic" : "boton-reiniciar"}
        onClick={increase}
      >
        {texto}
      </button>

      <div className="contador">{numClick}</div>

    </div>
  );
};

export {Button};