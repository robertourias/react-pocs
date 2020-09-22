import Link from 'next/link'
import "../styles.scss";
import "../shared/stylesheets/pages/projects.scss";

export default function Projetos() {
  return (
    <div className="example globalClass">
      <h1 className="projects">First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  )
}