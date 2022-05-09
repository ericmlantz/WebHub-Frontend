import React from 'react'

const Interests = () => {
 
  let auth = '57899-2f651113cbc45483ba2e7f8c5b935874';
  let thumUrl = '';

  let imgUrl = '//image.thum.io/get/fullpage/auth/' + auth + '/' + thumUrl;

  return (
    <div className='interest-page'>
        <form className="search-wrapper mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark search" placeholder="Search..." aria-label="Search"/>
        </form>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
          <img src={imgUrl} className="card-img-top" alt="screenshot"/>
            <div className="card-body">
              <h5 className="card-title">{page_title}</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interests