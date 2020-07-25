import React, { Component } from 'react'
import "./Resume.css"
import resume from "../Assets/resume/SabahSyedResume.pdf"
export class Resume extends Component {
    render() {
        return (
            <div>
                <div className = "row">
                    <div className = "col-md-12">
                    <iframe title = "sabahSyedResume" src={resume}> Resume</iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume
