import * as React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

// const pageStyles = {
//   color: "#232129",
//   padding: "96px",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }

// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }

const NotFoundPage = () => {
  return (
    <Layout>
      <div class="hero h-full">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">404</h1>
            <h2 class="text-3xl font-bold py-4">Page Not Found</h2>
            <p class="my-4">Sorry! The page you were looking for doesn't exist.</p>
            <button class="btn btn-primary"><Link to="/">Homepage</Link></button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// const NotFoundPage = () => {
//   return (
//     <main style={pageStyles}>
//       <h1 style={headingStyles}>Page not found</h1>
//       <p style={paragraphStyles}>
//         Sorry 😔, we couldn’t find what you were looking for.
//         <br />
//         {process.env.NODE_ENV === "development" ? (
//           <>
//             <br />
//             Try creating a page in <code style={codeStyles}>src/pages/</code>.
//             <br />
//           </>
//         ) : null}
//         <br />
//         <Link to="/">Go home</Link>.
//       </p>
//     </main>
//   )
// }

export default NotFoundPage

export const Head = () => <title>Not found</title>
