 import useCoustom from '../utility/CoustomHook';
import OrderCard from './OrderCard';

const OrderHolder = ({ categoryName }) => {

    const { categoryData } = useCoustom(categoryName);
    
    return (
        <div className='grid grid-cols-3 gap-11 mt-11'>
            {
                categoryData.map(v => <OrderCard key={Math.random()} obj={v} />)
            }
        </div>
    );
};

export default OrderHolder;