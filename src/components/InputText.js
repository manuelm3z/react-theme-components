import React, {
  Component
} from 'react';
import styled from 'styled-components';
import {
  get
} from 'lodash';

const StyledInput = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  height: ${props => get(props, 'theme.InputText.height', false) || '32px'};
  padding: 4px 11px;
  color: ${props => get(props, 'theme.InputText.color', false) || 'rgba(0,0,0,0.65)'};
  font-size: ${props => get(props, 'theme.InputText.fontSize', false) || '14px'};
  line-height: 1.5;
  background-color: ${props => get(props, 'theme.InputText.backgroundColor', false) || '#ffffff'};
  background-image: none;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${props => get(props, 'theme.Button.borderColor', false) || '#d9d9d9'};
  -webkit-transition: all .3s;
  transition: all .3s;
  &:hover {
    border-color: ${props => get(props, 'theme.Button.hoverBorderColor', false) || '#40a9ff'};
    border-right-width: 1px !important;
  }
`;

export default class InputText extends Component {
  render() {
    const style = this.props.style;
    const filteredStyles = {};
    if (style) {
      filteredStyles.color = style.color;
      filteredStyles.backgroundColor = style.backgroundColor;
      filteredStyles.borderColor = style.borderColor;
      filteredStyles.height = style.height;
    }
    return (
      <StyledInput
        {...this.props}
        style={filteredStyles}
        type="text" />
    );
  }
}