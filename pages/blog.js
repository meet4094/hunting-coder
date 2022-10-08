import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props) => {

  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
    setCount(count + 2);
    let data = await d.json();
    setBlogs(data)
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className={styles.blogs}>
            {blogs.map((blogitem) => {
              return <div className={styles.blogitem} key={blogitem.slug}>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3>{blogitem.title}</h3></Link>
                <p>{blogitem.metadesc.substr(0, 140)}...</p>
                <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btnprimary}>Read More</button></Link>
              </div>
            })}
          </div>
        </InfiniteScroll>

      </main>
    </div>
  )
}

// server side StaticProps rendring data

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;

  let myfile;
  let allBlogs = [];

  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(("blogdata/" + item), 'utf-8');
    allBlogs.push(JSON.parse(myfile))
  }
  return {
    props: { allBlogs, allCount } // will be passed to the page component as props
  }
}

// // server side ServerSideProps rendring data

// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/blogs")
//   let allBlogs = await data.json();
//   return {
//     props: { allBlogs } // will be passed to the page component as props
//   }
// }

export default Blog
