import * as React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <div class="hero h-full">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">404</h1>
            <h2 class="text-3xl font-bold py-4">Page Not Found</h2>
            <p class="my-4">Sorry! The page you were looking for couldn't be found.</p>
            <button class="btn btn-primary"><Link to="/">Homepage</Link></button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
