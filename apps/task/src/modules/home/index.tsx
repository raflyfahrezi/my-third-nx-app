import { Link } from 'react-router-dom';

import {
  Header,
  Button,
  Wrapper,
  InputForm,
  WrapperForm,
} from '@my-third-app/shared-ui';

import useHomeModule from './hooks';
import { STaskWrapper } from './styles';

const HomeModule = () => {
  const { tasks, addTask, inputTitleRef, inputDescriptionRef } =
    useHomeModule();

  return (
    <Wrapper>
      <Header>Task</Header>
      <WrapperForm>
        <InputForm ref={inputTitleRef} label="Title" />
        <InputForm ref={inputDescriptionRef} label="Description" />
        <Button onClick={addTask}>Create</Button>
      </WrapperForm>
      <STaskWrapper>
        {tasks.map((task, index) => {
          const { title, description } = task;

          return (
            <div key={index}>
              <p>
                <b>{title}</b>
              </p>
              <p>{description}</p>
            </div>
          );
        })}
      </STaskWrapper>
      <Link to="/about">To about page</Link>
    </Wrapper>
  );
};

export default HomeModule;
