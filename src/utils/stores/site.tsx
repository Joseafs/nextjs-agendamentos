import React, { createContext, useState } from 'react';
import { TpErrorList, TpSchedulingItem } from '~/types/scheduling';

const useValue = () => {
  const [scheduling, setScheduling] = useState<TpSchedulingItem[]>([]);
  const [schedulingConflicts, setSchedulingConflicts] = useState<
    TpSchedulingItem[]
  >([]);
  const [error, setError] = useState<TpErrorList[]>([]);

  const remErrorByName = (name: string) => {
    const newErrorList = error.filter((item) => item.id !== name);
    setError(newErrorList);
  };
  const addErrorByName = (name: string, newText: string | JSX.Element) => {
    const newErrorList = error.filter((item) => item.id !== name);

    const newError = {
      id: name,
      text: newText
    };
    setError([...newErrorList, newError]);
  };

  return {
    state: {
      scheduling,
      schedulingConflicts,
      error
    },
    dispatch: {
      setScheduling,
      setSchedulingConflicts,
      setError,
      setErrorRemByName: remErrorByName,
      setErrorAddByName: addErrorByName
    }
  };
};

export const siteContext = createContext({} as ReturnType<typeof useValue>);

interface PropsSiteStore {
  children: React.ReactNode;
}

export const SiteStore = (props: PropsSiteStore) => {
  return (
    <siteContext.Provider value={useValue()}>
      {props.children}
    </siteContext.Provider>
  );
};
