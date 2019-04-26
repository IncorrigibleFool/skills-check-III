import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            houses: []
        }

        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount(){ 
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        }).catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.houses !== this.state.houses){
            axios.get('/api/houses').then(res => {
                this.setState({
                    houses: res.data
                })
            }).catch(err => console.log(err))
        }
    }

    deleteHouse(id){
        axios.delete(`/api/houses/${id}`).then(res => {
            res.status(200)
        }).catch(err => console.log(err))
    }
    
    render(){
        const {houses} = this.state
        return(
            <div>
                Dashboard
                {houses.map(house => {
                    return(
                        <House
                        key={house.id}
                        name={house.name}
                        address={house.address}
                        city={house.city}
                        state={house.state}
                        zip={house.zip}
                        img={house.img}
                        mortgage={house.mortgage}
                        rent={house.rent}
                        id={house.id}
                        delete={this.deleteHouse}
                        />
                    )
                })}
                <div>
                    <Link to={'/wizard/step1'}>
                        <button>Add New Property</button>
                    </Link>
                </div>
            </div>
        )
    }
}