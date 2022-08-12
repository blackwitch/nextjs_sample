import Header from '/components/header'

export default (props) => (
	<div className="p-40">
		<Header />
		{props.children}
	</div>
)