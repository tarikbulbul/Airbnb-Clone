import React, { useState } from "react";
import "./DatePicker.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Button from '@mui/material/Button';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';



function DatePicker() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function handleClick() {
    navigate('/search');
  };

  return (
    <div className='date-picker'>
        <DateRangePicker className="range" ranges={[selectionRange]} onChange={handleSelect} />
        <h2>
          Number of guests <PeopleIcon />
        </h2>
        <input min={0} defaultValue={2} type="number" />
        <Button onClick={handleClick}>Search Airbnb</Button>
    </div>
  )
}

export default DatePicker