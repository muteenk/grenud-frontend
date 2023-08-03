import React from 'react'

const Footer = () => {

  let year = new Date().getFullYear();

  return (
    <footer>
        
        <p className="copyright">Copyright &copy; {year} CloudGrenud. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer