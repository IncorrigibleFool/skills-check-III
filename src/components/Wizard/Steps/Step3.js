import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {STEP3} from '../../../store'
import axios from 'axios'

export default class Step3 extends Component{
    constructor(){
        super()

        const reduxState = store.getState()

        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            img: reduxState.img,
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }

        this.changeState = this.changeState.bind(this)
        this.postHouse = this.postHouse.bind(this)
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip,
                img: reduxState.img,
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        })
    }

    changeState(event){
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }
    
    postHouse(){
        const {name, address, city, state, zip, img, mortgage, rent} = this.state

        store.dispatch({
            type: STEP3,
            payload: {mortgage, rent}
        })

        axios.post('/api/houses', {name, address, city, state, zip, img, mortgage, rent}).then(res => {
            res.status(200)
        }).catch(err => console.log(err))
    }
    
    render(){
        return(
            <div>
                <div>
                <input name='mortgage' onChange={this.changeState} placeholder='Mortgage'/>
                </div>
                <div>
                <input name='rent' onChange={this.changeState} placeholder='Rent'/>
                </div>
                <Link to='/wizard/step2'>
                    <button>Previous</button>
                </Link>
                <Link to={'/'}>
                    <button onClick={this.postHouse}>Complete</button>
                </Link>
            </div>
        )
    }
}