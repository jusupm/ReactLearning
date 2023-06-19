import React from 'react';
import Table from './Table';

function FillTable({data, onDelete}) {
  return (
    data.length !== 0 && <Table data={data} onDelete={onDelete} />
  );
}

export default FillTable;