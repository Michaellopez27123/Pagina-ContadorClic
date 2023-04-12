import { Button } from './Button';
import React from 'react'
import { useState } from 'react';

const Counter = () => {

    let [numClick, setClicks] = useState(0); 

    const increase= () => {
      setClicks(numClick ++);
    } 
    const ResetClick= () => {
      setClicks(0);
    }
  return (
    <div className='contenedor'>
    
    <Button 
    texto='Iniciar'
    ButtonClick={false}
    numClick={numClick} />
    
    <Button 
      texto='Click'
      ButtonClick={true}
      increase={increase} />

    <Button 
      texto='Reiniciar'
      ButtonClick={true}
      increase={ResetClick}/>

      <p></p>  
      <h2>¿Qué es el contador de clics?</h2>
        <p>El contador de clics es una herramienta online gratuita que puedes utilizar para contar hacia arriba, contar hacia abajo o para calcular un número. A diferencia de cualquier contador automático, éste es manual y usted mismo puede establecer el valor deseado. Para ello, haga clic en el signo más para aumentar el contador o en el signo menos para disminuirlo. El valor se ajustará automáticamente.</p>

      <h2>Características específicas del contador</h2>
        <p>Puede incrementar y disminuir el contador de números como desee, el valor mostrado no está limitado. También incluye la posibilidad de obtener un valor menor que cero, por lo que nos aseguramos de que los números negativos se puedan utilizar en caso de ser necesario. Además, puede restablecer el contador para comenzar desde cero, haciendo clic en el icono situado en el centro.

          El contador clics es compatible con ordenadores, tabletas y smartphones. Es completamente gratuito y se puede utilizar sin límites. Con un simple clic, se puede pasar de la versión "oscura" a la "clara" y viceversa, haciendo clic en el icono designado para ello.</p>
 
 </div>
  )
}

export default Counter