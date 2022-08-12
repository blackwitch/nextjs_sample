import Layout from '/components/layout'


export default (props) => {
	const posts = props.stats;
	return (
	<Layout>
		<div className="relative">
			<div className="grid grid-flow-col auto-cols-auto gap-x-1">
	        {posts.map(post =>
	          <div className="float-left bg-green-500 text-white rounded-md text-center shadow-xl"
	            key={post.key}
	            style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
	            <h2>{post.title}</h2>
	            <strong>{post.value}</strong>
	        </div>)}
	        </div>
	    </div>
	</Layout>
	)
}

import fsPromises from 'fs/promises'
import path from 'path'
// getStaticProps : 빌드 시 고정되는 값. 배포 이후에는 변경되지 않는다.
// getStaticPaths : 동적 라우팅 + getStaticProps
// getServerSideProps : 매 요청 시 서버에 요청
export async function getServerSideProps() {
	const filePath = path.join(process.cwd(), '/assets/data.json');
	const jsonData = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData);

	return {
		props: objectData
	}
}