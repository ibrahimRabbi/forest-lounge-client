 import './manu.css'
import Pizza from './pizza/Pizza';
import Dessert from './dessert/Dessert';
import Salad from './salad/Salad';
import Soup from './soup/Soup';
import Drinks from './drinks/Drinks';

const Manu = () => {

   
    return (
        <section className="manu bg-fixed">
            <div className='pt-36 pb-11 w-[90%] mx-auto'>
                <Pizza/>
                <Dessert/>
                <Salad/>
                <Soup/>
                <Drinks/>
            </div>
        </section>
    );
};

export default Manu;