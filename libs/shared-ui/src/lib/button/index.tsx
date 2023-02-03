import { SButton } from './styles';
import { TButtonProps } from './types';

const Button = ({ children, ...props }: TButtonProps) => {
  return <SButton {...props}>{children}</SButton>;
};

export default Button;
