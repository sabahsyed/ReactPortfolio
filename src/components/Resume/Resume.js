import React, { Component } from 'react'
import "./Resume.css"
import resume from "../Assets/resume/SabahSyedResume.pdf"
export class Resume extends Component {
    render() {
        return (
            <div>
               <iframe title = "sabahSyedResume" src={resume}> Resume</iframe>
            </div>
        )
    }
}

export default Resume
