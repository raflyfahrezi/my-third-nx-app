import { forwardRef } from 'react';

import { TInputProps } from './types';
import { SInput, SInputWrapper } from './styles';

const InputForm = forwardRef<HTMLInputElement, TInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <SInputWrapper>
        <label>{label}</label>
        <SInput ref={ref} {...props} />
      </SInputWrapper>
    );
  }
);

export default InputForm;
