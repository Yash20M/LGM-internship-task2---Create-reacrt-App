import React, { useState, useEffect } from "react";

const Data = () => {

    const [button, setButton] = useState([]);
    const [orgData, setOrgData] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const api = "https://reqres.in/api/users?page=1";
            const res = await fetch(api);
            const data = await res.json();
            setOrgData(data.data)
        }
        fetchData()
    }, []);

    const Clicked = () => {
        setButton(orgData);
    }

    return (
        <>
            <nav>
                <button data-text="Awesome" className="button" onClick={Clicked}>
                    <span className="actual-text">&nbsp;GetUser&nbsp;</span>
                    <span className="hover-text" aria-hidden="true">&nbsp;GetUser&nbsp;</span>
                </button>
            </nav>

            <div className="container" >
                {
                    button.map((element, index) => {
                        return (
                            <>
                                <div className="main_box" key={index}>
                                    <div className="img_box">
                                        <img src={element.avatar} alt="" />
                                    </div>
                                    <div className="info">
                                        <p><span>id:</span>{element.id}</p>
                                        <p><span>FirstName:</span>{element.first_name}</p>
                                        <p><span>LastName:</span>{element.last_name}</p>
                                        <p><span>email:</span>{element.email}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div >
        </>
    )
};

export default Data;