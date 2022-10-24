import React from 'react';
import profile from '../image/profile.jpg';

const Header = () => {
  return (
    <div className="header">
      <img id="profile__img" src={profile} alt="profile" />
      <p id="twitter">Annette Black</p>
      <p id="slack">Annette Black</p>
    </div>
  );
};

export default Header;
