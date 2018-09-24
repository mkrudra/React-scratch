import React from 'react';

export const TextField = (props) => {

  return (
    <div className="input-text">
    <label>{props.placeholder}</label><br/>
      <input
        {...props}
        type={props.type ? props.type : 'text'}
        required
      />
      <span className="border-highlighter"></span>      
    </div>
  );

}

export const TextArea = (props) => {

  return (
    <div className="input-text">
    <label>{props.placeholder}</label><br/>
      <textarea
        {...props}
        required
      />
      <span className="border-highlighter"></span>
    </div>
  );

}

export const CheckBox = (props) => {

  return (
    <span className="input-checkbox">
      <span className="checkbox">
        <input
          {...props}
          type="checkbox"
        />
        <label htmlFor={props.id}>{props.label}</label>
      </span>
    </span>
  );

}

export const InputSelection = (props) => {

  return (
    <label className="input-selection">
      <input
        type={props.type}
        name={props.name}
      />
      <span className="active-selection"></span>
      {props.label}
    </label>
  );

}


export const customDate = (props) => {

  return (
    <div className="input-text">
      <input
        {...props}
        required
      />
      <span className="border-highlighter"></span>
      <label>{props.placeholder}</label>
    </div>
  );

}


export class Button extends React.Component {
  addRipple = (event) => {
    let elementOffset = this.instance.getBoundingClientRect();
    let elementTop = elementOffset.top + window.scrollY;
    let elementLeft = elementOffset.left + window.scrollX;
    let x = event.pageX - elementLeft;
    let y = event.pageY - elementTop;
    let rippleDiv = document.createElement("div");
    rippleDiv.classList.add('ripple');
    rippleDiv.setAttribute("style", "top:" + y + "px; left:" + x + "px;");
    // let customColor = this.getAttribute('ripple-color');
    // if (customColor) rippleDiv.style.background = customColor;
    event.target.appendChild(rippleDiv);
    setTimeout(function () {
      rippleDiv.parentElement.removeChild(rippleDiv);
    }, 900);
    this.props.onClick();
  }


  render() {
    const { className, value } = this.props;
    return (
      <button ref={(el) => this.instance = el} className={className} onClick={this.addRipple}>{value}</button>
    );
  }
}