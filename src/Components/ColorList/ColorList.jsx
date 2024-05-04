import React from 'react';
import Masonry from '@mui/lab/Masonry';
import ColorCard from './ColorCard';
import { Grid, Typography, Box, LinearProgress } from '@mui/material';

const ColorList = ({ colors, isLoading }) => {
  return (
    <Grid item xs={12} mt={3}>
      {isLoading ? (
        <LinearProgress color='success' />
      ) : (
        <>
          {colors && colors.length > 0 ? (
            <Masonry columns={4} spacing={2} defaultHeight={450} sequential>
              {colors.map((color, index) => (
                <ColorCard key={index} color={color} />
              ))}
            </Masonry>
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 200,
                border: '2px dashed #ccc',
                borderRadius: 4,
                bgcolor: '#f9f9f9',
              }}
            >
              <Typography variant='body1' color='textSecondary'>
                No colors found.
              </Typography>
            </Box>
          )}
        </>
      )}
    </Grid>
  );
};

export default ColorList;
