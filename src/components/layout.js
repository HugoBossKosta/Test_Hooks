import { Link, Outlet } from 'react-router-dom';


function Layout () {
    return (
        <>
        <header className='header'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/contacts" className='link'>Contacts</Link>

        <Link to="/posts" className='link'>Posts</Link>
        
      </header>


        <Outlet/>

        {/* все вставляется в outlet между шапкой и подвалом */}


      <footer className='footer'>
        @2022 Kuznetsov K.D
      </footer>
        </>

    )
}

export default Layout;