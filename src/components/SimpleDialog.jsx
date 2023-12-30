import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

export default function SwipeableTemporaryDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);

 

 

  return (
    <div>
      <Button onClick={()=>setIsOpen(true)}>Toggle Drawer</Button>
      <SwipeableDrawer
        BackdropProps={{ invisible: true }}
        anchor="top"
        open={isOpen}
        onClose={()=>setIsOpen(false)}
        onOpen={()=>setIsOpen(true)}
        sx={{
          '& .MuiDrawer-paper': {
            top: '72px',
            height:'30vh',
            width: '15%',
            left: '80%',
            border: '2px solid #ebebeb',

          },
        }}
      >
        <Box
      sx={{
        width: '100%',
      }}
      role="presentation"
      onClick={() => setIsOpen(false)}
      onKeyDown={() => setIsOpen(false)}
    >
      <div className="modal-profile-content">aaaaa</div>
    </Box>
      </SwipeableDrawer>
    </div>
  );
}
