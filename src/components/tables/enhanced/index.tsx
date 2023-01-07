import { memo } from 'react';
import { MdDelete } from 'react-icons/md';
import { ButtonIcon } from '~/components/buttons/icon';
import { TpSchedulingItem } from '~/types/scheduling';
import { Root, Table } from './styled';

interface Props {
  list: TpSchedulingItem[];
}

const OgTableEnhanced = ({ list }: Props) => {
  return list.length > 0 ? (
    <Root>
      <Table>
        <thead>
          <th align="center">Título</th>
          <th align="center">Início</th>
          <th align="center">Fim</th>
          <th align="center">Apagar</th>
        </thead>
        <tbody>
          {list.map(({ title, timeStart, timeEnd }, index) => (
            <tr key={`tr-${title}-${index}`}>
              <td align="center">{title}</td>
              <td align="center">{timeStart}</td>
              <td align="center">{timeEnd}</td>
              <td align="center" width={120}>
                <div>
                  <ButtonIcon color="error">
                    <MdDelete size="1.2rem" />
                  </ButtonIcon>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Root>
  ) : null;
};

export const TableEnhanced = memo(OgTableEnhanced);
