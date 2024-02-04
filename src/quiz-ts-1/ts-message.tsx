import React from 'react';

import { Box } from '@mui/material';

interface MessageProps {
  message?: string;
}

function MessageDisplay({ message }: MessageProps) {
    
  return (
    <Box>
      {message ? <p>{message}</p> : <p>No hay mensaje.</p>}
    </Box>
  );
}

export default MessageDisplay;