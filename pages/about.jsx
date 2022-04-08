// import SSR caching image tag
import Image from "next/image"
import styles from "../styles/About.module.css"

export default function about() {
    return(
        <div>
            <h1 className={styles.coolText}>About Me</h1>

            <p className={styles.changeText}>I am super cool software engineer now, I make neat stuff with the codes</p>

            {/* landing an image locally */}

            <Image 
                src="/vercel.svg"
                alt="the vercel logo bc I <3 vercel"
                width={500}
                height={500}
            />

            {/* loading an image from another hosting domain */}

            <Image 
                src="https://placekitten.com/300/300"
                alt="a picture of a magnificent creature"
                width={300}
                height={300}
            />

        </div>
    )
}