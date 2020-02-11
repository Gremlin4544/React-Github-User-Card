import React from 'react';
import "./user-card-styles.css";

const UserCard = props => {
  const {
    avatar_url,
    id,
    name,
    login,
    location,
    url,
    bio,
    followers
  } = props.user;

  return (
    <div className="details">
        <div className="user-card">
            <img src={avatar_url} alt="user" />
         </div>
        <div className="user-details">
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p className="gh-login">Login: {login}</p>
            <p>Location: {location}</p>
            <p>Github URL: {url}</p>
            <p>Bio: {bio}</p>
            <p>Follower count: {followers}</p>
        </div>
    </div>
  );
}

export default UserCard;