import React from 'react'
import { Button } from 'react-bootstrap';
import stl from './button.module.css';

const button = ({name,bg}) => {
  return (
    <div>
      <Button className={stl.btn} style={{background:bg==1?'#4232C2':'none'}}>{name}</Button>
    </div>
  )
}

export default button
