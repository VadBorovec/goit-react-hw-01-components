import PropTypes from 'prop-types';
import { Table, THead, Th, Tr, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <THead>
        <tr>
          <Th>TYPE</Th>
          <Th>AMOUNT</Th>
          <Th>CURRENCY</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
