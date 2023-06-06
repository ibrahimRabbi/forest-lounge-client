 import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderHolder from './OrderHolder';


const Order = () => {

    const indexNum = ['pizza', 'dessert', 'soup', 'salad', 'drinks']
    const  {category} = useParams();
    const finalIndex = indexNum.indexOf(category)
    const [index, setIndex] = useState(finalIndex);
    
    

    return (
        <section className='order py-36 w-[90%] mx-auto font-semibold '>
            
            <Tabs defaultIndex={index<0 ? 0 : index} onSelect={(index) => setIndex(index)} >
                    <TabList>
                        <Tab>Pizza & Slice</Tab>
                        <Tab>Dessert & Sweets</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Salad & vegetable</Tab>
                        <Tab>Bevarage & Drinks</Tab>
                    </TabList>

                    <TabPanel>
                    <OrderHolder categoryName='pizza'/>
                    </TabPanel>
                    <TabPanel>
                    <OrderHolder categoryName='dessert' />
                    </TabPanel>
                    <TabPanel>
                    <OrderHolder categoryName='soup' />
                    </TabPanel>
                    <TabPanel>
                    <OrderHolder categoryName='salad' />
                    </TabPanel>
                    <TabPanel>
                    <OrderHolder categoryName='drinks' />
                    </TabPanel>
                </Tabs>
           
         </section>
    );
};

export default Order;