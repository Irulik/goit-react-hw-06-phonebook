
import React from 'react';
import { FilterName } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactByName, selectFilter } from '../redux/slice'; 

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {   
    dispatch(filterContactByName(e.target.value));
  };

  return (
    <FilterName>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts..."
        name="name"
      />
    </FilterName>
  );
};