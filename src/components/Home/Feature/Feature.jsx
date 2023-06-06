 import LazyLoad from 'react-lazy-load';
import './feature.css'

const Feature = () => {
    return (
        <section className="mt-28 w-[90%] mx-auto">
            <div className='justify-end flex'>
                <div className='w-1/2 text-right '>
                    <h1 className='text-4xl text-green-700 font-semibold'>----- whats we are provide you !!</h1>
                    <hr className='border-2 border-green-600 mt-3' />
                    <p className='mt-2 text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, ab vero harum sit fugiat similique tempora itaque delectus, ratione fuga voluptates eos sapiente, enim</p>
                </div>
            </div>

            <div className="featureImg bg-fixed border-2 border-green-600 flex justify-center items-center gap-6  h-[70vh] text-slate-100  mt-11 rounded-xl">
                 
                <LazyLoad>
                    <img width={400} className='rounded-xl' src="../../../../public/background/featured.jpg" alt="" />
                   </LazyLoad>
                    <div className='w-1/2'>
                        <span className='text-green-400 block font-semibold text-xl'>March 20,2023</span>
                        <span>where can in get some</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nesciunt harum sint? Dignissimos, repellat incidunt exercitationem unde modi asperiores quas Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, accusantium. Quisquam esse dolorum totam assumenda debitis voluptatem iusto possimus, ratione ipsam alias, ipsum tempore dicta ad obcaecati unde ullam repellendus.</p>
                    </div>
                </div>
            
         </section>
    );
};

export default Feature;