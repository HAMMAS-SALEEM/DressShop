import React from 'react'

const Navbar = ({navbar}) => {
  return (
    <div className={navbar ? 'navbar-btns navbar-open' : 'navbar-btns navbar-close'}>
      <button>
        Home
      </button>
      <button>
        Store
      </button>
      <button>
        Contact
      </button>
    </div>
  )
}

export default Navbar;
