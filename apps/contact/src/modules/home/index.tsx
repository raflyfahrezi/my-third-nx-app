import {
  Header,
  Button,
  Wrapper,
  InputForm,
  WrapperForm,
} from '@my-third-app/shared-ui';

import useHomeModule from './hooks';
import { SContactWrapper } from './styles';

const HomeModule = () => {
  const { contacts, addContact, inputNameRef, inputPhoneRef } = useHomeModule();

  return (
    <Wrapper>
      <Header>Contact</Header>
      <WrapperForm>
        <InputForm ref={inputNameRef} label="Name" />
        <InputForm ref={inputPhoneRef} label="Phone" />
        <Button onClick={addContact}>Create</Button>
      </WrapperForm>
      <SContactWrapper>
        {contacts.map((contact, index) => {
          const { name, phone } = contact;

          return (
            <div key={index}>
              <p>
                <b>{name}</b>
              </p>
              <p>{phone}</p>
            </div>
          );
        })}
      </SContactWrapper>
    </Wrapper>
  );
};

export default HomeModule;
