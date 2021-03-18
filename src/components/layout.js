import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./footer"

const Layout = ({ children }) => {
    
    return (
        <>
        <Helmet>
        <script async defer data-domain="timetotalk.me" src="https://plausible.io/js/plausible.js"></script>
        <title>Timetotalk</title>
        <link rel="canonical" href="https://timetotalk.me" />
        <meta name="icon" href="../images/favicon64.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@timetotalk_me" />
        <meta name="twitter:title" content="Timetotalk" />
        <meta name="twitter:image" content="https://cdn.sanity.io/images/hdetr6ej/production/84026c85514db57f815cd9c70226e3e29af6f77c-800x418.png" />
        <meta name="twitter:description" content="Timetotalk is a weekly email reminder to check in with yourself and a friend. This 5 minute task could save a life."></meta>
        </Helmet>
        
        <div className="bg-black min-h-screen title-background flex flex-col px-8">

            <main className="flex flex-row justify-center items-center min-h-screen w-full">{children}</main>

            <Footer />

          </div>
        </>
      )
    }

export default Layout