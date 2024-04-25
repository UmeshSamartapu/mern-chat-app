import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1  className="text-3x1 font-semibold text-center text-gray-300">
                    SignUp <span className="text-blue-500">ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-blue label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-blue label-text">Username</span>
                        </label>
                        <input type="text" placeholder="johndoe" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-blue label-text">password</span>
                        </label>
                        <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full input input-bordered h-10"
                         />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-blue label-text">Confirm password</span>
                        </label>
                        <input
                        type="password"
                        placeholder="Confirm password"
                        className="w-full input input-bordered h-10"
                         />
                    </div>
                      
                      <GenderCheckbox/>

                     <a className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" href="#">
                        Already having an account?
                     </a>

                    <button className="btn btn-block btn-sm mt-2 border border-slate-700">SignUp</button>
                </form>
             </div>
    </div>;
};
export default SignUp;

//starter code for sign-up page
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//     return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//              <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1  className="text-3x1 font-semibold text-center text-gray-300">
//                     SignUp <span className="text-blue-500">ChatApp</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-blue label-text">Full Name</span>
//                         </label>
//                         <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" />
//                     </div>

//                     <div>
//                         <label className="label p-2">
//                             <span className="text-blue label-text">Username</span>
//                         </label>
//                         <input type="text" placeholder="johndoe" className="w-full input input-bordered h-10" />
//                     </div>

//                     <div>
//                         <label className="label">
//                             <span className="text-blue label-text">password</span>
//                         </label>
//                         <input
//                         type="password"
//                         placeholder="Enter password"
//                         className="w-full input input-bordered h-10"
//                          />
//                     </div>

//                     <div>
//                         <label className="label">
//                             <span className="text-blue label-text">Confirm password</span>
//                         </label>
//                         <input
//                         type="password"
//                         placeholder="Confirm password"
//                         className="w-full input input-bordered h-10"
//                          />
//                     </div>
                      
//                       <GenderCheckbox/>

//                      <a className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" href="#">
//                         Already having an account?
//                      </a>

//                     <button className="btn btn-block btn-sm mt-2 border border-slate-700">SignUp</button>
//                 </form>
//              </div>
//     </div>;
// };
// export default SignUp;

