import PropTypes from 'prop-types';
import css from './statistics.module.css';

export default function StatisticItem(props) {
  const { label, percentage } = props;

  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
