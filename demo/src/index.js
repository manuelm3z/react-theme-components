import React, {
  Component
} from 'react'
import {
  render
} from 'react-dom'

import {
  Button,
  InputText,
  Title,
  Provider
} from '../../src'

class Demo extends Component {
  render() {
    return <div style={{
      maxWidth: 900,
      margin: '0 auto'
    }}>
      <div>
        <h1 style={{
          fontSize: 54
        }}>Demo</h1>
        <div>
          <Title>This is the title with default values</Title>
        </div>
        <div>
          <Button>This is a button with default values</Button>
        </div>
        <div style={{
          width: 250,
          marginTop: 20
        }}>
          <InputText placeholder="This is a text field with default values"/>
        </div>
      </div>
      <hr />
      <Provider theme={{
        Button: {
          backgroundColor: '#ffffff',
          borderColor: 'rgb(217, 217, 217)',
          color: 'rgba(0, 0, 0, 0.65)',
          hoverBackgroundColor: '#ffffff',
          hoverBorderColor: 'rgb(64, 169, 255)',
          hoverColor: 'rgb(64, 169, 255)'
        },
        InputText: {
          height: '20px'
        }
      }}>
        <div>
          <div>
            <Title>This is the title with a theme</Title>
          </div>
          <div>
            <Button>This is a button with a theme</Button>
          </div>
          <div style={{
            width: 250,
            marginTop: 20
          }}>
            <InputText placeholder="This is a text field with a theme"/>
          </div>
        </div>
      </Provider>
      <hr />
      <div>
          <div>
            <Title style={{
              color: 'red'
            }}>This is the title with inline style</Title>
          </div>
          <div>
            <Button
              style={{
                color: 'red'
              }}
              >This is a button with inline style</Button>
          </div>
          <div style={{
            width: 250,
            marginTop: 20
          }}>
            <InputText
              style={{
                color: 'red'
              }}
              placeholder="This is a text field with inline style"/>
          </div>
        </div>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
