import React from 'react'

import Box from '@mui/material/Box';
interface TsBasicsProps {
 basics: string[];
}

function TsBasics({basics}: TsBasicsProps) {

  const [basicsTotal, setBasicsTotal] = React.useState(0);
  React.useEffect(() => {
    setBasicsTotal(basics.length)
  },[])

  return  (
  <Box>
    <h1>Total:{basicsTotal}</h1>
    <ul>
      {basics.map((basics) =>(
        <li key={basics}>{basics}</li>
      ))}
    </ul>
  </Box>
  )
}
export default TsBasics;