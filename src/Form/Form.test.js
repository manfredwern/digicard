import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Form from './Form'

beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Form />)
})

function typeIntoForm({ firstName, lastName, jobTitle, additionalInfo, facebook, instagram, linkedIn, mobile }) {

    const firstNameInputElement = screen.getByRole("textbox", {
        name: /first\s?name/i
    })
    const lastNameInputElement = screen.getByRole("textbox", {
        name: /last\s?name/i
    })
    const jobTitleInputElement = screen.getByRole("textbox", {
        name: /job\s?title/i
    })
    const additionalInfoInputElement = screen.getByRole("textbox", {
        name: /additional\s?information/i
    })
    const facebookInputElement = screen.queryByRole('textbox', {
        name: /facebook/i
    })
    const instagramInputElement = screen.queryByRole('textbox', {
        name: /instagram/i
    })
    const linkedInInputElement = screen.queryByRole('textbox', {
        name: /linkedIn/i
    })
    const mobileInputElement = screen.queryByRole('textbox', {
        name: /mobile/i
    })

    if (firstName) {
        userEvent.type(firstNameInputElement, firstName)
    }
    if (lastName) {
        userEvent.type(lastNameInputElement, lastName)
    }
    if (jobTitle) {
        userEvent.type(jobTitleInputElement, jobTitle)
    }
    if (additionalInfo) {
        userEvent.type(additionalInfoInputElement, additionalInfo)
    }
    if (facebook) {
        userEvent.type(facebookInputElement, facebook)
    }
    if (instagram) {
        userEvent.type(instagramInputElement, instagram)
    }
    if (linkedIn) {
        userEvent.type(linkedInInputElement, linkedIn)
    }
    if (mobile) {
        userEvent.type(mobileInputElement, mobile)
    }

    return {
        firstNameInputElement,
        lastNameInputElement,
        jobTitleInputElement,
        additionalInfoInputElement,
        facebookInputElement,
        instagramInputElement,
        linkedInInputElement,
        mobileInputElement
    }
}

function clickActionButtons({ facebook, instagram, linkedIn, mobile }) {
    const facebookBtn = screen.getByRole("button", {
        name: /facebook/i
    })
    const instagramBtn = screen.getByRole("button", {
        name: /instagram/i
    })
    const linkedInBtn = screen.getByRole("button", {
        name: /linkedin/i
    })
    const mobileBtn = screen.getByRole("button", {
        name: /mobile/i
    })

    if (facebook) {
        userEvent.click(facebookBtn)
    }

    if (instagram) { userEvent.click(instagramBtn) }
    if (linkedIn) { userEvent.click(linkedInBtn) }
    if (mobile) { userEvent.click(mobileBtn) }

    return {
        facebookBtn,
        instagramBtn,
        linkedInBtn,
        mobileBtn
    }
}

