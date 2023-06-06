 
import { useState } from 'react';
import Swal from 'sweetalert2';
import './additems.css'



const AddItems = () => {
 

    const api = import.meta.env.VITE_IMG_HOSTING_API_KEY
     
    const onSubmitHandler = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const detials = e.target.detials.value;

        const fromData = new FormData()
        fromData.append('image', e.target.image.files[0])

        fetch(`https://api.imgbb.com/1/upload?key=${api}`, {
            method: "POST",
            body : fromData
        })
        .then(res => res.json())
            .then(res => {
                fetch('http://localhost:5000/manu', {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ name, category, price:parseFloat(price), image:res.data.display_url, detials })
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'item added successfull',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            } )
 
    } 

    return (
        <div className="w-[80%] ml-28 p-14 border rounded-lg">
            <div className='text-center mb-11 text-green-700'>
                <h1 className='text-4xl'>--Add Items--</h1>
                <hr className='border-1 border-green-500 mt-4 w-1/2 mx-auto '/>
           </div>
     <form onSubmit={onSubmitHandler} className="grid" >          
        <input type="text" name="name" placeholder="recipe name" className="border border-green-600 name p-3 rounded-lg" required />
                <select name='category' defaultValue='pizza' className="select w-full border-green-600 max-w-xs" required>
                    <option disabled>Pick your food category</option>
                    <option>pizza</option>
                    <option>dessert</option>
                    <option>salad</option>
                    <option>soup</option>
                </select>
                <input type="text" name="price" placeholder="price" className="border border-green-600  p-3 rounded-lg" required />
                <textarea name='detials' className="textarea border border-green-600 name" placeholder="Bio" required></textarea>
                <input type='file' name='image' className="file-input file-input-bordered border-green-600 w-full max-w-xs" required />
                <input className='bg-green-700 text-slate-50  py-3 rounded-lg name' type="submit" value='Submit' />
    </form>
</div>
    );
};

export default AddItems;