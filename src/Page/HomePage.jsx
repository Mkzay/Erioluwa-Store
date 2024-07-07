/* eslint-disable react/prop-types */
import Featured from "../Components/Featured";
import Hero from "../Components/Hero";
{
  /*import Products from "../Components/Products";*/
}

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Featured />
      {/*<Products
        showSuccess={showSuccess}
        toggleSuccess={toggleSuccess}
        toggleHome={toggleHome}
      />*/}
    </div>
  );
};

export default HomePage;
{
  /* { showSuccess, toggleHome, toggleSuccess } */
}
