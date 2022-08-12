import Header from '/components/header'

const layoutStyle = {
	margin: 10,
	padding: 10,
	border: '1px soild #DDD'
}

export default (props) => (
	<div style={layoutStyle}>
		<Header />
		{props.children}
	</div>
)