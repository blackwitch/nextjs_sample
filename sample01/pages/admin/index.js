import Layout from '/components/layout'
import Link from 'next/link'

const MenuLink = (props) => (
	<li>
		<Link href={{
			pathname: '/admin/menu',
			query: {title:props.title}
		}}>
			<a>{props.title}</a>
		</Link>
	</li>
)

export default () => (
	<Layout>
		<h1> Admin Menu </h1>
		<ul>
			<MenuLink title="Dashboard" />
			<MenuLink title="Management" />
		</ul>
	</Layout>
)