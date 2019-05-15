import React, {
  Component
} from 'react';
import styled from 'styled-components';
import {
  get
} from 'lodash';

const StyledButton = styled.button`
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: ${props => get(props, 'theme.Button.color', false) || '#ffffff'};
  cursor: pointer;
  font-size: ${props => get(props, 'theme.Button.fontSize', false) || '16px'};
  font-weight: 400;
  height: 40px;
  padding: 15 0 15 0;
  background-color: ${props => get(props, 'theme.Button.backgroundColor', false) || '#1890ff'};
  border-color: ${props => get(props, 'theme.Button.borderColor', false) || '#1890ff'};
  transition: all .3s 
  &:hover {
    background-color: ${props => get(props, 'theme.Button.hoverBackgroundColor', false) || '#40a9ff'};
    border-color: ${props => get(props, 'theme.Button.hoverBorderColor', false) || '#40a9ff'};
    color: ${props => get(props, 'theme.Button.hoverColor', false) || '#ffffff'};
  }
`;

class Button extends Component {
  render() {
    const {
      onClick,
      style
    } = this.props;
    const filteredStyles = {};
    if (style) {
      filteredStyles.color = style.color;
      filteredStyles.backgroundColor = style.backgroundColor;
      filteredStyles.borderColor = style.borderColor;
      filteredStyles.fontSize = style.fontSize;
    }
    return (
      <StyledButton
        onClick={onClick}
        style={filteredStyles}
        type="button"
      >{this.props.children}</StyledButton>
    );
  }
}

export default Button;