import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'

export default class Wizard extends Component{
    render(){
        return(
            <div>
                <Route component={Step1} path='/wizard/step1'/>
                <Route component={Step2} path='/wizard/step2'/>
                <Route component={Step3} path='/wizard/step3'/>
            </div>
        )
    }
}