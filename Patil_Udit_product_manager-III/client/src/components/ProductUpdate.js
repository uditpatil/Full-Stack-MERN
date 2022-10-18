import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductUpdate = (props) => {
    const {id} = useParams();
    const [ title, setTitle ] = useState("");
    const [ price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) =>{
                console.log(res.body);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);

            })
            .catch(err => console.log(err))
    }, [])

    const onSubmitHandler = (e) =>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`,{
        title,
        price,
        description,
        })
            .then((res) => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h2>Product Manager</h2>
                <div className="formI">
                    <label>Title</label>
                    <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <br/>
                <div className="formI">
                    <label>Price</label>
                    <input type="number" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
                </div>
                <br/>
                <div className="formI">
                    <label>Description</label>
                    <input type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <br/>
                <input className="submit-button" type="submit" value="Update"/>
            </form>
        </div>
    )
}

export default ProductUpdate;