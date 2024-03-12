import React, { useContext, useState } from 'react';
import poster from '../assets/modal.png';
import { ScreenContext } from '../App';
import facebook from './../assets/facebook.png'

const Modal = ({ remove, login }) => {
    const { islargescreen } = useContext(ScreenContext);
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='modal'>
            <div className='flex col'>
                <svg onClick={remove} className='closebtn' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <g clipPath="url(#clip0_1_2255)">
                        <path d="M14 2.33331C7.54838 2.33331 2.33337 7.54831 2.33337 14C2.33337 20.4516 7.54838 25.6666 14 25.6666C20.4517 25.6666 25.6667 20.4516 25.6667 14C25.6667 7.54831 20.4517 2.33331 14 2.33331ZM19.8334 18.1883L18.1884 19.8333L14 15.645L9.81171 19.8333L8.16671 18.1883L12.355 14L8.16671 9.81164L9.81171 8.16665L14 12.355L18.1884 8.16665L19.8334 9.81164L15.645 14L19.8334 18.1883Z" fill={islargescreen ? "white" : "#212529"} />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_2255">
                            <rect width="28" height="28" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                {islargescreen && <div className="heading">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>}
                <div className="flex">
                    <div className='form flex col'>
                        <h1>{isLogin ? "Create Account" : "Sign In"}</h1>
                        <div className="inputs flex col">
                            {isLogin && <div className="flex">
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                            </div>}
                            <div>
                                <input type="text" placeholder='Email' />
                            </div>
                            <div className='label'>
                                <input type="password" placeholder='Password' />
                            </div>
                            {isLogin && <div>
                                <input type="password" placeholder='Confirm Password' />
                            </div>}
                        </div>

                        {islargescreen ?
                            <button className='group submit' onClick={login}>{isLogin ? "Create Account" : "Sign In"}</button> :

                            <div className="button flex">
                                <button className='group submit' onClick={login}>{isLogin ? "Create Account" : "Sign In"}</button>
                                <span onClick={() => setIsLogin(prev => !prev)}>{isLogin ? "or, Sign In" : "or, Create Account"} </span>
                            </div>
                        }
                        <button className='group'>
                            <img src={facebook} alt="facebook" />
                            <span>Sign {isLogin ? "up" : "in"} with Facebook</span>
                        </button>
                        <button className='group'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_1_2938)">
                                    <path d="M3.54594 9.66905L2.989 11.7482L0.953406 11.7912C0.345063 10.6629 0 9.37192 0 8.00005C0 6.67345 0.322625 5.42245 0.8945 4.32092H0.894938L2.70719 4.65317L3.50106 6.45455C3.33491 6.93895 3.24434 7.45895 3.24434 8.00005C3.24441 8.5873 3.35078 9.14995 3.54594 9.66905Z" fill="#FBBB00" />
                                    <path d="M15.8604 6.50562C15.9522 6.98955 16.0001 7.48933 16.0001 8.00012C16.0001 8.57287 15.9399 9.13155 15.8252 9.67046C15.4358 11.5043 14.4182 13.1056 13.0085 14.2388L13.0081 14.2384L10.7255 14.1219L10.4024 12.1052C11.3378 11.5566 12.0688 10.6981 12.4538 9.67046H8.17603V6.50562H12.5162H15.8604Z" fill="#518EF8" />
                                    <path d="M13.0081 14.2382L13.0086 14.2386C11.6376 15.3406 9.89602 15.9999 8.00021 15.9999C4.95361 15.9999 2.30483 14.2971 0.953613 11.7911L3.54614 9.66895C4.22174 11.472 5.96108 12.7555 8.00021 12.7555C8.87668 12.7555 9.6978 12.5186 10.4024 12.105L13.0081 14.2382Z" fill="#28B446" />
                                    <path d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z" fill="#F14336" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_2938">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Sign {isLogin ? "up" : "in"} with Google</span>
                        </button>
                        {(!islargescreen && isLogin) && <span className="message">By signing up, you agree to our Terms & conditions, Privacy policy</span>}
                        {!isLogin && <div className="forgot">Forget Password?</div>}
                    </div>
                    {islargescreen && <div className="flex poster col">
                        <div className="link flex">
                            {isLogin ? "Already have an account?" : "Don’t have an account yet?"}
                            <span onClick={() => setIsLogin(prev => !prev)}>{isLogin ? "Sign In" : "Create new for free!"}</span>
                        </div>
                        <img src={poster} alt="poster" />
                        {isLogin && <span className="message">By signing up, you agree to our Terms & conditions, Privacy policy</span>}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Modal;