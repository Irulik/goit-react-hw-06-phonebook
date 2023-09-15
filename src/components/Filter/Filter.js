import React from 'react';
import { FilterName } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../redux/slice';
import { selectFilter } from '../redux/filterSlice'; 

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(filterContact(e.target.value));
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