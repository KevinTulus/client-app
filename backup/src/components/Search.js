import { useState, useEffect } from "react";

export default function Search(props) {
    const [noAngkot, setNoAngkot] = useState({nomor: ""})
    
    function handleChange(event) {
        setNoAngkot(prevNoAngkot => {
            const {name, value, type, checked} = event.target
            return {
                ...prevNoAngkot,
                [name] : type === "checkbox" ? checked : value                
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(noAngkot);
    }

    // console.log(props.angkot);

    return (
        <form onSubmit={handleSubmit}>
            {/* <input 
                type="text"
                placeholder="Nomor Angkot"
                onChange={handleChange}
                name="nomor"
                value={noAngkot.nomor}
            /> */}
            <select
                id="nomor"
                value={noAngkot.nomor}
                onChange={handleChange}
                name="nomor"
            >
                <option value="">Pilih Nomor Angkot</option>
                {props.angkot.length > 0 && (props.angkot.map(no => (
                    <option key={no.no} value={no.no}>{no.no}</option>
                    // <option value="1">1</option>
                  ))
                )}
            </select>
            <button>Submit</button>
        </form>
    );
}