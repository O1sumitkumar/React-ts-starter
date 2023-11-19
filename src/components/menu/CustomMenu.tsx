import React, { FC } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { CustomTheme, OptionsArray } from '../../types/Menu';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const CustomMenu: FC<OptionsArray> = ({
  options,
  handleOptionClick,
  menuItemStyles,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme<CustomTheme>();

  const StyledMenu = styled(Menu)({
    '& .MuiList-root, & .MuiMenu-list': {
      padding: '8px', // Remove padding for List in the Menu
    },
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.background.default, // Customize background color
      borderRadius: '12px', // Customize border radius
      // padding: '0px 8px 0px 8px',
    },
  });

  const handleClick = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Menu</button>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => handleOptionClick(option.action)}
            style={menuItemStyles}
          >
            <ListItemIcon>
              <span style={{ color: option.color, height: '24px' }}>
                {option.icon}
              </span>
            </ListItemIcon>
            <Typography variant='inherit'>{option.text}</Typography>
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default CustomMenu;
