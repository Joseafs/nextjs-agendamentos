import { memo, useContext, useEffect, useState } from 'react';
import { TpErrorList } from '~/types/scheduling';

import { AiFillAlert } from 'react-icons/ai';
import { siteContext } from '~/utils/stores/site';

import { Root, Text, Title, UL } from './styled';

export type Props = {
  className?: string;
};

const OgBlockError = ({ className }: Props) => {
  const { state } = useContext(siteContext);
  const [list, setList] = useState<TpErrorList[]>([]);

  useEffect(() => {
    setList(state.error);
  }, [state.error]);

  return list.length > 0 ? (
    <Root className={className}>
      <Title>
        ATENÇÃO <AiFillAlert />
      </Title>
      <UL>
        {list.map((item) => {
          return <Text>{item.text}</Text>;
        })}
      </UL>
    </Root>
  ) : null;
};

export const BlockError = memo(OgBlockError);
