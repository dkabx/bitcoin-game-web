import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@material-ui/core';

import { FN } from 'common/types';

interface props extends BoxProps {
  children?: ReactNode;
  className?: any;
  onClick?: FN;
}

const WrappedBox = ({ children, className, onClick }: props) => {
  return (
    <Box className={className} onClick={onClick}>
      {children}
    </Box>
  );
};

export default WrappedBox;
