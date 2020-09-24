import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout';
import "../styles.scss";
import "../shared/stylesheets/pages/projects.scss";

export default function Projetos() {
  return (
      <Layout>
        <div className="example globalClass">
            <Head>
                <title>TEste</title>
            </Head>
        <h1 className="projects">First Post</h1>
        <h2>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </h2>
        </div>
    </Layout>
  )
}