describe('Basic User Information', () => {

    test('inputs should be initially empty', () => {
        const {
            firstNameInputElement,
            lastNameInputElement,
            jobTitleInputElement,
            additionalInfoInputElement
        } = typeIntoForm({})
        expect(firstNameInputElement.value).toBe("")
        expect(lastNameInputElement.value).toBe("")
        expect(jobTitleInputElement.value).toBe("")
        expect(additionalInfoInputElement.value).toBe("")
    })

    describe('Adding a profile photo', () => {
        test('upload button should be initially visible', () => {
            const uploadInputElement = screen.getByTestId(/photoupload/i)
            expect(uploadInputElement).toBeInTheDocument()
        })
        test('upload profile photo', () => {
            const file = new File(['profile-photo'], 'src/profile-photo.jpeg', { type: 'image/jpeg' })
            const uploadInputElement = screen.getByTestId(/photoupload/i)

            userEvent.click(uploadInputElement)
            userEvent.upload(uploadInputElement, file)

            expect(uploadInputElement.files[0]).toStrictEqual(file)
            expect(uploadInputElement.files.item(0)).toStrictEqual(file)
            expect(uploadInputElement.files).toHaveLength(1)
        })

        // test('remove profile photo', async () => {
        //     // const deletePhoto = screen.queryByRole('button', {
        //     //     name: /remove\s?profile\s?photo/i
        //     // })
        //     // expect(deletePhoto).not.toBeInTheDocument()

        //     await waitFor(() => {
        //         expect(screen.queryByText(/remove\s?profile\s?photo/i)).not.toBeInTheDocument()
        //     })

        //     const file = new File(['profile-photo'], 'src/profile-photo.jpeg', {type: 'image/jpeg'})
        //     const uploadInputElement = await screen.getByTestId(/photoupload/i)

        //     // userEvent.click(uploadInputElement)
        //     userEvent.upload(uploadInputElement, file)
        //     expect(uploadInputElement.files[0]).toStrictEqual(file)
        //     expect(uploadInputElement.files.item(0)).toStrictEqual(file)
        //     expect(uploadInputElement.files).toHaveLength(1)

        //     userEvent.click(uploadInputElement)

        //     await waitFor(() => {
        //         expect(screen.queryByText(/remove\s?profile\s?photo/i)).toBeVisible()
        //     })

        // })
    })

    describe('Input user information to textbox', () => {

        test('should type in a first name', () => {
            const { firstNameInputElement } = typeIntoForm({ firstName: "John" })
            expect(firstNameInputElement.value).toBe("John")
        })
        test('should type in a last name', () => {
            const { lastNameInputElement } = typeIntoForm({ lastName: "Doe" })
            expect(lastNameInputElement.value).toBe("Doe")
        })
        test('should type in a job title', () => {
            const { jobTitleInputElement } = typeIntoForm({ jobTitle: "Frontend Developer" })
            expect(jobTitleInputElement.value).toBe("Frontend Developer")
        })
        test('should type in additional information', () => {
            const { additionalInfoInputElement } = typeIntoForm({ additionalInfo: "some information" })
            expect(additionalInfoInputElement.value).toBe("some information")
        })

    })

})

