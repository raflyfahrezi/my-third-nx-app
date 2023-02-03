import { useRef, useState } from 'react';

import { TContact } from '@my-third-app/contact/models';

const useHomeModule = () => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPhoneRef = useRef<HTMLInputElement>(null);

  const [contacts, setContacts] = useState<TContact[]>([]);

  const addContact = () => {
    const name = inputNameRef.current?.value;
    const phone = inputPhoneRef.current?.value;

    if (!name || !phone) {
      return;
    }

    const task: TContact = {
      name,
      phone,
    };

    setContacts((prev) => [...prev, task]);

    inputNameRef.current.value = '';
    inputPhoneRef.current.value = '';
  };

  return {
    contacts,
    addContact,
    inputNameRef,
    inputPhoneRef,
  };
};

export default useHomeModule;
