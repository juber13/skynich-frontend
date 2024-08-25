/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { useFormik } from "formik";
import { signUpSchema } from "../schema/index.js";
import axios from "axios";
import { FaWindowClose } from "react-icons/fa";
import { toast } from "react-toastify";

const Form = ({ toggle, setToggle }) => {
  const data = {
    name: "",
    lastName: "",
    department: "",
    designation: "",
    joining: "",
    salary: "",
    image: null, // Initialize as null for file input
  };

  const {
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: data,
    validateOnChange: true,
    validateOnBlur: false,
    validationSchema: signUpSchema,
    onSubmit: async (values, actions) => {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }

      try {
        const res = await axios.post(
          "https://skynich-backend.onrender.com/api/addEmployee",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(res);
        toast.success("Form submitted");
        actions.resetForm();
      } catch (error) {
        console.error("Error uploading data:", error);
      }
    },
  });

  // Update handleChange for file input
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFieldValue(name, files[0]); // Set the first file
    }
  };

  return (
    <div className='relative'>
      <div
        className={`fixed h-screen flex-col flex items-center justify-center bg-[rgba(0,0,0,0.8)] z-20 inset-0 p-3  ${
          toggle ? "block" : "hidden"
        } `}
      >
        <div
          className='absolute top-5 right-5 text-white cursor-pointer'
          onClick={() => setToggle(false)}
        >
          <FaWindowClose />
        </div>
        <div className='form-contorll border bg-white max-w-2xl p-10 rounded-xl'>
          <h3 className='text-xl text-blue-500 mb-4'>Employee Details</h3>
          <form
            className='grid grid-cols-2 gap-6 text-xs'
            onSubmit={handleSubmit}
          >
            <div className='w-full'>
              <input
                type='text'
                className='w-full border p-2 rounded-md shadow-sm outline-none'
                placeholder='Name'
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && (
                <p className='text-xs text-red-500'>{errors.name}</p>
              )}
            </div>
            <div className='w-full'>
              <input
                type='text'
                className='w-full border p-2 rounded-md shadow-sm outline-none'
                placeholder='LastName'
                name='lastName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              {touched.lastName && errors.lastName && (
                <p className='text-xs text-red-500'>{errors.lastName}</p>
              )}
            </div>

            <div className='w-full'>
              <input
                type='text'
                className='w-full border p-2 rounded-md shadow-sm outline-none'
                placeholder='Department'
                name='department'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.department}
              />
              {touched.department && errors.department && (
                <p className='text-xs text-red-500'>{errors.department}</p>
              )}
            </div>

            <div className='w-full'>
              <input
                type='text'
                className='w-full border p-2 rounded-md shadow-sm outline-none'
                placeholder='Designation'
                name='designation'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.designation}
              />
              {touched.designation && errors.designation && (
                <p className='text-xs text-red-500'>{errors.designation}</p>
              )}
            </div>

            <div className='w-full'>
              <input
                type='date'
                className='w-full border p-2 rounded-md shadow-sm outline-none'
                placeholder='Date of joining'
                name='joining'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.joining}
              />
              {touched.joining && errors.joining && (
                <p className='text-xs text-red-500'>{errors.joining}</p>
              )}
            </div>

            <div className='w-full'>
              <input
                type='text'
                className='w-full border p-2 rounded-md outline-none'
                placeholder='Expected salary'
                name='salary'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.salary}
              />
              {touched.salary && errors.salary && (
                <p className='text-xs text-red-500'>{errors.salary}</p>
              )}
            </div>

            <div className='w-full'>
              <input
                type='file'
                className='w-full border p-2 rounded-md shadow-md'
                name='image'
                onChange={handleFileChange} // Use the new handler
                onBlur={handleBlur}
              />
              {touched.image && errors.image && (
                <p className='text-xs text-red-500'>{errors.image}</p>
              )}
            </div>
            <button
              type='submit'
              className='border rounded-md shadow-md bg-blue-500 text-white font-semibold'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
