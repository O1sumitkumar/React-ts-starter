// @ts-nocheck
import CustomMenu from './components/menu/CustomMenu';
import { Box, Button } from '@mui/material';
import React from 'react';
import FullScreenLoader from './components/loader/FullScreenLoader';
import DynamicModal from './components/dynamicModal/DynamicModal';
import FooterComponent from './components/footer/footer';
// import DatePickerValue from './components/datePicker/DatePicker';
const Demo = () => {
  const [loader, setLoader] = React.useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  // ... other code remains the same
  const options = [
    {
      text: 'Edit',
      icon: 'Edit Icon', // Replace with your icon component or text
      color: 'blue', // Customize color if needed
    },
    {
      text: 'Delete',
      icon: 'Delete Icon', // Replace with your icon component or text
      color: 'red', // Customize color if needed
    },
  ];
  // Array of products (assuming each product has an ID and name)
  const products = [
    { id: 'str36', name: 'Product 1' },
    { id: 'sfe54', name: 'Product 2' },
    // Add more products as needed
  ];

  // Example functions to handle different actions (edit, delete) on products
  const handleEditProduct = (id: string) => {
    console.log(`Editing product with ID: ${id}`);
    // Implement logic to edit the product with the given ID
  };

  const handleDeleteProduct = (id: string) => {
    console.log(`Deleting product with ID: ${id}`);
    // Implement logic to delete the product with the given ID
  };

  // Array of handle functions to pass to CustomMenu
  const handleFunctions = [handleEditProduct, handleDeleteProduct];

  const handleOpenLoader = () => setLoader(true);

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
      <br />

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <CustomMenu
              data={[product]}
              handleFunctions={handleFunctions}
              options={options}
              menuStyles={menuItemStyles}
            />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Demo;
