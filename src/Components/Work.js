import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Post Meals",
      text: "If you have any recipe you want to share with us, you can do so",
    },
    {
      image: ChooseMeals,
      title: "Choose Your Recipes",
      text: "Search for any recipe you want to prepare",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "You can purchase the components and they will arrive to you as quickly as possible",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        If you want to search for a recipe you want to prepare, or even post your recipe and share it with us
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
