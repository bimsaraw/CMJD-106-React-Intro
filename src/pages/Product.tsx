import { useEffect, useState } from "react";
import ProductType from "../types/ProductType";
import axios from "axios";

function Product() {

    const [products, setProducts] = useState<ProductType[]>([]);

    async function loadProducts() {
        const response = await axios.get("http://localhost:8081/products")
        setProducts(response.data);
    }

    useEffect(function () {
        loadProducts();
    }, [])

    return (
        <div>
            <h1>Products</h1>

            {products.map(function (product) {
                return (
                    <div>
                        {product.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Product;