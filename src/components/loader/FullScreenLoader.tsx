import { Backdrop, CircularProgress } from '@mui/material';
import { FC } from 'react';

interface FullScreenLoaderType {
  open: boolean;
}

const FullScreenLoader: FC<FullScreenLoaderType> = ({ open }) => {
  return (
    <>
      <Backdrop open={open}>
        <CircularProgress />
      </Backdrop>{' '}
    </>
  );
};

export default FullScreenLoader;
