import React from 'react';
import spinner from './spinner.gif';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </>
);
