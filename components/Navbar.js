import Link from "next/link";
import {useRouter} from 'next/router'
import Image from "next/image"

const ItemWrapper = ({children, condition, prop}) => {
  return condition ? (
    <Link {...prop}>
      <a className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
        {children}
      </a>
    </Link>
  ) : (
    <Link {...prop}>
      <a className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        {children} 
      </a>
    </Link>
  );
}

export default function Navbar({ isMenuHidden }) {
  const router = useRouter();

  return (
    <aside
      className={ (isMenuHidden ? "ml-[-100%] " : " ") + "fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]" }>
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="/" title="home">
            <Image src="/550.png" className="w-5" width="50" height="50" alt="Logo"/>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Fname Lname
          </h5>
          <span className="hidden text-gray-400 lg:block">Role</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          <li>
            <ItemWrapper condition={router.pathname === "/dashboard"}
              prop={{href: "/dashboard"}}
            >
              <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                  className="fill-current text-cyan-400 dark:fill-slate-600"
                />
                <path
                  d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                  className="fill-current text-cyan-200 group-hover:text-cyan-300"
                />
                <path
                  d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                  className="fill-current group-hover:text-sky-300"
                />
              </svg>
              <span className="-mr-1 font-medium">Dashboard</span>
            </ItemWrapper>
          </li>
          <li>
            <ItemWrapper condition={router.pathname === "/dashboard/categories"}
                         prop={{href: "/dashboard/categories"}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                  clipRule="evenodd"
                />
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                />
              </svg>
              <span className="group-hover:text-gray-700">Categories</span>
            </ItemWrapper>
          </li>
        </ul>

      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="group-hover:text-red-500 hover:text-primary">Logout</span>
        </button>
      </div>
    </aside>
  );
}
