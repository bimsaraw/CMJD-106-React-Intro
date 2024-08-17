import axios from "axios";
import { useState } from "react";
import CategoryType from "../types/CategoryType";

function Category() {

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [categoryName, setCategoryName] = useState<string>("");

    async function loadCategories() {
        const response = await axios.get("http://localhost:8081/categories"); //it takes 23ms for this API request
        setCategories(response.data);
    }

    function handleCategoryName(event: any) {
        setCategoryName(event.target.value);
    } 

    async function handleSubmit() {
        const data = {
            name: categoryName
        }
        const response = await axios.post("http://localhost:8081/categories", data);
        console.log(response);
        loadCategories();
    }

    return (
        <div>
            <h1>Categories</h1>
            <button onClick={loadCategories}>Load Categories</button>

            {categories && categories.map(function (category: CategoryType) {
                return (
                    <div>
                        {category.name}
                    </div>
                )
            })
            }

            <h2>Create Category</h2>
            <form>
                <label>Category Name</label>
                <input type="text" onChange={handleCategoryName} required/>

                <button type="button" onClick={handleSubmit}>Create Category</button>
            </form>
        </div>
    )
}

export default Category;