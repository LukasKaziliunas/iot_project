import React from 'react'
import Border from './Border'
import './mystyles.css'

class Pannel extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            deviceState: ""
        }
    }

    componentDidMount() {

        fetch('http://192.168.1.15:85/?' +  this.props.device)
        .then(response => response.json())
        .then(data => {
            if(data.state === 1){
                this.setState( {
                deviceState: "įjungta"
                })
            }else{
                this.setState( {
                deviceState: "išjungta"
                })
            }
            
        })
        .catch(err => { console.log(err) })


        
    }

    turnOn = () => {

        const body = { [this.props.device]: 1 }

        fetch('http://192.168.1.15:85', {
            method: 'POST',
            body : JSON.stringify(body),
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(() => { 
            this.setState( {deviceState: "įjungta"} ) 
        })
        .catch(err => { console.log(err) });

    }

    turnOff = () => {
        const body = { [this.props.device]: 0 }
        fetch('http://192.168.1.15:85', {
            method: 'POST',
            mode: 'no-cors',
            body : JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(() => {
            this.setState( {
            deviceState: "išjungta"
            })
        })
        .catch(err => console.log(err))
    }

    render(){
        return (
            <Border>
                <div>
                    <h2>{this.props.name}</h2>
                    <h3>būsena : {this.state.deviceState}</h3>
                    <input
                    name="btnOn"
                    type="button"
                    value="Turn On"
                    onClick={this.turnOn}
                    />
                    <input
                    name="btnOn"
                    type="button"
                    value="Turn  Off"
                    onClick={this.turnOff}
                    />
                </div>
            </Border>
       )
    }
}

export default Pannel