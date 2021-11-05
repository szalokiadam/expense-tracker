import "../resources/scss/Error404.scss";

export default function Error404() {
  return (
    <div className="error-404">
      <div className="background"></div>
      <div className="error-text">
        <h2>Error 404</h2>
        <p>The page does not exist!</p>
      </div>
    </div>
  );
}
