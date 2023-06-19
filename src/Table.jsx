import React from 'react';
import TableRow from './TableRow';

function Table({ data, onDelete }) {
  return (
    <div className="Table">
      <table id="userTable">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Bio</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((row,index) => (
            <TableRow onDelete={() => onDelete(index)} firstName={row.firstName} lastName={row.lastName} bio={row.bio} image={row.image}/>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default Table;
