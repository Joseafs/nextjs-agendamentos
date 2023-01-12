import { memo, useContext, useEffect, useState } from 'react';
import { BlockError } from '~/components/blocks/error';
import { SiteContext } from '~/stores/site';
import { TpErrorList } from '~/types/common';

const OgBlockErrorWired = () => {
  const { state } = useContext(SiteContext);
  const [list, setList] = useState<TpErrorList[]>([]);

  useEffect(() => {
    setList(state.error);
  }, [state.error]);

  return <BlockError list={list} />;
};

export const BlockErrorWired = memo(OgBlockErrorWired);
