import {  useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";
import { Context } from "../../context/AuthContext";
import useCoustom from "../../utility/CoustomHook";
 
 

const Alluser = () => {

   
    const { user } = useContext(Context)
    const {users,userRefetch}=useCoustom()




    const makeAdminhandler = (id) => {
        const obj = {role:'admin'}
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body : JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount > 0) {
                     userRefetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Admin make successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
           })
    }


   
    return (
        <section>
            
            <div className="overflow-x-auto w-full">
                <table className="table border" >
                    <thead>
                        <tr >
                            <th>number</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          users.map((value, index) => {
                                console.log()
                                return (
                                    <tr key={value._id}>
                                        <th>{index + 1}</th>
                                        <td className="indicator">
                                            {user?.email === value.email ? <span className="indicator-item badge badge-secondary">you</span> : ''}
                                            <span>{value.name}</span>
                                        </td>
                                        <td>{value.email}</td>
                                        <td>{value.role == 'admin' ? "Admin" : <button onClick={() => makeAdminhandler(value._id)}><MdAdminPanelSettings className="text-4xl text-yellow-400" /></button>}</td>
                                        <td><button><FaTrash className="text-red-600 text-2xl ml-2" /></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Alluser;