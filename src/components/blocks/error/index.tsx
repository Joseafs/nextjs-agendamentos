import { memo } from 'react';
import { TpErrorList } from '~/types/scheduling';

import { AiFillAlert } from 'react-icons/ai';

import { Root, Text, Title, UL } from './styled';

export type Props = {
  list: TpErrorList[];
  className?: string;
};

const OgBlockError = ({ className, list }: Props) => {
  return list.length > 0 ? (
    <Root className={className}>
      <Title>
        ATENÇÃO <AiFillAlert />
      </Title>
      <UL>
        {list.map(({ id, text }, index) => {
          return <Text key={`block-error-${id}-${index}`}>{text}</Text>;
        })}
      </UL>
    </Root>
  ) : null;
};

export const BlockError = memo(OgBlockError);
