import Layout from '/components/layout'
import Link from 'next/link'

const MenuLink = (props) => (
	<ui>
		<Link className="text-gray-900 dark:text-white hover:underline" href={{
			pathname: '/admin/menu',
			query: {title:props.title}
		}}>
			<a>{props.title}</a>
		</Link>
	</ui>
)

export default () => (
<Layout>
	<nav className="bg-gray-50 dark:bg-gray-700">
	    <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
	        <div className="flex items-center">
				<ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
					<MenuLink title="Dashboard" />
					<MenuLink title="Management" />
				</ul>
			</div>
		</div>
	</nav>
</Layout>
)