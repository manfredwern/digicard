import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './ProfileCard.css'

function ProfileCard({ user }) {

    return (
        <div className="card text-center">
            <div className='card-header p-0 d-flex'>
                <div className='photo-container'>
                    <div className='photo-circle'>
                        {user && user.profilePhoto && <>
                            <img src={user.profilePhoto} className="profile-photo card-img-top" alt="profile"></img>
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
            
                <div className='p-4'>
                    {user && user.facebook &&
                        <p className='text-start'>
                            <FontAwesomeIcon icon={faFacebook} /> {user.facebook}
                        </p>}
                    {user && user.instagram && 
                        <p className='text-start'>
                            <FontAwesomeIcon icon={faInstagram} /> {user.instagram}
                        </p>}
                    {user && user.linkedIn && 
                        <p className='text-start'>
                            <FontAwesomeIcon icon={faLinkedin} /> {user.linkedIn}
                        </p>}
                    {user && user.mobile && 
                        <p className='text-start'>
                            <FontAwesomeIcon icon={faMobile} /> {user.mobile}
                        </p>}
                </div>
            </div>
        </div>
    )

}

export default ProfileCard