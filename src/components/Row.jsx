import React from 'react'

function Row(props) {
    return (
        <tr>
            <td>{props.sno}</td>
            <td>{props.item.name}</td>
            <td>{props.item.branch}</td>
            <td>{props.item.domain}</td>
            <td>
                <div className="actions">
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash"></i>
                </div>
            </td>
        </tr>
    )
}

export default Row;