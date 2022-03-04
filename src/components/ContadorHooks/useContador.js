import { useEffect, useState } from "react"

export const useContador = (initialValue) => {
    const [contador, setContador] = useState(initialValue)

    useEffect(() => {
        //ComponentDidMount
        console.log('useEffect en acción (componentDidMount)')
        //ComponentWillUnmount
        return () => {
            console.log('Componente Contador Desmontado. (ComponentWillUnmount)')
        }
    }, [])

    return [contador, setContador]
}