import React, { createContext, useState } from 'react';

export const userContext = createContext(null);

export const UserProvider = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  return (
    <userContext.Provider value={{ formData, setFormData }}>
      {props.children}
    </userContext.Provider>
  );
};
