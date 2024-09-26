export function TablePart({part}) {
    return (
        <table className="table">
            <tbody>
            <tr>
                <th scope="row">ID</th>
                <td>{part.id}</td>
            </tr>
            <tr>
                <th scope="row">NAME</th>
                <td>{part.title}</td>
            </tr>
            <tr>
                <th scope="row">PRICE</th>
                <td>{part.price}</td>
            </tr>
            </tbody>
        </table>
    )
}
