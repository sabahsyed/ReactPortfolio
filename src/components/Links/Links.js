import React, { Component } from 'react'
import "./Links.css"
export class Links extends Component {
    render() {
        return (
            <div>
                <div className = "row">
                    <div className = "col-md-12">
                        <div className="card-body links">
                            <h5 className = "animate__animated animate__lightSpeedInLeft">Github Profile :<a href="https://github.com/sabahsyed">SabahSyedGitHub</a></h5>
                            <h5 className = "animate__animated animate__lightSpeedInRight">LinkedIn Profile :<a href="https://www.linkedin.com/in/sabah-syed-89a07344/">SabahSyedLinkedIn</a></h5>
                            <h5 className = "animate__animated animate__lightSpeedInLeft"> Contact me :<a href="mailto:sabisyed@gmail.com">Click Here To Email Me</a></h5>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Links
