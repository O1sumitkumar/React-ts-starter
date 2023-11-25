import * as React from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';

interface DynamicModalProps {
  open: boolean;
  onClose: () => void;
  primaryButtonColor?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';

  primaryButtonOnClick?: () => void;
  secondaryButtonOnClick?: () => void;
  modalHeading?: string;
  modalText?: string;
  isRTL?: boolean;
}

const DynamicModal: React.FC<DynamicModalProps> = ({
  isOpen,
  onClose,
  primaryButtonColor = 'error',
  primaryButtonOnClick = () => {},
  secondaryButtonOnClick = () => {},
  modalHeading = 'Modal Heading',
  modalText = 'Modal Text',
  isRTL = true,
}) => {
  const [open, setClose] = React.useState<boolean>(false);
  const handleClose = () => setClose(!open);

  return (
    <>
      <Button onClick={handleClose}>Open </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            width: '375px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#ffff',
            borderRadius: '12px',
            boxShadow: 24,
            p: 4,
            textAlign: isRTL ? 'right' : 'left',
          }}
        >
          <Typography variant='h6' component='h2' gutterBottom>
            {modalHeading}
          </Typography>
          <Typography variant='body1' gutterBottom>
            {modalText}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: isRTL ? 'flex-end' : 'flex-start',
              mt: 2,
            }}
          >
            <Box>
              <Button
                onClick={primaryButtonOnClick}
                sx={{ mr: 1 }}
                color={primaryButtonColor}
                variant='contained'
              >
                save
              </Button>
              <Button onClick={secondaryButtonOnClick} variant='contained'>
                cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DynamicModal;
