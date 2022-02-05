import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <section>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img
                height={250}
                src="https://media.istockphoto.com/photos/birthday-cake-with-happy-birthday-banner-picture-id1201202312?k=20&m=1201202312&s=612x612&w=0&h=JA1f22KxeNzkF2UFZdrqrXHsoqTmsThJoawJbbTqbAI="
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="card-image">
              <img
                height={250}
                src="https://media.istockphoto.com/photos/birthday-cake-with-happy-birthday-banner-picture-id1201202312?k=20&m=1201202312&s=612x612&w=0&h=JA1f22KxeNzkF2UFZdrqrXHsoqTmsThJoawJbbTqbAI="
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
