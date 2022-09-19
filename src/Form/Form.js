import { useState } from 'react'
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
        let newUserInput = { ...user }
        if (newUserInput[buttonName]) {
            delete newUserInput[buttonName]
            updateProfile(newUserInput)
        }
        const actionBtnName = buttonName + 'Btn';
        setActionBtns(actionBtns => actionBtns = {
            ...actionBtns,
            [actionBtnName]: !actionBtns[actionBtnName]
        })
    }

    function handleInputFile(e) {
        let fileData = new FileReader()
        fileData.onloadend = handleChange
        fileData.readAsDataURL(e)
    }

    function handleDeletePhoto() {
        let newUser = { ...user }
        if (newUser && newUser.profilePhoto) {
            delete newUser.profilePhoto
            updateProfile(newUser)
        }
    }

    function removeBtnStr(str) {
        return str.replace(/btn$/i, '')
   }

    return (
        <div>
            <h5>Primary Information</h5>

            <label htmlFor="file" className='form-label'>Upload profile photo</label>
            <div className="input-group mb-3">
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
                {user?.profilePhoto && <button type='button' className='btn btn-outline-danger' data-testid="removePhoto" onClick={() => handleDeletePhoto()}>remove</button>}

            </div>

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

            <h5>Additional Information</h5>

            {actionBtns && Object.keys(actionBtns).map((action, index) => (
                    actionBtns[action] &&
                        <ActionItem 
                            key={index}
                            name={removeBtnStr(action)}
                            handleAction={handleChange}
                            handleRemoveAction={handleRemoveAction}
                        ></ActionItem>
                    
            ))}

            {actionBtns && Object.keys(actionBtns).map((action, index) => (
                    !actionBtns[action] &&
                    <ButtonItem
                        key={index}
                        name={removeBtnStr(action)}
                        handleAction={handleAction}>
                    </ButtonItem>
                    
            ))}        
          
        </div>
    )
}



export default Form;