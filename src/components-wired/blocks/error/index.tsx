import { memo, useContext, useEffect, useState } from 'react';
import { BlockError } from '~/components/blocks/error';
import { TpErrorList } from '~/types/scheduling';
import { siteContext } from '~/utils/stores/site';

const OgBlockErrorWired = () => {
  const { state } = useContext(siteContext);
  const [list, setList] = useState<TpErrorList[]>([]);

  useEffect(() => {
    setList(state.error);
  }, [state.error]);

  return <BlockError list={list} />;
};

export const BlockErrorWired = memo(OgBlockErrorWired);
