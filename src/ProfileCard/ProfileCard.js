import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './ProfileCard.css'

function ProfileCard({ user }) {

    return (
        <div className="card text-center">
            <div className='card-header p-0 d-flex'>
                <div className='photo-container'>
                    <div className='photo-circle'>
                        {user && user.profilePhoto && <>
                            <img src={user.profilePhoto} className="profile-photo card-img-top" alt="profile photo"></img>
                        </>}
                    </div>
                </div>
            </div>
            <div className="card-body pt-5">
                <h5 className="card-title mt-5">
                    {user && user.firstName && <>{user.firstName}</>}
                    &nbsp;
                    {user && user.lastName && <>{user.lastName}</>}
                </h5>
                <p className="card-text">
                    {user && user.jobTitle && <>{user.jobTitle}</>}
                </p>
                <p className="card-text">
                    {user && user.additionalInfo && <>{user.additionalInfo}</>}</p>

                {user && user.facebook && <div><p><FontAwesomeIcon icon={faFacebook} /> {user.facebook}</p></div>}
                {user && user.instagram && <div><p><FontAwesomeIcon icon={faInstagram} /> {user.instagram}</p></div>}
                {user && user.linkedIn && <div><p> <FontAwesomeIcon icon={faLinkedin} /> {user.linkedIn}</p></div>}
                {user && user.mobile && <div><p>            <FontAwesomeIcon icon={faMobile} />
                    {user.mobile}</p></div>}
            </div>
{/* 
            <FontAwesomeIcon icon={faPhone} />
            <FontAwesomeIcon icon={faEnvelope} /> */}
            
            
           

        </div>
    )

}

export default ProfileCard