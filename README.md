# react-theme-components

[![GitHub version](https://badge.fury.io/gh/manuelm3z%2Freact-theme-components.svg)](https://badge.fury.io/gh/manuelm3z%2Freact-theme-components)

## How to install?

```
npm i react-theme-components
```
## Basic use
```js
import { Button } from 'react-theme-components'

...
render() {
  return (
    <Button>This is a button</Button>
  );
};
```

## Inline style
```js
import { Button } from 'react-theme-components'

...
render() {
  return (
    <Button
      style={{
        color: 'red'
      }}
      >This is a button</Button>
  );
};
```
### Editable attributes inline style
#### Button

| Property | Default | Type | Values |
|-----------------|---------|-------|----------|
| color | `#ffffff` | String | hex, rgb |
| fontSize | `16px` | String, Number | font-size values |
| backgroundColor | `#1890ff` | String | hex, rgb |
| borderColor | `#1890ff` | String | hex, rgb |

#### InputText

| Property | Default | Type | Values |
|-----------------|---------|-------|----------|
| height | `32px` | String, Number | height values |
| color | `rgba(0,0,0,0.65)` | String | hex, rgb |
| fontSize | `14px` | String, Number | font-size values |
| backgroundColor | `#ffffff` | String | hex, rgb |
| borderColor | `#d9d9d9` | String | hex, rgb |

#### Title

| Property | Default | Type | Values |
|-----------------|---------|-------|----------|
| color | `#0d1a26` | String | hex, rgb |
| fontSize | `30px` | String, Number | font-size values |

## You can create a theme
```js
import { Button, Title, Provider } from 'react-theme-components'

...
render() {
  return (
    <Provider theme={{
      Button: {
        color: 'red'
      },
      Title: {
        color: 'red'
      }
    }}>
      <Button>This is a button</Button>
      <Title>This is a Title</Title>
    </Provider>
  );
};
```

### Editable attributes through the theme
#### Button

| Property | Default | Type | Values |
|-----------------|---------|-------|----------|
| color | `#ffffff` | String | hex, rgb |
| fontSize | `16px` | String | font-size values |
| backgroundColor | `#1890ff` | String | hex, rgb |
| borderColor | `#1890ff` | String | hex, rgb |
| hoverBackgroundColor | `#40a9ff` | String | hex, rgb |
| hoverBorderColor | `#40a9ff`| String | hex, rgb |
| hoverColor | `#ffffff` | String | hex, rgb |

#### InputText

| Property | Default | Type | Values |
|-----------------|---------|-------|----------|
| height | `32px` | String | height values |
| color | `rgba(0,0,0,0.65)` | String | hex, rgb |
| fontSize | `14px` | String | font-size values |
| backgroundColor | `#ffffff` | String | hex, rgb |
| borderColor | `#d9d9d9` | String | hex, rgb |
| hoverBorderColor | `#40a9ff`| String | hex, rgb |

#### Title

| Property | Default | Type | Values |
|-----------------|---------|-------|----------|
| color | `#0d1a26` | String | hex, rgb |
| fontSize | `30px` | String | font-size values |