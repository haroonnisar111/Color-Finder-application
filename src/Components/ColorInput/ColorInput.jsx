import React from 'react';
import { Grid, TextField } from '@mui/material';

const ColorInput = ({ word, handleChange }) => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <TextField
        sx={{ width: '500px' }}
        label='Enter a Color'
        size='small'
        value={word}
        onChange={handleChange}
      />
    </Grid>
  </Grid>
);

export default ColorInput;
