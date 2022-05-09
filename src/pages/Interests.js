import React from 'react'

const Interests = () => {
 
  let thum = require('thum.io');
  let thumURL = thum.getThumURL({
    url: 'https://www.google.com/',
    width: 1200,
    auth: {
      type: 'md5',
      secret: process.env.THUM_IO_SECRET,
      keyId: 57899,
    },
  });

return (
    <div className='interest-page'>
        <form className="search-wrapper mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark search" placeholder="Search..." aria-label="Search"/>
        </form>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
          <img src={thumURL} className="card-img-top" alt="screenshot"/>
            <div className="card-body">
              <h5 className="card-title">page_title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
		</div>
  )
}

export default Interests