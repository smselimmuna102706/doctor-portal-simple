import React from 'react';
import './News.css';
import news1 from '../Resources/images/news1.jpg'
import news2 from '../Resources/images/news2.jpg'
import news3 from '../Resources/images/news3.png'

const News = () => {
    return (
        <section className='news-section'>
             <div className="container">
                <div className="row">
                    <div className="col-lg-5"></div>
                    <div className="col-lg-2">
                    <div className="news-heading">
                          <h1>News</h1>
                        </div>
                    </div>
                    <div className="col-lg-5"></div>
                </div>

               
               <div className="row">
                <div className="col-lg-4">
                    <div className="news-item">
                        <img src={news1} alt="" />
                        <a href="https://www.stand.org.au/articles/foundation-christmas-celebration">Foundation Christmas Celebration </a>
                        <p>Celebrating our St Andrew's Foundation Volunteers and all the good work they do each year to help us support our hospital.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="news-item">
                        <img src={news2} alt="" />
                        <a href="https://www.stand.org.au/articles/busiest-robot-in-the-southern-hemisphere">Busiest robot in Australia </a>
                        <p>St Andrew’s Hospital is celebrating a technological milestone, having completed more than 5,500 robotic surgical procedures since 2013.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="news-item">
                        <img src={news3} alt="" />
                        <a href="https://www.stand.org.au/articles/st-andrew-s-hospital-annual-report-2021-22">2021/22 Annual Report  </a>
                        <p>A glimpse of the exciting initiatives we have been part of and the many ways we are contributing toward a healthier tomorrow for our community.</p>
                    </div>
                </div>
               </div>

               <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-2">
                    <div className="news-button">
                        <button>View all News</button>
                    </div>
                </div>
                <div className="col-lg-4"></div>
               </div>



             </div>
        </section>
    );
};

export default News;