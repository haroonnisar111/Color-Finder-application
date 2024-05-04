import React, { useMemo } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ColorCard = ({ color }) => {
  let height = Math.floor(Math.random() * 8) * 30 + 45;

  return useMemo(
    () => (
      <Card
        sx={{
          backgroundColor: color.name,
          color: '#fff',
          height: height,
        }}
      >
        <CardContent key={color.hex}>
          <Typography variant='subtitle1' color='white'>
            {color.hex}
          </Typography>
        </CardContent>
      </Card>
    ),
    [color]
  );
};

export default ColorCard;
