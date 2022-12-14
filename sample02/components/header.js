import 'tailwindcss/tailwind.css';
import Link from 'next/link'

export default () => (
	<nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
		<div className="container flex flex-wrap justify-between items-center mx-auto">
			<p> NextJS Sample </p>
			<div className="flex md:order-2">
				<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
			</div>			
			<div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
	    		<ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
	    		<ui>
					<Link href="/">
						<a className="inline-block bg-blue-500 cursor-pointer text-white p-2 rounded-md text-center shadow-sm"> Home </a>
					</Link>
		    	</ui>
	    		<ui>
					<Link href="/admin">
						<a className="inline-block bg-blue-500 cursor-pointer text-white p-2 rounded-md text-center shadow-xl"> Admin </a>
					</Link>
	    		</ui>
	    		</ul>
			</div>
		</div>
	</nav>
)