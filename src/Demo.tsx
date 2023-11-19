import CustomMenu from './components/menu/CustomMenu';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box } from '@mui/material';
const Demo = () => {
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
    </Box>
  );
};

export default Demo;
