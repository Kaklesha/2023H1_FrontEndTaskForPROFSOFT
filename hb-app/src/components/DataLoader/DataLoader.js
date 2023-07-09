import { useEffect, useState } from "react";

import Spinner from "../spinner/spinner";

function AAA(props) {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('http://localhost:9000/api/employees', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            })
        .then(response =>  response.json())
        .then(data => {
            setData(data);
        })
        .catch(e => console.log(e))
    }, [])

    return (
        <div style={{color: "white"}}>
            {data ? props.loadData(data) : <Spinner/>}
        </div>
    )
}

export default AAA;