import React from 'react';
import PropTypes from 'prop-types';

class UserInfos extends React.Component {
  render() {
    const { userImage, userName, userEmail, userAge } = this.props;
    return (
      <div>
        <img src={ userImage } alt={ userName } />
        <h2>{ userName }</h2>
        <p>{ userEmail }</p>
        <p>{ userAge }</p>
      </div>
    )
  }
}

UserInfos.propTypes = {
  userImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userAge: PropTypes.number.isRequired,
};

export default UserInfos;