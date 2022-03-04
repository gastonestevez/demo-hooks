import React, { Component } from "react"

export default class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: props.initialValue,
        }
        this.sumarUno = this.sumarUno.bind(this)
        this.restarUno = this.restarUno.bind(this)
    }

    sumarUno() {
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restarUno() {
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <>
                <div>
                    <h2>Contador con Class Components</h2>
                    <p>
                        Contador con valor inicial en: {this.props.initialValue}
                    </p>
                    <div>
                        <button onClick={this.restarUno}>Restar 1</button>
                        <button onClick={this.sumarUno}>Sumar 1</button>
                        <p>Valor acutal: {this.state.contador}</p>
                    </div>
                </div>
            </>
        )
    }
}
