import { THeaderProps } from './types';
import { SHeader, SHeaderParagraph } from './styles';

const Header = ({ children }: THeaderProps) => {
  return (
    <SHeader>
      <SHeaderParagraph>{children}</SHeaderParagraph>
    </SHeader>
  );
};

export default Header;
