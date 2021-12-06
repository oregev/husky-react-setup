import React from 'react';

interface Props {
  size: string;
}

// eslint-disable-next-line react/function-component-definition
export const Button: React.FC<Props> = ({ size }) => {
  const rightSize = size ? 'big' : 'small';
  return (
    <button type="button">
      {rightSize}
      dhasgdkgagkjhlkhlkhlhlkhdasa
    </button>
  );
};
