import react, { useState } from 'react'
import ActionItem from './actionItem'
import ButtonItem from './buttonItem'

function Form({ user, handleChange, updateProfile }) {

    const [actionBtns, setActionBtns] = useState({
        facebookBtn: false,
        instagramBtn: false,
        linkedInBtn: false,
        mobileBtn: false
    })

    function handleAction(e) {
        e.preventDefault();
        setActionBtns(actionBtns => actionBtns = {
            ...actionBtns,
            [e.target.name]: !actionBtns[e.target.name]
        })
    }

    function handleRemoveAction(buttonName) {
        let newUser = { ...user }
        if (newUser[buttonName]) {
            // update profile whenever an action is removed
            delete newUser[buttonName]
            updateProfile(newUser)
        }
        const actionBtnName = buttonName + 'Btn';
        setActionBtns(actionBtns => actionBtns = {
            ...actionBtns,
            [actionBtnName]: !actionBtns[actionBtnName]
        })
    }

    function handleInputFile(e) {
        let fileData = new FileReader();
        fileData.onloadend = handleChange
        fileData.readAsDataURL(e);
    }


    function handleDeletePhoto() {
        console.log(user.profilePhoto)
        let newUser = { ...user }
        if (newUser && newUser.profilePhoto) {
            delete newUser.profilePhoto
            updateProfile(newUser)
        }
    }

    return (
        <div>
            <div className="input-group mb-3">
                <label htmlFor="file" className='input-group-text'>Upload profile photo</label>
                <input
                    type="file"
                    className='form-control'
                    id="file"
                    data-testid="photoUpload"
                    name='profile-photo'
                    onChange={e =>
                        handleInputFile(e.target.files[0])}
                    accept="image/png, image/jpg, image/jpeg"

                />
                {user?.profilePhoto && <button type='button' className='btn btn-primary' data-testid="removePhoto" onClick={() => handleDeletePhoto()}>remove profile photo</button>}

            </div>
            {/* <button type='button' data-testid="removePhoto" onClick={() => handleDeletePhoto()} hidden>remove profile photo</button> */}
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className='form-control'
                    name='firstName'
                    id='firstName'
                    placeholder="John"
                    onChange={handleChange}
                >
                </input>
                <label htmlFor='firstName' className=''>First Name</label>

            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className='form-control'
                    name='lastName'
                    id='lastName'
                    placeholder='Doe'
                    onChange={handleChange}>
                </input>
                <label htmlFor='lastName' className=''>Last Name</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="text"
                    className='form-control'
                    name='jobTitle'
                    id='jobTitle'
                    placeholder='Frontend Developer'
                    onChange={handleChange}>
                </input>
                <label htmlFor='jobTitle' className=''>Job Title</label>
            </div>

            <div className="form-floating mb-4">
                <textarea
                    name='additionalInfo'
                    id='additionalInfo'
                    placeholder='Some description'
                    className='form-control'
                    onChange={handleChange}></textarea>
                <label htmlFor='additionalInfo' className='form-label'>Additional Information</label>
            </div>


            {actionBtns && actionBtns.facebookBtn && (
                <>
                    <ActionItem
                        name="facebook"
                        handleAction={handleChange}
                        handleRemoveAction={handleRemoveAction}></ActionItem>
                </>
            )}
            {actionBtns && actionBtns.instagramBtn && (
                <>
                    <ActionItem
                        name="instagram"
                        handleAction={handleChange}
                        handleRemoveAction={handleRemoveAction}>
                    </ActionItem>
                </>
            )}
            {actionBtns && actionBtns.linkedInBtn && (
                <>
                    <ActionItem
                        name="linkedIn"
                        handleAction={handleChange}
                        handleRemoveAction={handleRemoveAction}>
                    </ActionItem>
                </>
            )}
            {actionBtns && actionBtns.mobileBtn && (
                <>
                    <ActionItem
                        name="mobile"
                        handleAction={handleChange}
                        handleRemoveAction={handleRemoveAction}>
                    </ActionItem>
                </>
            )}

            <br></br>
            <br></br>
            <br></br>


            {
                actionBtns && !actionBtns.facebookBtn &&
                (
                    <ButtonItem
                        name='facebook'
                        handleAction={handleAction}></ButtonItem>
                )
            }
            {
                actionBtns && !actionBtns.instagramBtn &&
                (
                    <ButtonItem
                        name='instagram'
                        handleAction={handleAction}></ButtonItem>
                )
            }
            {
                actionBtns && !actionBtns.linkedInBtn &&
                (
                    <ButtonItem
                        name='linkedIn'
                        handleAction={handleAction}></ButtonItem>
                )
            }
            {
                actionBtns && !actionBtns.mobileBtn &&
                (
                    <ButtonItem
                        name='mobile'
                        handleAction={handleAction}></ButtonItem>
                )
            }

            <pre>{JSON.stringify(actionBtns)}</pre>

        </div>
    )
}



export default Form;