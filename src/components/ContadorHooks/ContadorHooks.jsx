import React, { useRef } from "react"
import { useContador } from './useContador'

const ContadorHooks = ({ initialValue }) => {
    const [contador, setContador] = useContador(initialValue)

    const buttonRef = useRef(null)

    const restarUno = () => {
        buttonRef.current.style.backgroundColor = 'red'
        setContador(contador-1)
    }

    return (
        <>
            <div>
                <h2>Contador con Class Components</h2>
                <p>Contador con valor inicial en: {initialValue}</p>
                <div>
                    <button ref={buttonRef} onClick={() => restarUno()}>Restar 1</button>
                    <button onClick={() => setContador(contador + 1)}>Sumar 1</button>
                    <p>Valor acutal: {contador}</p>
                </div>
            </div>
        </>
    )
}

export default ContadorHooks
