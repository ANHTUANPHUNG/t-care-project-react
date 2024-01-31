import React from 'react'
import { Button } from '@mui/material';
export default function ButtonClick({onclick}) {
    return (
        <Button onClick={onclick}>Liên hệ</Button>
      );
}
