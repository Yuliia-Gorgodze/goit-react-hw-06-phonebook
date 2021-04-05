import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import filterActions from '../redux/filter/filter-actions';
import styles from './styles.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.input}>
      Кого ищем?{' '}
      <input
        className={styles.inputValue}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(filterActions(event.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  state: propTypes.string,
  inputChange: propTypes.func,
};
