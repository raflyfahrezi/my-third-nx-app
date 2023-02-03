import { SWrapper } from './styles';
import { TWrapperProps } from './types';

const Wrapper = ({ children }: TWrapperProps) => {
  return <SWrapper>{children}</SWrapper>;
};

export default Wrapper;
