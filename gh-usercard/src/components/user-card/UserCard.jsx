import React from 'react';
import "./user-card-styles.css";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

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
        <Card className="card-styles">
          <CardBody>
            <CardText className="ctr-text">Name: {name}</CardText>
            <CardText className="ctr-text">Login: {login}</CardText>
            <CardImg width="25%" src={avatar_url} alt="user" />
            <CardText >ID: {id}</CardText>
            <CardText >Location: {location}</CardText>
            <CardText >Github URL: {url}</CardText>
            <CardText >Bio: {bio}</CardText>
            <CardText >Follower count: {followers}</CardText>
          </CardBody>
        </Card>
    </div>
  );
}

export default UserCard;