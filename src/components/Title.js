import React, {
  Component
} from 'react';
import styled from 'styled-components';
import {
  get
} from 'lodash';

const StyledTitle = styled.h1`
  margin-top: 8px;
  margin-bottom: 20px;
  color: ${props => get(props, 'theme.Title.color', false) || '#0d1a26'};
  font-weight: 500;
  font-size: ${props => get(props, 'theme.Title.fontSize', false) || '30px'};
  font-family: Avenir,-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',sans-serif;
  line-height: 38px;
`;

export default class Title extends Component {
  render() {
    const style = this.props.style;
    const filteredStyles = {};
    if (style) {
      filteredStyles.color = style.color;
      filteredStyles.fontSize = style.fontSize;
    }
    return (
      <StyledTitle
        style={filteredStyles}
        >{this.props.children}</StyledTitle>
    );
  }
}