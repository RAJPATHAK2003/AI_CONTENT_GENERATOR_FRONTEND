import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';
import { registerAPI } from '../../apis/users/usersAPI';
import StatusMessage from "../Alert/StatusMessage";
import Login_Regis from "../../assets/Login_Regis.jpg"

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  username: Yup.string().required("Username is required"),
});

const Registration = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: registerAPI,
    onSuccess: (data) => {
        console.log('Registration successful:', data);
        // navigate('/login'); // Redirect user to login page
    },
    onError: (error) => {
        console.error('Registration failed:', error);
    },
});
  // Formik setup for form handling
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Here, handle the form submission
      console.log('Form values', values);
      mutation.mutate(values);
      // Simulate successful registration
       navigate("/login"); // Redirect user to login page
    },
  });
console.log(mutation);
  return (
    
    <div className="min-h-screen flex items-center justify-center " style={{ backgroundImage: `url(${Login_Regis})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-md w-full  bg-opacity-80 rounded-lg shadow-md p-8 m-4">
        <h2 className="text-2xl font-bold text-center text-white mb-8">
          Create an Account
        </h2>
        <p className="text-center text-white font-bold mb-4">
          Create an account to get free access for 3 days. No credit card
          required.
        </p>
        {mutation.isPending && <StatusMessage type='loading' message='Loading..'/>}
        {mutation.isSuccess && <StatusMessage type='success' message='success'/>}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Username input field */}
          <div>
            <label
              htmlFor="username"
              className="text-sm font-medium text-white block mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...formik.getFieldProps("username")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              placeholder="Raj"
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 mt-1">{formik.errors.username}</div>
            )}
          </div>

          {/* Email input field */}
          <div>
            <label
              htmlFor="email"
              className="text-sm  text-white font-bold block mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              placeholder="Raj@example.com"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 mt-1">{formik.errors.email}</div>
            )}
          </div>

          {/* Password input field */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-bold text-white block mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              className="w-full px-4 py-2 border border-gray-400 rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none focus:border-indigo-600"

            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 mt-1">{formik.errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
        <div className="text-sm mt-2">
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;