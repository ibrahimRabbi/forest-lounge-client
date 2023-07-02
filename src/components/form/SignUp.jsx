import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../context/AuthContext';
import { useContext } from 'react';
import './form.css'



const SignUp = () => {

    const { signUp, profile } = useContext(Context)
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        signUp(email, pass)
            .then(res => {
                if (res.user) {
                    profile(res.user, name, photo)
                    fetch(`https://forest-lounge-server.vercel.app/user`, {
                        method: "POST",
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify({ name, email })
                    })
                        .then(res => res.json())
                        .then(res => {
                            if (res.insertedId) {
                                e.target.reset()
                                navigate('/')
                            }
                        })

                }
            })
            .catch(err => console.log(err.message))
    }



    return (

        <section className="flex items-center mx-auto signin" >

            <div className=" text-center bg-slate-50 m-auto my-10 py-5 rounded-lg lg:w-[50%] w-[90%]">
                <h1 className="text-green-700 text-2xl font-semibold">Sign Up</h1>
                <form onSubmit={submitHandler} className="m-7 flex flex-col gap-7 p-10" >
                    <input type="text" name='name' placeholder="user name" className="input input-bordered border-green-700 w-full" required />
                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered border-green-700 w-full" required />
                    <input type="email" name='email' placeholder="Email" className="input input-bordered border-green-700 w-full" required />
                    <input type="password" name='password' placeholder="password" className="input input-bordered border-green-700 w-full" required />
                    <p className='text-red-600 font-semibold mb-2'> </p>
                    <input className=" font-semibold border bg-green-700 p-3 rounded-lg text-slate-50" type="submit" value='Sign Up' />
                    <p className="font-semibold">already have an account ? <Link to='/signin' className="text-green-600 font-semibold">Sign In</Link></p>
                    <div className="divider">OR</div>
                </form>
                <div className="flex justify-center mt-5">

                </div>
            </div>


        </section>
    );
};

export default SignUp;