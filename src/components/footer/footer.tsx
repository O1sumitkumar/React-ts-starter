import { Box, Button } from '@mui/material';
import { FC } from 'react';

interface FooterI {
  contained: string;
  containedOnClick: () => void;
  outlined?: string;
  outlinedOnClick?: () => void;
  text?: string;
  textOnClick?: () => void;
}

const FooterComponent: FC<FooterI> = ({
  contained,
  containedOnClick,
  outlined,
  outlinedOnClick,
  text,
  textOnClick,
}) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'pink',
          position: 'fixed',
          bottom: '0',
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: '20px',
          p: {
            xs: '12px 16px 12px 16px',
            sm: '16px 24px 16px 24px',
            md: '20px 40px 20px 40px',
          },
        }}
      >
        {contained && (
          <Button
            variant='contained'
            onClick={containedOnClick}
            sx={{ p: '11px 40px 11px 40px' }}
          >
            {contained}
          </Button>
        )}
        {outlined && (
          <Button
            variant='outlined'
            onClick={outlinedOnClick}
            sx={{ p: '11px 40px 11px 40px' }}
          >
            {outlined}
          </Button>
        )}
        {text && (
          <Button
            variant='text'
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
            }}
            onClick={textOnClick}
          >
            {text}
          </Button>
        )}
      </Box>
    </>
  );
};
export default FooterComponent;
