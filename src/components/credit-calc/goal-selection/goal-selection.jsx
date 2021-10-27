import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

function GoalSelection({onSelectGoal}) {

  const options = [
    {value: 'mortgage', label: 'Ипотечное кредитование'},
    {value: 'autocredit', label: 'Автомобильное кредитование'},
  ];

  const customStyles = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      padding: 0,
      transition: 'all .2s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
      color: '#1f1e25',
    }),

    option: (provided) => ({
      ...provided,
      paddingTop: 20,
      paddingBottom: 19,
      paddingLeft: 24,
      marginTop: '-4px',
      fontSize: 16,
      borderTop: '0.5px solid #c1c2ca',
      backgroundColor: '#ffffff',
      color: '#1f1e25',
    }),

    menu: (provided) => ({
      ...provided,
      position: 'relative',
      marginTop: '-3px',
      borderRadius: 'none',
      borderBottomRightRadius: '4px',
      borderBottomLeftRadius: '4px',
      border: '1px solid #1f1e25',
    }),

    control: (provided) => ({
      ...provided,
      paddingTop: 13,
      paddingBottom: 13,
      paddingLeft: 12,
      paddingRight: 16,
      fontSize: 16,
      border: '1px solid #1f1e25',
      boxShadow: 'none',
    }),

    placeholder: (provided) => ({
      ...provided,
      fontSize: 16,
      fontWeight: 500,
      color: '#1f1e25',
    }),
  };

  const handleChangeGoal = (evt) => {
    onSelectGoal(evt.value);
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
  onSelectGoal: PropTypes.func.isRequired,
};

export default GoalSelection;
