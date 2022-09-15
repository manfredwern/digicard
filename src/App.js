
import { useState } from 'react';
import './App.css';
import Form from './Form/Form'
import ProfileCard from './ProfileCard/ProfileCard';

function App() {

  const [userProfile, setUserProfile] = useState({
    profilePhoto: 'profile-photo.jpeg',
    firstName: 'Mamerdo',
    lastName: 'Penduco',
    jobTitle: 'Painter',
    additionalInfo: 'I speak Quechua',
    facebook: 'https://facebook.mamerdo.profile'
  })

  // Handle changes made in the form
  function handleChange(e) {
    e.preventDefault();
    const isImage = e.target.result
    const property = isImage ? 'profilePhoto' : e.target.name
    const newUser = {
      ...userProfile,
      [property]: isImage ? isImage : e.target.value
    }
    updateUserProfile(newUser)
  }

  function updateUserProfile(data) {
    setUserProfile(prevState => prevState = { ...data })
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 col-12'>
          <Form user={userProfile} handleChange={handleChange} updateProfile={updateUserProfile}></Form>
        </div>
        <div className='col-md-6 col-12'>
          <ProfileCard user={userProfile}></ProfileCard>
        </div>
      </div>
    </div>
  );
}

export default App;
