import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, signInPopUp, updateUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    const googleSignIn = () => {
        setLoginError('');
        signInPopUp()
            // console.log(signInPopUp)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: user.displayName,
                    email: user.email,
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(user.displayName, user.email)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error.message)
            });
    }
    const saveUser = (name, email) => {
        const user = { name, email };
        // console.log(user);
        fetch('https://b612-used-products-resale-server-side-rakibul-hasan2-main.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('save user',data)
                setLoginUserEmail(email)
            })
    }
    return (
        <div  className='lg:flex justify-center items-center  back-pic'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-white font-bold text-center '>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text  text-lg text-white">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-lg text-white">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text  text-lg text-white">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn bg-green-800 w-full border-none' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <Link className='text-white font-bold text-xl mx-16' to="/signup">Create new Account</Link>
                <div className="divider text-white font-bold">OR</div>
                <button onClick={googleSignIn} className='btn btn-outline w-full text-white'>Continue With Google <FcGoogle className='ml-3'></FcGoogle></button>
            </div>
        </div>
    );
};

export default Login;