import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class Profile extends Component {
  state = { user: null };

  componentDidMount() {
    axios.get("https://api.github.com/users/Gremlin4544")
    .then(response => {
      console.log(response.data);
      this.setState({ user: response.data });
    })
    .catch(error => {
      console.log("No github user data returned", error)
    })
  }

  render() {
    const { user } = this.state;

    if (user === null) {
      return <div>Loading...</div>
    }

    return (
      <UserCard user={user} />
    );
  }
}

export default Profile;
