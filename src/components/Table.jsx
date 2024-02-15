import React from 'react'
import Row from "./Row"

export const Table = ({ users }) => {
    return (
        <table className="table table-striped">
            <thead className='table-dark'>
                <tr>
                    <th scope="col">SNo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Domain</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item, index) => {
                    return <Row key={index} item={item} sno={index + 1} />
                })}
            </tbody>
        </table>
    )
}

export default Table;