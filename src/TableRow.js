
import React from 'react';

function TableRow({item}) {
    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td><img width={40} height={40} src={item.image} alt={item.name} /></td>
            <td>{item.symbol}</td>
            <td>{item.current_price}</td>
            <td>{item.total_volume}</td>
        </tr>
    );
}

export default TableRow;