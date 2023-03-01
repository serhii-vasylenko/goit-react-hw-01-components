import PropTypes from 'prop-types';
import { TransactonItem } from 'components/TransactionHistory/TransactionItem/TransactionItem';
import {Table, Head, Body, Row, Cell} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <Row>
          <Cell>Type</Cell>
          <Cell>Amount</Cell>
          <Cell>Currency</Cell>
        </Row>
      </Head>

      <Body>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactonItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
