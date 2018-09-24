import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import classes from './Input.css';

const Input = (props) => {
  let inputElement = null;
  const inputClasses = [];
  let cls = '';

  if (props.invalid && props.shouldValidate && props.touched) {
    cls = 'invalid';
  } else {
    cls = 'valid';
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = <input
        className={cls}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        required />;
      break;
    case ('textarea'):
      inputElement = <textarea
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
    case ('select'):
      inputElement = (
        <Select
          className={cls}
          value={props.value}
          onChange={props.changed}
          options={props.options}
          placeholder={props.elementConfig.placeholder}
        />
      );
      break;
    default:
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
  }

  if (props.elementType == 'select') {
    return (
      <div className="select-box">
        {inputElement}
        <label className={classes.Label}>{props.label}</label>
      </div>
    );
  }
  return (
    <div className="input-text">
      {inputElement}
      <span className="border-highlighter"></span>
      <label className={classes.Label}>{props.label}</label>
    </div>
  );
};

export default Input;