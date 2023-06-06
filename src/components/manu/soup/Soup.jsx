import { Link } from "react-router-dom";
import useCoustom from "../../utility/CoustomHook";
import ManuCard from "../../utility/ManuCard";


const Soup = () => {
    const { categoryData } = useCoustom('soup')
    return (
        <div className="mt-20">
            <div className="flex justify-end">
                <div className='w-1/2 text-right'>
                    <h1 className='text-4xl text-green-800 font-semibold'>Soup ---</h1>
                    <hr className='border-2 border-green-700 mt-3' />
                    <p className='mt-2 text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, ab vero harum sit fugiat similique tempora itaque delectus, ratione fuga voluptates eos sapiente, enim</p>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-10 mt-8'>
                {
                    categoryData.map(v => <ManuCard key={Math.random()} obj={v} />)
                }
            </div>
            <div className="text-center mt-10">
                <Link to='/order/soup' className="btn bg-green-700 px-10">Order Now</Link>
            </div>
        </div>
    );
};

export default Soup;