import React, { Component } from 'react'
import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    console.log(theme,props)
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      >测试按钮</button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
