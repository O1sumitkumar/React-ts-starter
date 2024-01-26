import React, { FC, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { CustomTheme, OptionsArray } from '../../types/Menu';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

interface CustomMenuProps extends OptionsArray {
  data: Array<{ id: string; name: string }>;
  handleFunctions: Array<(id: string) => void>;
}

const CustomMenu: FC<CustomMenuProps> = ({
  options,
  handleFunctions,
  data,
  menuItemStyles,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFunctionClick = (func: (id: number) => void, id: number) => {
    func(id);
    handleClose();
  };

  return (
    <div>
      <button onClick={handleClick}>Open Menu</button>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {data.map((item) => (
          <div key={item.id}>
            {options.map((option, index) => (
              <MenuItem
                key={index}
                onClick={() =>
                  handleFunctionClick(handleFunctions[index], item.id)
                }
                style={menuItemStyles}
              >
                <ListItemIcon>
                  <span style={{ color: option.color, height: '24px' }}>
                    {option.icon}
                  </span>
                </ListItemIcon>
                <Typography variant='inherit' sx={{ color: option.color }}>
                  {option.text}
                </Typography>
              </MenuItem>
            ))}
          </div>
        ))}
      </StyledMenu>
    </div>
  );
};

export default CustomMenu;
