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
			<h1>{query.title}</h1>
			<p> <Link href="https://ongamedev.tistory.com/499">read detail</Link> </p>
		</Layout>
		)
	}
}

export default withRouter(Menu)

