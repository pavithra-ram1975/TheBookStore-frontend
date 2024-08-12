import React from 'react';


const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>The Bookstore</h1>
        <p>Your gateway to literary adventures</p>
      </header>

      <section className="about-intro">
        <h2>Who We Are</h2>
        <p>
          At The Bookstore, we believe in the transformative power of books. Our store is not just a place to buy books; it’s a community where stories come alive. We curate a selection of books from all genres, ensuring that there’s something for every reader.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to foster a love of reading by providing access to the best books and creating a space where readers can discover, share, and connect. We believe that books have the power to change lives, and we are committed to making reading accessible to everyone.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikaROi0O2pHfj-7eNO7KIFQsLKqyVOFybEA&s" alt="Team Member 1" /> */}
            <img src="https://avatars.akamai.steamstatic.com/5ffda20b00ef1b9683cadc5ca2e449c67ceaeb3d_full.jpg" alt="Team Member 1" />

            <h3>Jane</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSciwBBLp7UUMwuYtLJyvkds9l_nOKUcTOwQQ&s" alt="Team Member 2" />
            <h3>Jerry</h3>
            <p>Chief Editor</p>
          </div>
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfet50-c5ErNz__mZ2qOC0XdHqo7HRkVn9Gg&s" alt="Team Member 3" />
            <h3>Alice Johnson</h3>
            <p>Marketing Director</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>© 2024 The Bookstore. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;