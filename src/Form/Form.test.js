import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Form from './Form'

beforeEach(() => {
    render(<Form />)
})

function typeIntoForm({ firstName, lastName, jobTitle, additionalInfo, face }) {

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

    return {
        firstNameInputElement,
        lastNameInputElement,
        jobTitleInputElement,
        additionalInfoInputElement
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
            const uploadInputElement = screen.getByTestId(/photo-upload/i)
            expect(uploadInputElement).toBeInTheDocument()
        })
    
        test('upload profile photo', () => {
            const file = new File(['profile-photo'], 'profile-photo.jpeg', {type: 'image/jpeg'})
            const input = screen.getByTestId(/photo-upload/i)
    
            userEvent.upload(input, file)
          
            expect(input.files[0]).toStrictEqual(file)
            expect(input.files.item(0)).toStrictEqual(file)
            expect(input.files).toHaveLength(1)
          })

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
        test('Facebook input element should show when facebook action is clicked', () => {
            clickActionButtons({ facebook: true })
            expect(screen.queryByRole('textbox', {
                name: /facebook/i
            })).toBeInTheDocument()
        })

        test('Instagram input element should show when facebook action is clicked', () => {
            clickActionButtons({ instagram: true })
            expect(screen.queryByRole('textbox', {
                name: /instagram/i
            })).toBeInTheDocument()
        })

        test('LinkedIn input element should show when facebook action is clicked', () => {
            clickActionButtons({ linkedIn: true })
            expect(screen.queryByRole('textbox', {
                name: /linkedin/i
            })).toBeInTheDocument()
        })

        test('Mobile input element should show when facebook action is clicked', () => {
            clickActionButtons({ mobile: true })
            expect(screen.queryByRole('textbox', {
                name: /mobile/i
            })).toBeInTheDocument()
        })

    })

    describe('Removing an action item', () => {
        test('Facebook should be removed when user clicks on the remove button', () => {
            const { facebookBtn } = clickActionButtons({ facebook: true })
            expect(facebookBtn).not.toBeInTheDocument();
        })
        test('Instagram should be removed when user clicks on the remove button', () => {
            const { instagramBtn } = clickActionButtons({ instagram: true })
            expect(instagramBtn).not.toBeInTheDocument();
        })
        test('LinkedIn should be removed when user clicks on the remove button', () => {
            const { linkedInBtn } = clickActionButtons({ linkedIn: true })
            expect(linkedInBtn).not.toBeInTheDocument();
        })
        test('Mobile should be removed when user clicks on the remove button', () => {
            const { mobileBtn } = clickActionButtons({ mobile: true })
            expect(mobileBtn).not.toBeInTheDocument();
        })
    })


})