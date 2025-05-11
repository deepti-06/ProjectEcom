const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <p style={{marginLeft:"10px", font:"20px"}}>Fetching...Please wait..!!</p>

    </div>
  );
};

export default LoadingSpinner;