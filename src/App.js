
import { useState } from 'react';
import './App.css';
import Form from './Form/Form'
import ProfileCard from './ProfileCard/ProfileCard';

function App() {

  const [userProfile, setUserProfile] = useState({})

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
    <div className='container'>
      <div className='row'>
        <div className='col col-6'>
          <Form user={userProfile} handleChange={handleChange} updateProfile={updateUserProfile}></Form>
        </div>
        <div className='col col-6'>
          <ProfileCard user={userProfile}></ProfileCard>
        </div>
      </div>
      <div className='row'>
        <pre>{JSON.stringify(userProfile)}</pre>
      </div>
    </div>
  );
}

export default App;
