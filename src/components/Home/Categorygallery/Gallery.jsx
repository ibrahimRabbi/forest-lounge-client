 import './gallery.css'
import LazyLoad from 'react-lazy-load';
const Gallery = () => {
    return (
        <section className='mt-28 w-[90%] mx-auto'>
           
            <div className='w-1/2'>
                <h1 className='text-4xl text-green-700 font-semibold'>Food Category ---</h1>
                <hr className='border-2 border-green-600 mt-3' />
                <p className='mt-2 text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, ab vero harum sit fugiat similique tempora itaque delectus, ratione fuga voluptates eos sapiente, enim</p>
            </div>


            <div className="gallery mt-11  gap-6 text-xl">

                <div className='relative hh'>
                    <LazyLoad height={335}>
                        <img className='h-full rounded-lg border border-green-600' src="../../../../public/gallery/bevarage.jpg" alt="" />
                    </LazyLoad>
                    <div className='absolute bottom-4 text-slate-700 font-semibold ml-2'>
                        <h1>Drink & Bevarage</h1>
                        <div className='see mt-2 hidden'>
                            <button className='bg-green-700 btn'>see manu</button>
                        </div>
                    </div>
                </div>

                <div className='relative hh'>
                    <LazyLoad height={335}>
                        <img className='h-full rounded-lg border border-green-600' src="../../../../public/gallery/slide4.jpg" alt="" />
                   </LazyLoad>
                    <div className='absolute bottom-4 text-slate-700 font-semibold ml-2'>
                        <h1>Desert</h1>
                        <div className='see mt-2 hidden'>
                            <button className='bg-green-700 btn'>see manu</button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-slate-100">

                    <div className='relative hh '>
                        <LazyLoad>
                            <img className='rounded-lg border border-green-600' src="../../../../public/gallery/burger.jpg" alt="" />
                       </LazyLoad>
                        <div className='absolute bottom-4  placeholder: font-semibold ml-2'>
                            <h1>Burger & sanduiche</h1>
                            <div className='see mt-2 hidden'>
                                <button className='bg-green-700 btn'>see manu</button>
                            </div>
                        </div>
                    </div>

                    <div className='relative hh'>
                        <LazyLoad>
                            <img className='rounded-lg' src="../../../../public/gallery/pizzaf.jpg" alt="" />
                       </LazyLoad>
                        <div className='absolute bottom-4  before: font-semibold ml-2'>
                            <h1>Pizza & slice</h1>
                            <div className='see mt-2 hidden'>
                                <button className='bg-green-700 btn'>see manu</button>
                            </div>
                        </div>
                    </div>

                    <div className='relative hh'>
                        <LazyLoad>
                            <img className='rounded-lg' src="../../../../public/gallery/stack.jpg" alt="" />
                       </LazyLoad>
                        <div className='absolute bottom-4   font-semibold ml-2'>
                            <h1>Beef Stack</h1>
                            <div className='see mt-2 hidden'>
                                <button className='bg-green-700 btn'>see manu</button>
                            </div>
                        </div>
                    </div>

                    <div className='relative hh'>
                        <LazyLoad>
                            <img className='rounded-lg' src="../../../../public/gallery/setManu.jpg" alt="" />
                       </LazyLoad>
                        <div className='absolute bottom-4   font-semibold ml-2'>
                            <h1>setManu</h1>
                            <div className='see mt-2 hidden'>
                                <button className='bg-green-700 btn'>see manu</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='relative hh'>
                    <LazyLoad height={335}>
                        <img className='h-full rounded-lg border border-green-500' src="../../../../public/gallery/slide5.jpg" alt="" />
                    </LazyLoad>
                    <div className='absolute bottom-4 text-slate-700 font-semibold ml-2'>
                        <h1>Salad</h1>
                        <div className='see mt-2 hidden'>
                            <button className='bg-green-700 btn'>see manu</button>
                        </div>
                    </div>
                </div>

                <div className='relative hh'>
                    <LazyLoad height={335}>
                        <img className='h-full rounded-lg border border-green-600' src="../../../../public/gallery/slide3.jpg" alt="" />
                   </LazyLoad>
                    <div className='absolute bottom-4 text-slate-700 font-semibold ml-2'>
                        <h1>Soup</h1>
                        <div className='see mt-2 hidden'>
                            <button className='bg-green-700 btn'>see manu</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Gallery;