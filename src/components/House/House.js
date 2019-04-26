import React, {Component} from 'react'
import './House.css'

export default class House extends Component{
    render(){
        return(
            <div className='house'>
                <div>
                    <div>
                        Property Name: {this.props.name}
                    </div>
                    <div>
                        Address: {this.props.address}
                    </div>
                    <div>
                        City: {this.props.city}
                    </div>
                    <div>
                        State: {this.props.state}
                    </div>
                    <div>
                        Zip Code: {this.props.zip}
                    </div>
                    <div>
                        <img src={this.props.img} alt='undefined url'/>
                    </div>
                    <div>
                        Monthly Mortgage: {this.props.mortgage}
                    </div>
                    <div>
                        Desired Rent: {this.props.rent}
                    </div>
                </div>
                <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
            </div>
        )
    }
}