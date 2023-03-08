import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import {
  Section,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          const styles = {
            backgroundColor: `${getRandomHexColor()}`,
          };
          return (
            <Item style={styles} key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}&#37;</Percentage>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
