import React from 'react'


const UserProfile = ({ image, name, role }) => {
 return (
  <div className="user-card-container">
   <img src={image} alt={name} width="100" height="100" />
   <div className="user-details-container">
   <h2  className="user-name">{name}</h2>
   <p className="user-designation">{role}</p>
   </div>
  </div>
 );
};

export default UserProfile;