
import { useState } from 'react';
import './App.css';
import Form from './Form/Form'
import ProfileCard from './ProfileCard/ProfileCard';

function App() {

  const [userProfile, setUserProfile] = useState({
    profilePhoto: 'profile-photo.jpeg',
    firstName: 'Dev',
    lastName: 'Eloper',
    jobTitle: 'Frontend Engineer',
    additionalInfo: 'I speak code',
    facebook: 'facebook.profile',
    instagram: 'instagram',
    linkedIn: 'linkedIn',
    mobile: 'mobile number'
  })

  function handleFormChanges(e) {
    e.preventDefault();
    const isImage = e.target.result
    const property = isImage ? 'profilePhoto' : e.target.name

    updateUserProfile({
      ...userProfile,
      [property]: isImage ? isImage : e.target.value
    })
  }

  function updateUserProfile(data) {
    setUserProfile(prevState => prevState = { ...data })
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 col-12 p-4'>
          <Form 
            user={userProfile} 
            handleChange={handleFormChanges}
            updateProfile={updateUserProfile}>
          </Form>
        </div>
        <div className='col-md-6 col-12 p-4'>
          <ProfileCard user={userProfile}></ProfileCard>
        </div>
      </div>
    </div>
  );
}

export default App;
