import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div>Forms and FAQ</div>
        <div>
            <form action="">
                <label htmlFor=""> question 1</label>
                <input type="text" />
                <br />
                <label htmlFor=""> question 2</label>
                <input type="text" />
                <br />
                <label htmlFor=""> question 3</label>
                <input type="text" />
                <br />
                <label htmlFor=""> question 4</label>
                <input type="text" />
                <br />
            </form>
        </div>
    </div>
  )
}

export default Footer