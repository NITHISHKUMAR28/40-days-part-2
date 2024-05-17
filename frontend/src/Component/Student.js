import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Student() {
    const [list, setList] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Extract username from the URL
        const url = new URL(window.location.href);
        const usernameParam = url.searchParams.get('name');
        setUsername(usernameParam || ''); // Set username to empty string if not provided

        // Fetch data
        axios.get('http://localhost:3002/teacher')
            .then(res => { setList(res.data); })
            .catch(err => { console.log(err); });
    }, []);
    return (
        <div className="container">
            <h1>Welcome, {username}</h1>
            <div className="row">
                {list.map(x => (
                    <div key={x.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={x.Template} width="10vw" height="300vh" alt={x.UserName} style={{ width: "100%" }} />
                            <div className="card-body">
                                <h5 className="card-title">{x.UserName}</h5>
                                <p className="card-text">{x.VideoName}</p>
                                <p className="card-text">{x.VideoDescription}</p>
                                <button className="btn btn-primary" onClick={() => { window.location.href = x.link }}>View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Student;
