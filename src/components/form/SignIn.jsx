import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect,useState, useRef, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../context/AuthContext';
import './form.css'

const SignIn = () => {

    const refearence = useRef();
    const [desable, setDisable] = useState(true);
    const {signIn} = useContext(Context)
    const navigate = useNavigate()
    const locationHistory = useLocation()
    const path = locationHistory.state?.from?.pathname || '/'
    


    
    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        signIn(email, pass)
            .then(() => {
            navigate(path)
            })
        .catch(err=>console.log(err.message))
        
    }


    const captchaVerified = (e) => {
        //const captchaValue = refearence.current.value;
        const captchaValue = e.target.value

        if (validateCaptcha(captchaValue) == true) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    




    return (
        <section className="flex items-center mx-auto signin" >

            <div className=" text-center bg-slate-50 m-auto my-10 py-5 rounded-lg lg:w-[50%] w-[90%]">
                <h1 className="text-green-600 text-2xl font-semibold">Sign In</h1>
                <form onSubmit={submitHandler} className="m-7 flex flex-col gap-7 p-10" >
                    <input type="email" name='email' placeholder="Email" className="input input-bordered border-green-600 w-full" required />
                    <input type="password" name='password' placeholder="password" className="input input-bordered border-green-600 w-full" required />
                    
                    <div className=' flex justify-between'>
                        <LoadCanvasTemplate/>                    
                            <div className="form-control">
                                <div className="input-group">
                                <input onBlur={captchaVerified} ref={refearence} type="text" placeholder="enter your captcha" className="input input-bordered" />
                                   
                                </div>
                            </div>
                       
                    </div>
                    <p className='text-red-600 font-semibold mb-2'> </p>
                    <input disabled={false} className="btn border-0 bg-green-600" type="submit" value='Sign Up' />
                    <p className="font-semibold">dont have an account ? <Link to='/signup' className="text-green-600 font-semibold">Sign Up</Link></p>
                    <div className="divider">OR</div>
                </form>
                <div className="flex justify-center mt-5">

                </div>
            </div>


        </section>
    );
};

export default SignIn;