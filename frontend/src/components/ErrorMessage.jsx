import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = ({variant,children}) => {

    const [show, setShow] = useState(true)
    if(show)
    {
       return (
    <Alert variant={variant} style={{fontSize:20 ,backgroundColor:"#f5c2c7",borderColor:"#f8d7da",color:"#842029"}} onClose={() => setShow(false)} dismissible>
    <Alert.Heading>{children}</Alert.Heading>
    
  </Alert>
  )  
    }
 
}

export default ErrorMessage;