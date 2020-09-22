import Link from 'next/link'
import "../styles.scss";

export default function Projetos() {
  return (
    <div className="example globalClass">
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  )
}