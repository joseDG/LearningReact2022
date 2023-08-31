import PropTypes from "prop-types";


const FirstApp = ({ title, subTitle, name }) => {

  // console.log(props)

  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
    </>
  );

};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: "Jose Diaz",
  subTitle: "No hay subtítulo",
  // title: 'No hay título',
};


export default FirstApp;
