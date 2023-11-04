import PropTypes from "prop-types";
import "./styles/Btndark.css";

const Btndark = ({ handleToggoleIsDark }) => {
  return (
    <>
      <label className="switch">
        <input onClick={handleToggoleIsDark} type="checkbox" />
        <span className="slider"></span>
      </label>
    </>
  );
};

Btndark.propTypes = {
  handleToggoleIsDark: PropTypes.func.isRequired,
};
export default Btndark;
