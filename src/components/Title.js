import React from 'react';
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

const Title = ({ style, children }) => (
  <StyledTitle
    style={(style ? {
      color: style.color,
      fontSize: style.fontSize
    } : {})}
    >{children}</StyledTitle>
);

export default Title;