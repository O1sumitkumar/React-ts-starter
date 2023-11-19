/* eslint-disable prettier/prettier */
import React from 'react';

interface Option {
  text: string;
  icon: JSX.Element;
  color: string;
  action: () => void;
}

interface OptionsArray {
  options: Option[];
  handleOptionClick: (action: Option['action']) => void;
  menuStyles?: React.CSSProperties;
  menuItemStyles: React.CSSProperties;
}

interface CustomTheme {
  direction: 'ltr' | 'rtl';
  typography: {
    fontFamily: string;
  };
  palette: {
    primary: {
      main: string;
    };
    common: {
      black: string;
      white: string;
    };
    background: {
      default: string;
      paper: string;
    };
  };
}
