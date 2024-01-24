import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <span className="logo">Chat App</span>
            <section className="user">
                <img src={Logo}/>
                <span>Bright.</span>
                <button>logout</button>
            </section>
        </nav>
    </>
  )
}

export default Navbar