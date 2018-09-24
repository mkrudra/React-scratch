import React from 'react';

const SelectBox = (props) => {

  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label">
        {props.placeholder}
      </label>
      <div className="col-sm-9">
        <select
          className="form-control"
          defaultValue={props.value}
          onChange={props.onChange}
          >
          {props.options.map(option => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

}

export default SelectBox;
