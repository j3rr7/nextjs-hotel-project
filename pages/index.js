import {motion} from 'framer-motion';
import {useState} from "react";
import {useForm} from 'react-hook-form';
import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false); // for disabling our button
  const {register, handleSubmit, watch, formState: {errors}} = useForm(); // form input (watch for debug)
  const router = useRouter();


  const onSubmit = (data) => {
    setIsSubmitting(true);
    fetch("/api/auth/signin", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        setIsSubmitting(false);

        if (data.success) {
          router.push("/dashboard", "/", {shallow: false}).catch(
            err => console.log(err)
          );
        }
      })
  };

  return (
    <div>
      <Head>
        <title>Starting Page</title>
        <meta name="description" content="Authentication Page"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <motion.div className="flex justify-center px-6 my-12" initial="hidden" animate="visible" variants={{
          hidden: {scale: .8, opacity: 0},
          visible: {scale: 1, opacity: 1, transition: {delay: .4}},
        }}>
          <div className="w-full xl:w-3/4 lg:w-11/12 flex border border-gray-300 rounded-md">
            <Image src="/550.png" alt="Pic" width="500" height="500"
                   className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-md"/>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Sign In</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="employee_id">
                    Employee ID
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="employee_id" name="employee_id" type="text"
                    placeholder="Employee ID/Code" {...register('employee_id', {required: true})}/>
                  <p
                    className="text-xs italic text-red-500"> {errors.employee_id?.type === 'required' && "Employee ID cannot be empty"}</p>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password" name="password" type="password"
                    placeholder="******" {...register('password', {required: true})} />
                  <p
                    className="text-xs italic text-red-500"> {errors.password?.type === 'required' && "Please provide a password"}</p>
                </div>
                <div className="mb-4">
                  <input className="mr-2 leading-tight" type="checkbox"
                         id="checkbox_id" {...register('remember_me')} />
                  <label className="text-sm" htmlFor="checkbox_id">
                    Remember Me
                  </label>
                </div>
                <div className="mb-6 text-center">
                  <motion.button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:opacity-50"
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? {
                      position: 'relative',
                      zIndex: 1,
                      scale: 1.1,
                      transition: {duration: .4}
                    } : ""}
                    whileTap={!isSubmitting ? {scale: 0.9} : ""}
                  >
                    Sign In
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
