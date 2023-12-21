import React from 'react'
import '../Styles/HomePage.css'
import Navbar from './Navbar'


const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className='container'>
          <div className="Home-banner">
            <div className="banner-wrap">
              <div>
                <h1>Football Tournament</h1>
                <h4>Create your tournament now! It's free and no sign-up required.</h4>
              </div>
  
              <div>
                <select name="" id="">
                  <option value="" disabled hidden selected>Select your participents</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>
              </div>
  
              <div className="format-section">
                <h4>Format</h4>
                <form>
                  <div className='choosing'>
                    <div className='knockout'>
                      <input type="radio" name="format" /> 
                      <label htmlFor="">Knockout Bracket</label>
                    </div>
  
                    <div className='elimination'>
                      <input type="radio" name="format" />
                      <label htmlFor="">Double-Elimination Bracket</label>
                    </div>
  
                    <div className='league'>
                      <input type="radio" name="format" />
                      <label htmlFor="">Round-robin League</label>
                    </div>
  
                    <div className='multistage'>
                      <input type="radio" name="format" />
                      <label htmlFor="">Multistage: Round-robin Groups + Knockout Bracket</label>
                    </div>
                  </div>
                </form>
              </div>
  
              <div className="accept">
                <p>Don't worry, you can customize more settings later!</p>
                <button>CREATE TOURNAMENT</button>
              </div>
  
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage
