import Layout from '/components/layout'

export default (props) => {
	const posts = props.water_temperature;	
	console.log(posts)
	return (
	<Layout>
		<p>Hello !! </p>
		<div>
        {posts.map(post =>
          <div
            key={post.datetime}
            style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <h2>{post.datetime}</h2>
            <p>{post.pos_value} , {post.temperature}</p>
        </div>)}
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