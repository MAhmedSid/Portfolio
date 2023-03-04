import { Box } from '@chakra-ui/react';
import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import { useWindowSize } from '@react-hook/window-size';

const SubmitConfetti = (props) => {
  
  //external hook for getting current width(require for confetti positioning)
  const [width, height] = useWindowSize()

  return ( 
 <Box  >
 {props.isExploding && <ConfettiExplosion colors={["#fcba03","#3381f5","#5324f0"]}  duration="3000" particleCount="350" width={width}/>}
 </Box>
  )
}

export default SubmitConfetti
