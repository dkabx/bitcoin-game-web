import { InputProps, InputLabelProps } from '@material-ui/core';

export interface IRoute {
  path: string;
  component: any;
  layout: any;
  exact?: boolean;
}

export type ArrayType = {
  text: string;
  value: string;
};

// eslint-disable-next-line no-unused-vars
export type FN = any;

export interface ITextInputProps {
  name?: string;
  type: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  value: string | number | undefined;
  className: string;
  onChange: FN;
  InputProps?: InputProps;
  InputLabelProps?: InputLabelProps;
  error: boolean;
  disabled?: boolean;
  multiline?: boolean;
  onBlur?: FN;
}
