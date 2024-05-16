import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
 if (!user) return <div className='text-white'>Please LogIn</div>

 return <div className='text-white'>Welcome {user.username}</div>
}

export default Profile