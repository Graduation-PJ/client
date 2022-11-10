import React, {useEffect} from 'react';
import axios from "axios";

function MyPage() {
    useEffect(()=>{
        axios.get('http://localhost:8080/getUser', {withCredentials: true}
        ).then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error);
        })
    })
    return (
        <div className="my_page">
            my_page
        </div>
    );
}

export default MyPage;