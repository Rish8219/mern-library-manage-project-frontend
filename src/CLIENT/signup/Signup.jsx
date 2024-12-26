// import React, { useRef, useState, useEffect } from 'react'
// import axios from 'axios'
// import './signup.css'
// import { Link, useNavigate } from 'react-router-dom'
// import toast, { Toaster } from 'react-hot-toast'
// import { BsEye, BsEyeSlash } from 'react-icons/bs'

// const Signup = () => {
//   const API_URL = 'http://localhost:5000/api/v1/signup'

//   const refUsername = useRef(null)

//   const Empty_Form_Field = {
//     username: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirm_password: '',
//   }

//   const navigate = useNavigate()

//   const [textField, setTextField] = useState(Empty_Form_Field)
//   const [loading, setLoading] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [errors, setErrors] = useState({})

//   const showLoadingToast = () => {
//     return toast.loading('Registering User...', {
//       position: 'top-center',
//       duration: Infinity,
//     })
//   }

//   const validateEmail = (email) => {
//     const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/
//     return emailRegex.test(email)
//   }

//   const validatePassword = (password) => {
//     const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
//     return alphanumericRegex.test(password)
//   }

//   const HandleFormSubmit = async (e) => {
//     try {
//       e.preventDefault()
//       setLoading(true)

//       const errors = {}

//       if (!validateEmail(textField.email)) {
//         errors.email = 'Invalid Email Format'
//       }

//       if (!validatePassword(textField.password)) {
//         errors.password = 'Password must be alphanumeric and contain at least one special character'
//       }

//       if (textField.password !== textField.confirm_password) {
//         errors.confirm_password = 'Password doesnt match'
//       }

//       if (Object.keys(errors).length > 0) {
//         setErrors(errors)
//         setLoading(false)
//         return
//       }

//       const loadingToastId = showLoadingToast()

//       const username = textField.username
//       const email = textField.email
//       const phone = textField.phone
//       const password = textField.password

//       const response = await axios.post(API_URL, {
//         username,
//         email,
//         phone,
//         password,
//       })

//       toast.dismiss(loadingToastId)

//       setTextField(Empty_Form_Field)
//       setLoading(false)

//       if (response.data.GOTO_LOGIN == true) {
//         navigate('/login', { replace: true })
//         toast('Account Already Exists , You can Login ! ', {
//           icon: 'ℹ️',
//         })
//       } else {
//         navigate('/otp', { replace: true })
//         toast(response.data.message, {
//           icon: 'ℹ️',
//         })
//       }
//     } catch (error) {
//       console.log(error)
//       console.log(error.response)
//     }
//   }

//   const HandleOnChange = (event) => {
//     const field_name = event.target.name
//     const field_value = event.target.value

//     setTextField({ ...textField, [field_name]: field_value })
//   }

//   useEffect(() => {
//     refUsername.current.focus()
//   }, [])

//   return (
//     <div className='signup-maindiv'>
//       {/* TOP DIV */}
//       <div className='signup-upperdiv'>
//         <h1>SignUp</h1>
//       </div>

//       {/* MIDDLE DIV */}
//       <div className='signup-middlediv'>
//         <form onSubmit={HandleFormSubmit} method='post'>
//           <div className='first-row-form'>
//             <div className='username-field-div'>
//               <label htmlFor='usernamefield'>Username : </label>
//               <input
//                 type='text'
//                 placeholder='Enter name..'
//                 id='usernamefield'
//                 value={textField.username}
//                 onChange={HandleOnChange}
//                 name='username'
//                 autoComplete='off'
//                 required
//                 ref={refUsername}
//                 maxLength='20'
//                 minLength='5'
//               />
//             </div>

//             <div className='email-field-div'>
//               <label htmlFor='emailfield'>Email : </label>
//               <input
//                 type='email'
//                 placeholder='e.g. user@gmail.com'
//                 id='emailfield'
//                 value={textField.email}
//                 onChange={HandleOnChange}
//                 name='email'
//                 autoComplete='off'
//                 required
//               />
//               {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//             </div>
//           </div>

//           <label htmlFor='phonefield'>Phone No. : </label>
//           <input
//             type='text'
//             placeholder='e.g. 98...'
//             id='phonefield'
//             value={textField.phone}
//             onChange={HandleOnChange}
//             name='phone'
//             autoComplete='off'
//             pattern='8\d{8}'
//             minLength='10'
//             maxLength='10'
//           />

//           <div className='password-main-div'>
//             <div className='password-div-first'>
//               <label htmlFor='passwordfield'>Password : </label>
//               <div className='password-field'>
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder='Enter Password'
//                   id='passwordfield'
//                   value={textField.password}
//                   onChange={HandleOnChange}
//                   name='password'
//                   autoComplete='off'
//                   required
//                   minLength='5'
//                 />
//               </div>
//               {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//             </div>

//             <div className='password-div-second'>
//               <label htmlFor='passwordfield2'>Confirm Password : </label>
//               <div className='password-field'>
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder='Confirm Password'
//                   id='passwordfield2'
//                   value={textField.confirm_password}
//                   onChange={HandleOnChange}
//                   name='confirm_password'
//                   autoComplete='off'
//                   required
//                   minLength='5'
//                 />
//                 <span
//                   onClick={() =>
//                     setShowPassword((prevShowPassword) => !prevShowPassword)
//                   }
//                   style={{ cursor: 'pointer' }}
//                 >
//                   {showPassword ? <BsEye /> : <BsEyeSlash />}
//                 </span>
//               </div>
//               {errors.confirm_password && (
//                 <p style={{ color: 'red' }}>{errors.confirm_password}</p>
//               )}
//             </div>
//           </div>

