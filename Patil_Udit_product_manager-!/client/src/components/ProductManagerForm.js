import React, { useState} from 'react';
import axios from 'axios';
const ProductManagerForm = (props) => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/manager', {
            title,
            price,
            description,
        })
        .then(res=> {console.log(res);
            console.log(res.data);
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch( err => console.log(err))
    }
    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
                <div className="formI">
                    <label>Title</label>
                    <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <br/>
                <div className="formI">
                    <label>Price</label>
                    <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <br/>
                <div className="formI">
                    <label>Description</label>
                    <input type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <br/>
                <input className="submit-button" type="submit" value="Create"/>
            </form>
        </div>
    )
}

export default ProductManagerForm;