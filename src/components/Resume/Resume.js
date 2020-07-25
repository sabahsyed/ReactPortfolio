import React, { Component } from 'react'
import "./Resume.css"
import resume from "../Assets/resume/SabahSyedResume.pdf"
export class Resume extends Component {
    render() {
        return (
            <div>
               <a class="nav-link active animate__animated animate__backInRight" href={resume}>Resume</a> 
            </div>
        )
    }
}

export default Resume
