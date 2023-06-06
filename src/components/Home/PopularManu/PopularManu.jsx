 import { Link } from "react-router-dom";
import useCoustom from "../../utility/CoustomHook";
 import ManuCard from "../../utility/ManuCard";

 
const PopularManu = () => {
 
    const {categoryData} = useCoustom('popular');
    
    return (
        <section className='w-[90%] mx-auto my-28 '>
            <div className='w-1/2  '>
                <h1 className='text-4xl text-green-700 font-semibold'>Our Manu ---</h1>
                <hr className='border-2 border-green-600 mt-3' />
                <p className='mt-2 text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, ab vero harum sit fugiat similique tempora itaque delectus, ratione fuga voluptates eos sapiente, enim</p>
            </div>

            <div className="mt-11 grid grid-cols-2 gap-10">
                {
                    categoryData.map(v => <ManuCard key={Math.random()} obj={v} />)
                 }
            </div>
            <div className="text-center">
                <Link to='manu' className="btn bg-green-800 mt-14">see all Items</Link>
            </div>
         </section>
    );
};

export default PopularManu;
