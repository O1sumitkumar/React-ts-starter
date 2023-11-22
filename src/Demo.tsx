import CustomMenu from './components/menu/CustomMenu';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button } from '@mui/material';
import React from 'react';
import FullScreenLoader from './components/loader/FullScreenLoader';
import DynamicModal from './components/dynamicModal/DynamicModal';
import FooterComponent from './components/footer/footer';
const Demo = () => {
  const [loader, setLoader] = React.useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  // ... other code remains the same
  const handleEdit = () => {
    // Perform edit action
    console.log('Edit clicked');
  };

  const handleDelete = () => {
    // Perform delete action
    console.log('Delete clicked');
  };

  const handlePreview = () => {
    // Perform preview action
    console.log('Preview clicked');
  };

  const options = [
    { text: 'Edit', icon: <EditIcon />, color: 'blue', action: handleEdit },
    {
      text: 'Delete',
      icon: <DeleteIcon />,
      color: 'red',
      action: handleDelete,
    },
    {
      text: 'Preview',
      icon: <VisibilityIcon />,
      color: 'green',
      action: handlePreview,
    },
  ];

  const handleOptionClick = (action: () => void) => {
    action(); // Call the respective action function
  };

  const handleOpenLoader = () => {
    setLoader(true);
  };

  const handleModal = () => {
    setOpenModal(true);
  };

  const menuItemStyles = {
    // Customize individual menu item styles here
    // Example:
    padding: '6px 10px 6px 5px',
    // borderBottom: '1px solid #ccc',
    borderRadius: '6px',
    color: 'black',
    fontWeight: 600,
    // Add any other styles as needed
  };
  return (
    <Box>
      <h1>Example Component</h1>
      <CustomMenu
        menuItemStyles={menuItemStyles}
        options={options}
        handleOptionClick={handleOptionClick}
      />
      <br />
      <br />
      <Button variant='contained' onClick={handleOpenLoader}>
        Loader
      </Button>
      <FullScreenLoader open={loader} />
      <br />
      <br />
      <DynamicModal
        open={openModal}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Button variant='text' color='warning' onClick={handleModal}>
        Open Modal
      </Button>
      <FooterComponent
        contained={'Save'}
        outlined={'Back'}
        text={'Cancel'}
        containedOnClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </Box>
  );
};

export default Demo;
