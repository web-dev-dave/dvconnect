import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, location, title, from, to, current, description }
}) => {
  return (
    <>
      <h3 class='text-dark'>{company}</h3>
      <p>
        <Moment format='MM/YYYY'>{from}</Moment> -{' '}
        {!to ? ' Now' : <Moment format='MM/YYYY'>{to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired
};

export default ProfileExperience;
