import React, { useState, useEffect } from 'react'

const ArgoList = () => {

    
        const [argos, setArgos] = useState([]);

        useEffect(() => {

            const fetchData = async () => {
                const data = await window.fetch('/api/list');
                const json = await data.json();
               
                setArgos(json);
            }
            fetchData();

        }, [])
  
    return (
        <div>
            <h2>Membres de l'équipage</h2>
            <section className="member-list">
            {/* <div class="member-item">Eleftheria</div>
            <div class="member-item">Gennadios</div>
            <div class="member-item">Lysimachos</div> */}
            {argos.map(argo => (
                <div className="member-item" key={argo._id}>{argo.name}</div>
            ))}
            </section>
        </div>
    )
}

export default ArgoList
