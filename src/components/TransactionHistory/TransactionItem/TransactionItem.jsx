import PropTypes from 'prop-types';
import {Cell, Row} from './TransactionItem.styled';

export const TransactonItem = ({ type, amount, currency }) => {
  return (
    <Row>
      <Cell>{type}</Cell>
      <Cell>{amount}</Cell>
      <Cell>{currency}</Cell>
    </Row>
  );
};

TransactonItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
