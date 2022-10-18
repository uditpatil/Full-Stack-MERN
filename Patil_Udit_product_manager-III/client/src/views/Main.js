import React, {useState, useEffect} from 'react';
import ProductManagerForm from '../components/ProductManagerForm';
import ProductsDisplay from '../components/ProductsDisplay';

const Main = (props) => {

    const [productList, setProductList] = useState([]);
    return(
        <div>
            <ProductManagerForm productList={productList} setProductList={setProductList} />
            <ProductsDisplay productList={productList} setProductList={setProductList}/>
        </div>
    )
}

export default Main;