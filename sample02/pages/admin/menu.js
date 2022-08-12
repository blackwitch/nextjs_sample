import Link from 'next/link'
import Layout from '/components/layout'
import { withRouter } from 'next/router'

const Menu = ({router:{query}}) => {
	if(query.title == "Dashboard"){
		return(
		<Layout>
			<h1>{query.title}</h1>
		</Layout>
		)
	}else if(query.title == "Management"){
		return(
		<Layout>
			<h1 className="font-mono text-3xl font-bold">{query.title}</h1><br/>
			<p>
Welcome to the Next.js documentation! <br/>


If you're new to Next.js, we recommend starting with the learn course.<br/>

The interactive course with quizzes will guide you through everything you need to know to use Next.js.<br/>

If you have questions about anything related to Next.js, you're always welcome to ask our community on GitHub Discussions.<br/>
<br/>
System Requirements<br/>
Node.js 12.22.0 or later<br/>
MacOS, Windows (including WSL), and Linux are supported<br/>
Automatic Setup<br/>
We recommend creating a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:<br/>

npx create-next-app@latest<br/>
# or<br/>
yarn create next-app<br/>
# or<br/>
pnpm create next-app<br/><br/>
If you want to start with a TypeScript project you can use the --typescript flag:<br/>

npx create-next-app@latest --typescript<br/>
# or<br/>
yarn create next-app --typescript<br/>
# or<br/>
pnpm create next-app --typescript<br/>
After the installation is complete:<br/>
<br/>
Run npm run dev or yarn dev or pnpm dev to start the development server on http://localhost:3000<br/>
Visit http://localhost:3000 to view your application<br/>
Edit pages/index.js and see the updated result in your browser<br/>
For more information on how to use create-next-app, you can review the create-next-app documentation.<br/>
			</p>
			<Link href="https://ongamedev.tistory.com/499">
				<button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Read Detail</button>
			</Link>
		</Layout>
		)
	}
}

export default withRouter(Menu)

