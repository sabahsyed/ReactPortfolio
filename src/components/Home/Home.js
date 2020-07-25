import React, { Component } from 'react'
import "./Home.css"
import myImage from "../Assets/images/sabahSyed.jpeg"
//import BackgroundImage from "../Background/backgroundImage.jpg"
export class Home extends Component {
    render() {
        return (
            <div>
            {/* <BackgroundImage /> */}
                    <div className = "row">
                        <div className = "col-md-6 aboutMe">
                            <h5 className="card-title animate__animated animate__lightSpeedInLeft">A little about me...</h5>
                                <p className="card-text animate__animated animate__slideInUp">I am a stay-at-home mom currently enrolled in a bootcamp at the University of Washington.
                                I do not have any professional experience but through this journey I have grown an immense 
                                passion for coding and would like to turn this into a career I always wanted to have. 
                                Feel free to look at my most recent work. 
                                </p>
                        </div>
                        <div className = "col-md-6">
                            <img className="myImage" src={myImage} alt="SabahSyed"   />
                        </div>
                    </div>
            </div>
        )
    }
}

export default Home
