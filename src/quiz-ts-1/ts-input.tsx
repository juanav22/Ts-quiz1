import React from 'react';

import Box from '@mui/material/Box'


interface Person {
  name: string;
  age: number;
}

type InputValue = string | number | Person;
interface TsInputProps {
  value: InputValue;
}

function TsInput({ value = 0 }: TsInputProps) {

  const renderValue = () => {
    if (typeof value === 'string') {
      return <p>String: {value}</p>;
    } else if (typeof value === 'number') {
      return <p>Number: {value}</p>;
    } else {
      return <p>Object - Name: {value.name}, Age: {value.age}</p>;
    }
  };

  return (
    <Box>
      {renderValue()}
    </Box>
  );
}

export default TsInput;