/** @jsx h */
import { h } from 'preact'
import { PageProps } from '$fresh/server.ts'
import { handler as jokeHandler } from '../api/joke.ts'
import { Handlers } from '$fresh/server.ts'
import { tw } from '@twind'

export const handler: Handlers = {
  async GET(req, ctx) {
    const joke = await jokeHandler(req, ctx).text()
    const resp = await ctx.render(joke)
    resp.headers.set('X-Custom-Header', 'Hello')
    return resp
  },
}

export default function Greet(props: PageProps) {
  return (
    <div>
      <div>Hello {props.params.name}</div>
      <div class={tw`text-green-600 text-2xl`}>{props.data}</div>
    </div>
  )
}
