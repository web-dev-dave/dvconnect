import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, from, to, current, description }
}) => {
  return (
    <>
      <h3 class='text-dark'>{school}</h3>
      <p>
        <Moment format='MM/YYYY'>{from}</Moment> -{' '}
        {!to ? ' Now' : <Moment format='MM/YYYY'>{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired
};

export default ProfileEducation;
