import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

function GoalSelection({selectGoal}) {

  const options = [
    {value: 'mortgage', label: 'Ипотечное кредитование'},
    {value: 'autocredit', label: 'Автомобильное кредитование'},
  ];

  const customStyles = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transition: 'all .2s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
      color: '#1f1e25',
    }),

    option: (provided) => ({
      ...provided,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 24,
      fontSize: 16,
      color: '#1f1e25',
    }),

    menu: (provided) => ({
      ...provided,
      marginTop: 0,
      border: '1px solid #1f1e25',
    }),

    control: (provided) => ({
      ...provided,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 12,
      fontSize: 16,
      border: '1px solid #1f1e25',
    }),

    placeholder: (provided) => ({
      ...provided,
      fontSize: 16,
      fontWeight: 500,
      color: '#1f1e25',
    }),
  };

  const handleChangeGoal = (evt) => {
    selectGoal(evt.value);
  };

  return (
    <Select
      styles={customStyles}
      options={options}
      placeholder={'Выберите цель кредита'}
      components={{IndicatorSeparator: null}}
      onChange={handleChangeGoal}
    />
  );
}

GoalSelection.propTypes = {
  selectGoal: PropTypes.func.isRequired,
};

export default GoalSelection;
