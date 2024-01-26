import * as React from 'react';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment, { Moment } from 'moment';

export default function DatePickerValue(): JSX.Element {
  const [value, setValue] = React.useState<Moment>(moment());
  console.log(moment());
  const handleDateChange = (newValue: Moment | null) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label='Responsive variant'>
        <DatePicker value={value} onChange={handleDateChange} />
      </DemoItem>
    </LocalizationProvider>
  );
}
