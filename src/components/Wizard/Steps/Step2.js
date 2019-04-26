import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {STEP2} from '../../../store'

export default class Step2 extends Component{
    constructor(){
        super()

        const reduxState = store.getState()

        this.state = {
            img: reduxState.img
        }

        this.changeState = this.changeState.bind(this)
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState()

            this.setState({
                img: reduxState.img
            })
        })
    }

    changeState(event){
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }

    storeDispatch = () => {
        const {img} = this.state
        store.dispatch({
            type: STEP2,
            payload: {img}
        })
    }
    
    render(){
        return(
            <div>
                <div>
                    <input name='img' onChange={this.changeState} placeholder='img url'/>
                </div>
                <Link to='/wizard/step1'>
                    <button>Previous</button>
                </Link>
                <Link to='/wizard/step3'>
                    <button onClick={this.storeDispatch}>Next</button>
                </Link>
            </div>
        )
    }
}