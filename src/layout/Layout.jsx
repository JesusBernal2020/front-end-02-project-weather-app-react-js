import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <article className="flex gap-1 items-center dark:text-white">
      {children}
    </article>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;
