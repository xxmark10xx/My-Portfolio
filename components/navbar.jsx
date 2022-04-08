// built in link for server side rendering optimization SEO from next
import Link from "next/link"

export default function Navbar() {
    return(
        <nav>
            <Link href="/">
                Name
            </Link>

            <Link href="/about">
                About Me
            </Link>
        </nav>
    )
}