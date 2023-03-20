import React from 'react'
import profileImage from './image/profile-pic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Profile() {
    return (
        <div class="profile-container">
            <div class="myProf">
                <div class="circleOne animated tada">
                    <div class="circleTwo">
                        <div class="circleTree">
                            <img src={profileImage} class="image" />
                        </div>
                    </div>
                </div>
                <a href="/" class="btnDisplay animated rubberBand">Back To Products</a>
            </div>

            <div className='socialLinks bounceIn'>
                <h1 className='socialProfiles'>My Social Profiles :</h1>
                <ul className='mySocials'>
                    <li><a href="https://github.com/BoujidStack"><FontAwesomeIcon icon={faGithub} /> My GitHub Profile</a></li>
                    <li><a href="https://www.linkedin.com/in/hamza-boujid/"><FontAwesomeIcon icon={faLinkedin} /> My LinkedIn Profile</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile