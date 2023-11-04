import "./styles/Loader.css";

const Loader = () => {
  return (
    <section className="grid gap-5">
      <div className="sun">
        <div className="center"></div>
        <div className="ray r-1"></div>
        <div className="ray r-2"></div>
        <div className="ray r-3"></div>
        <div className="ray r-4"></div>
        <div className="ray r-5"></div>
        <div className="ray r-6"></div>
        <div className="ray r-7"></div>
        <div className="ray r-8"></div>
      </div>
      <div>
        <h2 className="text-xl text-white font-bold drop-shadow-lg">
          Loading...
        </h2>
      </div>
    </section>
  );
};

export default Loader;
