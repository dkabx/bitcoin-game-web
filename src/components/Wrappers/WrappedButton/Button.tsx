import React, { ReactNode } from 'react';
import { Button, ButtonProps, CircularProgress } from '@material-ui/core';

interface Props extends ButtonProps {
  icon?: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  isLoading?: boolean;
}

const WrappedButton = ({
  name,
  onClick = () => null,
  type,
  isLoading,
  ...rest
}: Props) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      color="primary"
      title={name}
      {...rest}
    >
      {isLoading && <CircularProgress color="inherit" size={20} />}
      {name}
    </Button>
  );
};

export default WrappedButton;
