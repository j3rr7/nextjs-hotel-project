import React from 'react';
import TextField from '@mui/material/TextField';
import Head from 'next/head';
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';

const stylesTextField = {
    '& label.Mui-focused': {
        color: '#A16640',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#A16640',
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: '#A16640',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#A16640',
        },
    },
}

const fadeInUp = {
  initial: {
    y: -30,
    opacity: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export default function login() {
  return (
    <>
      <Head>
        <title>Starting Page</title>
        <meta name="description" content="Authentication Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div 
        className="container mx-auto"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <div className="my-5 flex justify-end w-2/5 mx-auto mt-36">
          <a href='/loginv2' className="border-1 text-gray-400 hover:border-primary hover:text-primary py-2 px-2 mx-6 transition-all duration-300 ease-in-out rotate-0 hover:rotate-90 hover:shadow-md">
            <Icon icon="zondicons:reload" width="30" height="30"/>
          </a>
        </div>
        <div className="w-full h-screen">
          <div className="w-full md:3/5 lg:w-2/5 flex items-center mx-auto mb-36 shadow-sm">
            <div className="flex flex-col w-full mx-4">
              <motion.form variants={fadeInUp}>
                <div className="mx-2 my-10">
                  <p className="text-3xl font-semibold">Sign In</p>
                </div>
                <div className="my-5 mx-2">
                  <TextField 
                    id="outlined-basic" 
                    label="Employee ID" 
                    variant="outlined" 
                    className="w-full"
                    placeholder="Employee ID/Code"
                    size="small"
                    sx={stylesTextField}
                  />
                </div>
                <div className="my-5 mx-2">
                  <TextField 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    className="w-full"
                    placeholder="ID*******"
                    size="small"
                    sx={stylesTextField}
                  />
                </div>
                <div className="flex justify-end mx-2 my-10">
                  <button
                    className="border-1 border-transparent py-2 px-8 bg-primary text-white text-lg font-medium rounded-md hover:border-primary hover:text-primary hover:bg-transparent transition-all duration-300 ease-in-out"
                  >
                    Sign In
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
