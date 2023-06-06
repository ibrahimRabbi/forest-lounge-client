 import './about.css'

const About = () => {
    return (
        <section className='w-[90%] mx-auto my-28 '>
            <div className='justify-end flex'>
                <div className='w-1/2 text-right '>
                    <h1 className='text-4xl text-green-700 font-semibold'>--- About Forest Lounge</h1>
                    <hr className='border-2 border-green-600 mt-3' />
                    <p className='mt-2 text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, ab vero harum sit fugiat similique tempora itaque delectus, ratione fuga voluptates eos sapiente, enim</p>
                </div>
           </div>

            <div className='about bg-fixed mt-10 py-32 rounded-xl border-2 border-green-600'>
                <div className='w-1/2 mx-auto text-center bg-slate-100 p-10 rounded-lg'>
                    <h1 className='text-2xl text-green-800 font-bold'>---Forest Lounge---</h1>
                    <p className='mt-4 text-sm text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eius velit omnis, non odio accusamus officia ipsum, laudantium repellat expedita molestias nemo eligendi architecto similique assumenda deleniti veniam dolor a?</p>
              </div>
            </div>
        </section>
    );
};

export default About;