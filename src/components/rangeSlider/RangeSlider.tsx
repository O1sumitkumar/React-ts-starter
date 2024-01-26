import { Box, Slider } from '@mui/material';
import React from 'react';

interface RangeSliderI {
  handleRange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  steps: number;
}

const RangeSlider: React.FC<RangeSliderI> = ({ ...props }) => {
  return (
    <Box sx={{ width: 300 }}>
      <Slider {...props} />
    </Box>
  );
};

export default RangeSlider;
