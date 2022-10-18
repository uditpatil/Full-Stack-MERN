import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductsDisplay = (props) => {

    const {productList, setProductList} = props;
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
            console.log(res.data);
            setProductList(res.data);
        })
            .catch(err => console.log(err))
    },[])

    const deleteFilter = (temp_id) => {
        axios.delete(`http://localhost:8000/api/products/${temp_id}`)
            .then((res) => {
                console.log(res);
                setProductList(productList.filter((product, index) => product._id !== temp_id))
            })
            .catch(err => console.log(err))
    }
    return  (
        <div>
            <h1>
                Display all products
            </h1>
            {
                productList.map((product, index) => (
                    <div key={product._id} className="product-link">
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <Link to={`/products/edit/${product._id}`} className="link-page">edit</Link>
                        <button onClick={()=> deleteFilter(product._id)} className="buton">Delete </button>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductsDisplay;