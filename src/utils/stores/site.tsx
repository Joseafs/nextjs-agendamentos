import React, { createContext, useState } from 'react';
import { TpSchedulingItem } from '~/types/scheduling';

const useValue = () => {
  const [scheduling, setScheduling] = useState<TpSchedulingItem[]>([]);

  return {
    state: {
      scheduling
    },
    dispatch: {
      setScheduling
    }
  };
};

export const SiteContext = createContext({} as ReturnType<typeof useValue>);

interface PropsSiteStore {
  children: React.ReactNode;
}

export const SiteStore = (props: PropsSiteStore) => {
  return (
    <SiteContext.Provider value={useValue()}>
      {props.children}
    </SiteContext.Provider>
  );
};
