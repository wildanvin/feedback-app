import Card from "../components/shared/Card";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>
          This is a React App to leave feedback for a product or service. With
          it I am learning React
        </p>
        <p>Version: 0.1.0</p>
        <p>
          <a href="/">Back To Home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
