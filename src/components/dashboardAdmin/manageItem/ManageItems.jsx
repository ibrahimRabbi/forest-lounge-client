import useCoustom from "../../utility/CoustomHook";
import { BiEdit } from "react-icons/bi"
import { FaTrash } from "react-icons/fa";
 
const ManageItems = () => {

    const {allData}=useCoustom()
    return (
        
            <div className="overflow-x-auto w-full my-11 ml-11" >
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>number</th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Update</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        allData.map((value, index) => <tr key={value._id}>
                                <th>{index+1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={value.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            <td>{value.name}</td>
                            <td>
                                <button className="flex gap-2 items-center text-black bg-yellow-400 btn border-0">UPDATE <BiEdit/></button>
                            </td>
                            <td><button><FaTrash className="text-red-600 text-2xl ml-2" /></button></td>
                        </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
       
    );
};

export default ManageItems;