//           <br />

//           <button disabled={loading}>
//             {loading ? 'Signing up...' : 'Sign Up'}
//           </button>
//         </form>
//       </div>

//       {/* LOWER DIV */}
//       <div className='signup-lowerdiv'>
//         <p>Already have an Account ? </p>
//         <Link to='/login'>
//           <button>Login</button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Signup
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const Signup = () => {
  const API_URL = 'http://localhost:5000/api/v1/signup';

  const refUsername = useRef(null);

  const Empty_Form_Field = {
    username: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  };

  const navigate = useNavigate();

  const [textField, setTextField] = useState(Empty_Form_Field);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const showLoadingToast = () => {
    return toast.loading('Registering User...', {
      position: 'top-center',
      duration: Infinity,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return alphanumericRegex.test(password);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/; // Allows any 10-digit number
    return phoneRegex.test(phone);
  };

  const HandleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const errors = {};

      if (!validateEmail(textField.email)) {
        errors.email = 'Invalid Email Format';
      }

      if (!validatePassword(textField.password)) {
        errors.password = 'Password must be alphanumeric and contain at least one special character';
      }

      if (textField.password !== textField.confirm_password) {
        errors.confirm_password = 'Passwords do not match';
      }

      if (!validatePhone(textField.phone)) {
        errors.phone = 'Phone number must be 10 digits long';
      }

      if (Object.keys(errors).length > 0) {
        setErrors(errors);
        setLoading(false);
        return;
      }

      const loadingToastId = showLoadingToast();

      const { username, email, phone, password } = textField;

      // Log the request payload for debugging
      // console.log('Request Payload:', {
      //   username,
      //   email,
      //   phone,
      //   password,
      // });

      const response = await axios.post(API_URL, {
        username,
        email,
        phone,
        password,
      });

      toast.dismiss(loadingToastId);
      setTextField(Empty_Form_Field);
      setLoading(false);

      if (response.data.GOTO_LOGIN) {
        navigate('/login', { replace: true });
        toast('Account Already Exists, You can Login!', {
          icon: 'ℹ️',
        });
      } else {
        navigate('/otp', { replace: true });
        toast(response.data.message, {
          icon: 'ℹ️',
        });
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Error response:', error.response.data);
        toast.error(`Error: ${error.response.data.message || 'An error occurred'}`);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('Error request:', error.request);
        toast.error('No response from server. Please try again later.');
      } else {
        // Something happened in setting up the request
        console.error('Error message:', error.message);
        toast.error('An error occurred while setting up the request.');
      }
    }
  };

  const HandleOnChange = (event) => {
    const field_name = event.target.name;
    const field_value = event.target.value;

    setTextField({ ...textField, [field_name]: field_value });
  };

  useEffect(() => {
    refUsername.current.focus();
  }, []);

  return (
    <div className='signup-maindiv'>
      {/* TOP DIV */}
      <div className='signup-upperdiv'>
        <h1>SignUp</h1>
      </div>

      {/* MIDDLE DIV */}

      <div className='signup-middlediv'>
        <form onSubmit={HandleFormSubmit} method='post'>
          <div className='first-row-form'>
            <div className='username-field-div'>
              <label htmlFor='usernamefield'>Username : </label>
              <input
                type='text'
                placeholder='Enter name..'
                id='usernamefield'
                value={textField.username}
                onChange={HandleOnChange}
                name='username'
                autoComplete='off'
                required
                ref={refUsername}
                maxLength='20'
                minLength='5'
              />
            </div>

            <div className='email-field-div'>
              <label htmlFor='emailfield'>Email : </label>
              <input
                type='email'
                placeholder='e.g. user@gmail.com'
                id='emailfield'
                value={textField.email}
                onChange={HandleOnChange}
                name='email'
                autoComplete='off'
                required
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
          </div>

          <label htmlFor='phonefield'>Phone No. : </label>
          <input
            type='text'
            placeholder='e.g. 1234567890'
            id='phonefield'
            value={textField.phone}
            onChange={HandleOnChange}
            name='phone'
            autoComplete='off'
            pattern='[0-9]{10}'
            minLength='10'
            maxLength='10'
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

          <div className='password-main-div'>
            <div className='password-div-first'>
              <label htmlFor='passwordfield'>Password : </label>
              <div className='password-field'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter Password'
                  id='passwordfield'
                  value={textField.password}
                  onChange={HandleOnChange}
                  name='password'
                  autoComplete='off'
                  required
                  minLength='5'
                />
              </div>
              {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <div className='password-div-second'>
              <label htmlFor='passwordfield2'>Confirm Password : </label>
              <div className='password-field'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Confirm Password'
                  id='passwordfield2'
                  value={textField.confirm_password}
                  onChange={HandleOnChange}
                  name='confirm_password'
                  autoComplete='off'
                  required
                  minLength='5'
                />
                <span
                  onClick={() =>
                    setShowPassword((prevShowPassword) => !prevShowPassword)
                  }
                  style={{ cursor: 'pointer' }}
                >
                  {showPassword ? <BsEye /> : <BsEyeSlash />}
                </span>
              </div>
              {errors.confirm_password && (
                <p style={{ color: 'red' }}>{errors.confirm_password}</p>
              )}
            </div>
          </div>

          <br />

          <button disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>

      {/* LOWER DIV */}
      <div className='signup-lowerdiv'>
        <p>Already have an Account ? </p>
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
