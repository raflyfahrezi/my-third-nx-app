import { TWrapperProps } from './types';
import { SWrapperForm } from './styles';

const WrapperForm = ({ children }: TWrapperProps) => {
  return <SWrapperForm>{children}</SWrapperForm>;
};

export default WrapperForm;
