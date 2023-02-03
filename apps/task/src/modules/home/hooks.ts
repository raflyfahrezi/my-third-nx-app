import { useRef, useState } from 'react';

import { TTask } from '@my-third-app/task/models';

const useHomeModule = () => {
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputDescriptionRef = useRef<HTMLInputElement>(null);

  const [tasks, setTasks] = useState<TTask[]>([]);

  const addTask = () => {
    const title = inputTitleRef.current?.value;
    const description = inputDescriptionRef.current?.value;

    if (!title || !description) {
      return;
    }

    const task: TTask = {
      title,
      description,
    };

    setTasks((prev) => [...prev, task]);

    inputTitleRef.current.value = '';
    inputDescriptionRef.current.value = '';
  };

  return {
    tasks,
    addTask,
    inputTitleRef,
    inputDescriptionRef,
  };
};

export default useHomeModule;
