import React, {useState, useEffect} from 'react'

const Profile = () => {
  const [foxImage, setFoxImage] = useState('');
const changeFox = ()=>{
  fetch('https://randomfox.ca/floof')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFoxImage(data.image);
      })
}
  useEffect(() => {
  changeFox();  
  },[])      

  return (
    <div>
      <h1> Fox Image</h1>
      <img className='w-48 h-36' src={foxImage}/>
      <button onClick={changeFox}>next fox</button>
    </div>
  )
}

export default Profile