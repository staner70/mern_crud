import React, {useState, useEffect } from 'react';


const ArgoForm = (argo, setArgo) => {
    const [argos, setArgos] = useState([]);
      const [formData, setFormData] = useState('')

    useEffect(() => {

        fetchData()

    }, [])

    const fetchData = async () => {
        const data = await window.fetch('/api/list');
        const json = await data.json();
       
        setArgos(json);
    }
    

    

    const handleSubmit = (event) => {
    event.preventDefault()
    saveArgos() // Save argos when form is submitted
    fetchData();
    }

    const handleChange = (event) => {
        setFormData(event.target.value)
    }

    const saveArgos = () => {
        fetch('/api/argo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData, // Use your own property name / key
          }),
        })
          .then((res) => res.json())
          .then((result) => setFormData(result.rows))
          .catch((err) => console.log('error'))
      }


    return (
        <div>
                 {/* New member form */}
            <h2>Ajouter un(e) Argonaute</h2>
            <form className="new-member-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nom de l&apos;Argonaute</label>
                <input id="name" name="name" type="text" placeholder="Charalampos" value={formData} onChange={handleChange} />
                <button type="submit">Envoyer</button>
            </form>

            <div>
            <h2>Membres de l'équipage</h2>
            <section className="member-list">

            {argos.map(argo => (
                <div className="member-item" key={argo._id}>{argo.name}</div>
            ))}
            
            </section>
            </div>
           
        </div>
    )
}

export default ArgoForm
