import React, { Component } from 'react'
import "./Footer.css"
export class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <h6 className= "footer">© Sabah Syed- UW BootCamp 2020
                    <a  className ="ref" href  = "https://github.com/sabahsyed">Github</a>
                    <a className ="ref" href  = "https://www.linkedin.com/in/sabah-syed-89a07344/">LinkedIn</a>
                    </h6>
                </div>
            </footer>
        )
    }
}

export default Footer
