import React, { useState, useEffect } from 'react'
import styles from '../../styles/Blogpost.module.css'
import * as fs from 'fs';

const Slug = (props) => {
    const [blogs, setBlogs] = useState(props.myBlogs);

    // show to dangerouslySetInnerHTML in json formate

    function createMarkup(c) {
        return { __html: c };
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{blogs && blogs.title}</h1>
                <hr />
                {blogs && <div className={styles.para} dangerouslySetInnerHTML={createMarkup(blogs.content)}></div>}
            </main >
        </div >
    )
}


export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: "how-to-learn-flask" } },
            { params: { slug: "how-to-learn-javascript" } },
            { params: { slug: "how-to-learn-nextjs" } }
        ],
        fallback: true
    };
}
// server side  StaticProps rendring data

export async function getStaticProps(context) {
    const { slug } = context.params;
    let myBlogs = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")
    return {
        props: { myBlogs: JSON.parse(myBlogs) }
        // will be passed to the page component as props
    }
}
// // server side ServerSideProps rendring data

// export async function getServerSideProps(context) {
//     const { slug } = context.query;
//     let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//     let myBlogs = await data.json();
//     return {
//         props: { myBlogs } // will be passed to the page component as props
//     }
// }

export default Slug
