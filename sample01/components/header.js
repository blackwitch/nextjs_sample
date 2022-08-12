import Link from 'next/link'

const linkStyle={
	marginRight: 15
}

export default () => (
	<div>
		<Link href="/">
			<a style={linkStyle}> Home </a>
		</Link>
		<Link href="/admin">
			<a style={linkStyle}> Admin </a>
		</Link>
	</div>
)