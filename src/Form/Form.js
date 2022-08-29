import react, { useState } from 'react'
import ActionItem from './actionItem'
import ButtonItem from './buttonItem'

function Form() {

    const [actionBtns, setActionBtns] = useState({
        facebookBtn: false,
        instagramBtn: false,
        linkedInBtn: false,
        mobileBtn: false
    })

    const [profile, setProfile] = useState({})

    function handleChange(e) {
        e.preventDefault();
        const isImage = e.target.result
        const propName = isImage ? 'profilePhoto' : e.target.name
        setProfile(profile => profile = {
            ...profile,
            [propName]: isImage ? isImage : e.target.value
        })
    }

    function handleAction(e) {
        e.preventDefault();
        setActionBtns(actionBtns => actionBtns = {
            ...actionBtns,
            [e.target.name]: !actionBtns[e.target.name]
        })
    }

    function handleRemoveAction(buttonName) {
        if (profile[buttonName]) {
            delete profile[buttonName]
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

    return (
        <div>
            <label htmlFor="file">Upload profile photo</label>
            <input
                type="file"
                id="file"
                data-testid="photo-upload"
                name='profile-photo'
                onChange={e =>
                    handleInputFile(e.target.files[0])}
                accept="image/png, image/jpg, image/jpeg"
                multiple
            />
            <label htmlFor='firstName'>First Name</label>
            <input
                type="text"
                name='firstName'
                id='firstName'
                onChange={handleChange}
            >
            </input>
            <br></br>
            <label htmlFor='lastName'>Last Name</label>
            <input
                type="text"
                name='lastName'
                id='lastName'
                onChange={handleChange}>
            </input>
            <br></br>
            <label htmlFor='jobTitle'>Job Title</label>
            <input
                type="text"
                name='jobTitle'
                id='jobTitle'
                onChange={handleChange}>
            </input>
            <br></br>
            <label htmlFor='additionalInfo'>Additional Information</label>
            <textarea
                name='additionalInfo'
                id='additionalInfo'
                onChange={handleChange}></textarea>

            <br></br>
            <br></br>
            <br></br>

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


            <pre>{JSON.stringify(profile)}</pre>
            <pre>{JSON.stringify(actionBtns)}</pre>

        </div>
    )
}



export default Form;