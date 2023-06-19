import React from 'react';
import Button from './Button';
import InsertForm from './InsertForm';

function TableRow({ firstName, lastName, bio, image, onDelete }) {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{bio}</td>
      <td>{image}</td>
      <Button text={"Delete"} onClick={onDelete}/>
    </tr>
  );
}

export default TableRow;
