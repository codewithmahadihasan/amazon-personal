import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Auth } from './Context/AuthContext';


const SignUp = () => {
    const { RegistrationInEmail, setName, verify, Google, forgetPass } = useContext(Auth)
    const [passerror, setPasserror] = useState()
    const navigate = useNavigate()


    const fromButton = (event) => {
        event.preventDefault();
        const from = event.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value

        if (password.length >= 6) {
            RegistrationInEmail(email, password)
                .then((result) => {
                    verify()
                    setName(name)
                    setPasserror('')
                    Swal.fire(
                        'Your registration is complete',
                        'Please Verify your email.',
                        'success'
                    )
                })

                .catch((error) => {
                    const message = error.message.split("Error")
                    Swal.fire(
                        `${message.slice(1, 500)}`,
                        error,
                        'error'
                    )
                });


        }
        else {
            setPasserror('Please enter six digit password')
        }


    }

    const googleButton = () => {
        Google()
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);

                Swal.fire(
                    'Login Successful',
                    'Please Verify your email.',
                    'success')
                // ...
            })

            .catch((error) => {
                const message = error.message.split("Error")
                Swal.fire(
                    `${message.slice(1, 500)}`,
                    error,
                    'error'
                )
            });
    }

    return (
        <div>
            <div className="relative">
                <img
                    src="https://img.freepik.com/free-photo/abstract-futuristic-background-with-3d-design_1361-3532.jpg?w=1480&t=st=1666091651~exp=1666092251~hmac=db94ca2f721f3d9564ea543dcf22ffb04163c5f3b3740160af6f7c3c810ef347"
                    className="absolute  object-cover bg-cover w-full h-full"
                    alt=""
                />
                <div className="relative pb-8 bg-opacity-70 bg-gray-900">
                    <svg
                        className="absolute inset-x-0 bottom-0 text-gray-800 w-full"
                        viewBox="0 0 1160 163"
                    >
                        <path
                            fill="currentColor"
                            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                        />
                    </svg>
                    <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    The quick, brown fox <br className="hidden md:block" />
                                    jumps over a lazy dog
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                    quae.
                                </p>
                                <Link
                                    to="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-700"
                                >
                                    Learn more
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className='lg:w-96 text-blue-200'>
                                <div className="w-full  max-w-md  shadow-xl shadow-teal-800 hover:shadow-sky-600  p-8  rounded-xl bg-gray-900 text-gray-100">
                                    <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                                    <form onSubmit={fromButton} action="" className="space-y-3 ng-untouched ng-pristine ng-valid">
                                        <div className=" text-sm">
                                            <label className="block text-gray-400">Name</label>
                                            <input type="text" name="name" id="name" placeholder="Name" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-violet-400" />
                                        </div>
                                        <div className=" text-sm">
                                            <label className="block text-gray-400">Username</label>
                                            <input type="email" name="email" id="email" placeholder="E-mail" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-violet-400" />
                                        </div>
                                        <div className=" text-sm">

                                            <label className="block text-gray-400">Password</label>
                                            <input type="password" name="password" id="password" placeholder="Password" required className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-violet-400 mb-3" />
                                            <p className='text-xs text-red-600'>{passerror}</p>
                                        </div>
                                        <button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-600">Sign Up</button>
                                        <p className="text-xs text-center sm:px-6 text-gray-400">Don't have an account?
                                            <Link rel="noopener noreferrer" to="/login" className="hover:underline mt-10  ml-2  text-gray-100">Log in</Link>
                                        </p>
                                    </form>
                                    <div className="flex items-center mb-2  space-x-1">
                                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                                        <p className="px-3 text-sm text-gray-400">or</p>
                                        <div className="flex-1 h-px sm:w-16 bg-gray-700 "></div>
                                    </div>
                                    <div className="flex justify-center space-x-4">
                                        <button onClick={googleButton} aria-label="Log in with Google " className="p-3 rounded-sm flex justify-center gap-3 block w-full p-3  rounded-sm border hover:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current ">
                                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                            </svg>
                                            <p>Continue with Google</p>
                                        </button>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default SignUp;