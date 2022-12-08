import { createTheme } from '@mui/material/styles';
import {
  red,
  deepPurple
} from '@mui/material/colors';

const { palette } = createTheme();
export const lightTheme = createTheme({
  palette: {
    primary: deepPurple,
    rose: palette.augmentColor({
      color: {
        main: "#FFE4E1"
      }
    }),
    //purple: cyan,
  },
});
