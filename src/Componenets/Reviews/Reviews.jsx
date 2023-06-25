import React from 'react';
import "./Reviews.scss";
// import "./Reviews.css";
import review from '../../images/review.png';

import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';


export default function Reviews() {
  const now1 = 80;
  const now2= 10;

  const now3 = 5;

  const now4 = 5;

  const now5 = 0;

  return <>

{/* Projects */}

<div className="Reviews">
<h3>Reviews</h3>

<div className="container-fluid">
  <div className="row">
    <div className="col-md-4">
      <div className="review-Results">
        <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
<span>4.8 out of 5</span>
        </div>
        <p>27 ratings</p>

        <div className="rateRatio">
          <div className="ratio">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 row-elemet">
                <p>5 star</p>
                </div>
                <div className="col-md-8 row-elemet">
                <div className='ProgressBar'>
  <ProgressBar now={now1}  />
  {/* <div className="bar progress">
    <div role="progressbar" class="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
      </div></div> */}
 </div>
                </div>
                <div className="col-md-2 row-elemet">
                <span>{now1}%</span>
                </div>

              </div>
            </div>
   
          </div>

          <div className="ratio">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 row-elemet">
                <p>4 star</p>
                </div>
                <div className="col-md-8 row-elemet">
                <div className='ProgressBar'>
  <ProgressBar now={now2}  />
  {/* <div className="bar progress">
    <div role="progressbar" class="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
      </div></div> */}
 </div>
                </div>
                <div className="col-md-2 row-elemet">
                <span>{now2}%</span>
                </div>

              </div>
            </div>
   
          </div>

          <div className="ratio">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 row-elemet">
                <p>3 star</p>
                </div>
                <div className="col-md-8 row-elemet">
                <div className='ProgressBar'>
  <ProgressBar now={now3}  />
  {/* <div className="bar progress">
    <div role="progressbar" class="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
      </div></div> */}
 </div>
                </div>
                <div className="col-md-2 row-elemet">
                <span>{now3}%</span>
                </div>

              </div>
            </div>
   
          </div>

          <div className="ratio">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 row-elemet">
                <p>2 star</p>
                </div>
                <div className="col-md-8 row-elemet">
                <div className='ProgressBar'>
  <ProgressBar now={now4}  />
  {/* <div className="bar progress">
    <div role="progressbar" class="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
      </div></div> */}
 </div>
                </div>
                <div className="col-md-2 row-elemet">
                <span>{now4}%</span>
                </div>

              </div>
            </div>
   
          </div>

          <div className="ratio">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 row-elemet">
                <p>1 star</p>
                </div>
                <div className="col-md-8 row-elemet">
                <div className='ProgressBar'>
  <ProgressBar now={now5}  />
  {/* <div className="bar progress">
    <div role="progressbar" class="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
      </div></div> */}
 </div>
                </div>
                <div className="col-md-2 row-elemet">
                <span>{now5}%</span>
                </div>

              </div>
            </div>
   
          </div>

          
           
        </div>

        <p className='Product-reviews'>Product reviews are managed by a third party to verify authenticity and compliance with out 
          <br />
          <span className='Ratings-Reviews'>
          Ratings & Reviews Guidelines
          </span>
        </p>
<Link to='/WriteReview' >
<button>Write a Review</button>
</Link>
       
      </div>
    
    </div>

    <div className="col-md-8">
      <div className="peopleReviews">
        <p>Reviews (24)</p>
        <div className="review">
          <div className="image">
            <img src={review} alt="" className='image-review' />
          </div>
          <div className="review-comment">
            <h4>Mohamed Ali</h4>
            <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
<span>4</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur. Porttitor faucibus massa sodales arcu justo. Etiam et gravida faucibus id at tempor interdum. Quis mi eu pharetra</p>
          </div>
        </div>
        <div className="review">
          <div className="image">
            <img src={review} alt="" className='image-review' />
          </div>
          <div className="review-comment">
            <h4>Mohamed Ali</h4>
            <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
<span>4</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur. Porttitor faucibus massa sodales arcu justo. Etiam et gravida faucibus id at tempor interdum. Quis mi eu pharetra</p>
          </div>
        </div>
        <div className="review">
          <div className="image">
            <img src={review} alt="" className='image-review' />
          </div>
          <div className="review-comment">
            <h4>Mohamed Ali</h4>
            <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
<span>4</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur. Porttitor faucibus massa sodales arcu justo. Etiam et gravida faucibus id at tempor interdum. Quis mi eu pharetra</p>
          </div>
        </div>

        <span className='allReviews'>View All Reviews</span>
      </div>
    </div>

  </div>
</div>

    
</div>
  
  </>
    
    
}
