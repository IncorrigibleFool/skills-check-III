import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Wizard extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }

        this.changeState = this.changeState.bind(this)
        this.postHouse = this.postHouse.bind(this)
    }

    changeState(event){
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }

    postHouse(){
        const {name, address, city, state, zipcode} = this.state
        axios.post('/api/houses', {name, address, city, state, zip: zipcode}).then(res => {
            res.status(200)
        }).catch(err => console.log(err))
    }
    
    render(){
        return(
            <div>
                Wizard
                <div>
                    <input name='name' onChange={this.changeState} placeholder='Name'/>
                </div>
                <div>
                    <input name='address' onChange={this.changeState} placeholder='Address'/>
                </div>
                <div>
                    <input name='city' onChange={this.changeState} placeholder='City'/>
                </div>
                <div>
                    <input name='state' onChange={this.changeState} placeholder='State'/>
                </div>
                <div>
                    <input name='zipcode' onChange={this.changeState} placeholder='Zipcode'/>
                </div>
                <Link to={'/'}>
                    <button onClick={this.postHouse}>Complete</button>
                </Link>
                <Link to={'/'}>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}