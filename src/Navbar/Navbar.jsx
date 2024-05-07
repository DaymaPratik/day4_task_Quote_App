import './Navbar.css'
function Navbar() {
    let navitems = ['Home', 'Quote', 'Resturants', 'Food', 'Contact']
    return (
        <nav className='navbar'>
            <div className="logo-name-box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5pqZjcDP5oLtnPj2NqgFTFb9_8XowNqG7MdL2eH9pFw&s" alt="" width='50px' />
                <h2>GeekFoods</h2>
            </div>
            <div className="nav-list-box">
                <ul className='nav-list'>
                    {navitems.map((item, idx) => {
                        return <li key={idx}>{item}</li>
                    })}
                </ul>
            </div>
            <div className="nav-btn-box">
                <button>Get Started</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='hamburger'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </div>
        </nav>
    )
}
export default Navbar;