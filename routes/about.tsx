import { Handlers } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'

export const handler: Handlers = {
	async GET(req, ctx) {
		const resp = await ctx.render()
		resp.headers.set('X-Custom-Header', 'Hello')
		console.log(`middleware data is ${ctx.state.data}`)
		return resp
	},
}

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>Fresh App About</title>
			</Head>
			<main>
				<h1>About</h1>
				<p>This is the about page.</p>
			</main>
		</>
	)
}