describe('Additional User Information', () => {
    test('all four action buttons with should be visible', () => {
        const {
            facebookBtn,
            instagramBtn,
            linkedInBtn,
            mobileBtn
        } = clickActionButtons({})

        expect(facebookBtn).toBeInTheDocument()
        expect(instagramBtn).toBeInTheDocument()
        expect(linkedInBtn).toBeInTheDocument()
        expect(mobileBtn).toBeInTheDocument()
    })
    test('Facebook input fields should not be visible initally', () => {
        const facebookInputElement = screen.queryByRole('textbox', {
            name: /facebook/i
        })
        expect(facebookInputElement).not.toBeInTheDocument()
    })
    test('Instagram input fields should not be visible initally', () => {
        const instagramInputElement = screen.queryByRole('textbox', {
            name: /instagram/i
        })
        expect(instagramInputElement).not.toBeInTheDocument()
    })
    test('LinkedIn input fields should not be visible initally', () => {
        const linkedInInputElement = screen.queryByRole('textbox', {
            name: /linkedin/i
        })
        expect(linkedInInputElement).not.toBeInTheDocument()
    })
    test('Mobile input fields should not be visible initally', () => {
        const mobileInputElement = screen.queryByRole('textbox', {
            name: /mobile/i
        })
        expect(mobileInputElement).not.toBeInTheDocument()
    })

    describe('Clicking on action items', () => {
        test('Facebook input element should show and user can input value when facebook action is clicked', () => {
            const inputStr = 'https://facebook.profile'
            const { facebookBtn } = clickActionButtons({ facebook: true })
            const { facebookInputElement } = typeIntoForm({facebook: inputStr})
 
            expect(facebookBtn).not.toBeInTheDocument()
            expect(facebookInputElement).toBeInTheDocument()
            expect(facebookInputElement.value).toBe(inputStr)
        })

        test('Instagram input element should show and user can input value when facebook action is clicked', () => {
            const inputStr = 'https://instagram.profile'
            const { instagramBtn } = clickActionButtons({ instagram: true })
            const {instagramInputElement} = typeIntoForm({instagram: inputStr})

            expect(instagramBtn).not.toBeInTheDocument()
            expect(instagramInputElement).toBeInTheDocument()
            expect(instagramInputElement.value).toBe(inputStr)
        })

        test('LinkedIn input element should show and user can input value when facebook action is clicked', () => {
            const inputStr = 'https://linkedIn.profile'
            const { linkedInBtn } = clickActionButtons({ linkedIn: true })
            const { linkedInInputElement } = typeIntoForm({ linkedIn: inputStr })

            expect(linkedInBtn).not.toBeInTheDocument()
            expect(linkedInInputElement).toBeInTheDocument()
            expect(linkedInInputElement.value).toBe(inputStr)
        })

        test('Mobile input element should show and user can input value when facebook action is clicked', () => {
            const inputStr = '09123720876'
            const { mobileBtn } = clickActionButtons({ mobile: true })
            const { mobileInputElement } = typeIntoForm({ mobile: inputStr })

            expect(mobileBtn).not.toBeInTheDocument()
            expect(mobileInputElement).toBeInTheDocument()
            expect(mobileInputElement.value).toBe(inputStr)
        })

    })

    describe('Removing an action item', () => {
        test('Facebook action should be removed when user clicks on the remove button', async () => {
            // Check for button and input
            const { facebookBtn } = clickActionButtons({ facebook: true })
            const { facebookInputElement } = typeIntoForm({})

            expect(facebookInputElement).toBeInTheDocument()
            expect(facebookBtn).not.toBeInTheDocument();

            // Interact with the remove button
            const removeBtn = await screen.findByRole('button', {
                name: 'remove',
                exact: false
            })
            expect(removeBtn).toHaveAttribute('name', 'removeFacebook')
            userEvent.click(removeBtn)

            // Check once again for the button and input
            const { facebookBtn: fbAgain } = clickActionButtons({})
            const { facebookInputElement: fbInputAgain } = typeIntoForm({})

            expect(fbAgain).toBeInTheDocument();
            expect(fbInputAgain).not.toBeInTheDocument()
        })

        test('Instagram action should be removed when user clicks on the remove button', async () => {
             const { instagramBtn } = clickActionButtons({ instagram: true })
             const { instagramInputElement } = typeIntoForm({})
 
             expect(instagramInputElement).toBeInTheDocument()
             expect(instagramBtn).not.toBeInTheDocument();
 
             const removeBtn = await screen.findByRole('button', {
                 name: 'remove',
                 exact: false
             })
             expect(removeBtn).toHaveAttribute('name', 'removeInstagram')
             userEvent.click(removeBtn)
 
             const { instagramBtn: instagramAgain } = clickActionButtons({})
             const { instagramInputElement: instagramInputAgain } = typeIntoForm({})
 
             expect(instagramAgain).toBeInTheDocument();
             expect(instagramInputAgain).not.toBeInTheDocument()
        })

        test('LinkedIn action should be removed when user clicks on the remove button', async () => {
            const { linkedInBtn } = clickActionButtons({ linkedIn: true })
            const { linkedInInputElement } = typeIntoForm({})

            expect(linkedInInputElement).toBeInTheDocument()
            expect(linkedInBtn).not.toBeInTheDocument();

            const removeBtn = await screen.findByRole('button', {
                name: 'remove',
                exact: false
            })
            expect(removeBtn).toHaveAttribute('name', 'removeLinkedIn')
            userEvent.click(removeBtn)

            const { linkedInBtn: linkedInAgain } = clickActionButtons({})
            const { linkedInInputElement: linkedInInputAgain } = typeIntoForm({})

            expect(linkedInAgain).toBeInTheDocument();
            expect(linkedInInputAgain).not.toBeInTheDocument()
        })
        
        test('Mobile action should be removed when user clicks on the remove button', async () => {
            const { mobileBtn } = clickActionButtons({ mobile: true })
            const { mobileInputElement } = typeIntoForm({})

            expect(mobileInputElement).toBeInTheDocument()
            expect(mobileBtn).not.toBeInTheDocument();

            const removeBtn = await screen.findByRole('button', {
                name: 'remove',
                exact: false
            })
            expect(removeBtn).toHaveAttribute('name', 'removeMobile')
            userEvent.click(removeBtn)

            const { mobileBtn: mobileAgain } = clickActionButtons({})
            const { mobileInputElement: mobileInputAgain } = typeIntoForm({})

            expect(mobileAgain).toBeInTheDocument();
            expect(mobileInputAgain).not.toBeInTheDocument()
        })
    })

})