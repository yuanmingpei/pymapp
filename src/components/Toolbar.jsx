import React from 'react'
import ThemedButton from './themed-button'
export default function Toolbar(props) {
  return (
    <div><ThemedButton theme={props.theme} /></div>
  )
}
