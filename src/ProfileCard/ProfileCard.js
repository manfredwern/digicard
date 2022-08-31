

function ProfileCard({ user }) {

    return (
        <div className="card">

            {user && user.profilePhoto && <>
                <img src={user.profilePhoto} className="card-img-top" alt="..."></img>
            </>}
            <div className="card-body">
                <h5 className="card-title">
                    {user && user.firstName && <>{user.firstName}</>}
                    &nbsp;
                    {user && user.lastName && <>{user.lastName}</>}
                </h5>
                <p className="card-text">
                    {user && user.jobTitle && <>{user.jobTitle}</>}
                </p>
                <p className="card-text">
                    {user && user.additionalInfo && <>{user.additionalInfo}</>}</p>

            </div>

            {user && user.facebook && <div><p>facebook: {user.facebook}</p></div>}
            {user && user.instagram && <div><p>instagram: {user.instagram}</p></div>}
            {user && user.linkedIn && <div><p>linkedIn: {user.linkedIn}</p></div>}
            {user && user.mobile && <div><p>mobile: {user.mobile}</p></div>}

        </div>
    )

}

export default ProfileCard