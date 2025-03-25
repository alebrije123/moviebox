import React, { useState } from "react";
import image1 from "../../assets/peli1.jpeg";
import "../../css/carousel.css";
export const CarouselComponent = () => {
  return (
    <div
      id="carouselIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
      <div className="carousel-item">
          <img
            src="https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%207.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-start">
            <h4 className="movie-title">First slide label</h4>
            <div className="d-flex align-items-center justify-content-end w-100">
              <div className="movie-stars">
                {[...Array(4)].map((_, index) => (
                  <i key={index} className="bi bi-star-fill"></i>
                ))}
              </div>{" "}
              <h2 className="movie-vote ms-2">4</h2>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%202.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-start">
            <h4 className="movie-title">Second slide label</h4>
            <div className="d-flex align-items-center justify-content-end w-100">
              <div className="movie-stars">
                {[...Array(4)].map((_, index) => (
                  <i key={index} className="bi bi-star-fill"></i>
                ))}
              </div>{" "}
              <h2 className="movie-vote ms-2">4</h2>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%203.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-start">
            <h4 className="movie-title">First slide label</h4>
            <div className="d-flex align-items-center justify-content-end w-100">
              <div className="movie-stars">
                {[...Array(4)].map((_, index) => (
                  <i key={index} className="bi bi-star-fill"></i>
                ))}
              </div>{" "}
              <h2 className="movie-vote ms-2">4</h2>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
