function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Learn more...</p>
      <h1 className="title">About Me!</h1>
      
      {/* Intro Section with WB Image + Bio */}
      <div className="about-intro-section">
        <div className="about-wb-container">
          <img 
            src="/assets/Thats all folks-modified.png" 
            alt="Thomas Yi at Warner Bros" 
            className="about-wb-image"
          />
          <p className="about-current-position">Currently: Software Engineer Intern at Warner Bros. Discovery</p>
        </div>

        <div className="about-bio">
          <p className="about-description">
            I'm Thomas Yi, a student at Northeastern University pursuing a combined degree in Computer Science and Media Arts. 
            I have a passion for telling stories and finding ways to express them, and I believe everyone should express 
            their childish side every so often in their work. I am always looking for a chance to grow and learn more 
            while pushing others and myself to be the best version of themselves that they can be.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;