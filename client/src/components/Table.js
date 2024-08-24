import React from 'react'

export default function CommitteeTable({ data }) {
    const members = JSON.parse(data.Members);
    const columns = ["Sr No.", "Faculty Name", "Designation", "Mobie Number"]
    return (
        <>
            <table border="1px" className='table'>
                <thead>
                    <tr>
                        {columns.map((c, index) => (
                            <td key={index}>{c}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td>1</td>
                        <td>{data.ChairmanName}</td>
                        <td>Chairman</td>
                        <td>{data.ChairmanMobileNumber}</td>
                    </tr>
                    {
                        members.map((member, index) => (
                            <tr key={index}>
                                <td>{index + 2}</td>
                                <td>{member.name}</td>
                                <td>Member</td>
                                <td>{member.number}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export function Table({ data }) {
    return (
        <>
            {console.log(data)}
            <table border="1px" className='table'>
                <thead>
                    <tr>
                        {data[0].columns.map((c, index) => (
                            <th key={index}>{c}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        data[1].rows.map((row, index) => (
                            <tr key={index}>
                                {row.map((d, i) => (
                                    <td key={i}>{d}</td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}