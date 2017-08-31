import React, { Component } from 'react';
import 'css/pages/home'


export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: {}
        }
    }

    componentDidMount() {
        const { text, show } = this.refs
        Object.defineProperty(this.state.obj, 'a', {
            set: (newVal) => {
                text.value = newVal
                show.innerHTML = newVal
            },
            get: () => {
                console.log('fuck')
            }
        })

        document.addEventListener('keyup', (e) => {
            this.state.obj.a = e.target.value
        })

        setTimeout(() => {
            console.log(this.state.obj.a)
        }, 1000)
    }
    render() {
        return (
            <div>
                <input ref="text" type='text' />
                <div ref="show"></div>
            </div>
        )
    }

    
}