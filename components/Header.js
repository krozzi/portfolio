import Link from "next/link"

export default function Header() {
    return (
    <div className="navbar bg-base-100 fixed w-full font-spage z-50">
    <div className="flex-1">
      <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          
          <li><Link href="/#aboutme">About me</Link></li>
          <li><Link href="/#tech">Techstack</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li tabIndex="0">
            <a className="justify-between">
              Tools
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><a>Acorn Packets</a></li>
              <li><a>Hacks</a></li>
            </ul>
          </li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </div>
      <Link href="/"><a  className="btn btn-ghost normal-case text-2xl font-pop text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-400">ddozzi</a></Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
          <li><Link href="/#aboutme">About me</Link></li>
          <li><Link href="/#tech">Techstack</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        <li tabIndex="0">
          <a>
            Tools
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2 bg-base-100">
            <li><a>Acorn Packets</a></li>
            <li><a>Hacks</a></li>
          </ul>
        </li>
        <li><Link href="/#contact">Contact</Link></li>
        
      </ul>
    </div>
  </div>)
}