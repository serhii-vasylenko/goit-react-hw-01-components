import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import css from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          const styles = {
            backgroundColor: `${getRandomHexColor()}`,
          };
          return (
            <li className={css.item} style={styles} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}&#37;</span>
            </li>
          );
        })}
      </ul>
    </section>
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
