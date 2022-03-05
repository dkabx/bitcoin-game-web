import React from 'react';
import { TextField } from '@material-ui/core';

import { ITextInputProps } from 'common/types';

const TextInput = (props: ITextInputProps) => {
  return <TextField {...props} />;
};

export default TextInput;
