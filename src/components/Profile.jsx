import { useState, useEffect } from 'react';
// import SpotifyPlayer from './SpotifyPlayer';

function Profile() {
  const [reelExpanded, setReelExpanded] = useState(false);

  const toggleReel = () => {
    setReelExpanded(!reelExpanded);
  };

  return (
    <section id="profile">
      {/* Top Row - Intro Text + Profile Pic */}
      <div className="profile-top-row">
        {/* Left - Text */}
        <div className="profile-intro">
          <p className="section__text__p1">Hello! I am...</p>
          <h1 className="title">Thomas Yi</h1>
          <p className="section__text__p2">3D Animator & Pipeline Developer</p>
          
          <div className="profile-actions">
            <button 
              className="btn btn-color-1" 
              onClick={() => window.location.href = '#contact'}
            >
              Contact
            </button>
            <div className="socials-row">
              <img 
                src="/assets/linkedin.png" 
                alt="My LinkedIn profile"
                className="icon" 
                onClick={() => window.location.href = 'https://www.linkedin.com/in/yhomasti/'}
              />
              <img 
                src="/assets/email.png" 
                alt="Email me!"
                className="icon" 
                onClick={() => window.location.href = 'mailto:thomasyi2005@gmail.com'}
              />
            </div>
          </div>
        </div>

        {/* Right - Profile Pic */}
        <div className="profile-pic-section">
          <p className="current-position">Currently: Software Engineer Intern at Warner Bros. Discovery</p>
          <div className="section__pic-container">
            <img 
              src="/assets/Thats all folks-modified.png" 
              alt="Thomas Yi profile picture" 
              id="profile-pic" 
            />
          </div>
        </div>
      </div>

      {/* Bottom Row - Two Cards Side by Side */}
      <div className="profile-cards-row">
        {/* TD Demo Reel Card */}
        <div className={`profile-nav-card tech-card ${reelExpanded ? 'reel-expanded' : ''}`}>
          <h3>Technical Direction Demo Reel</h3>
          <p className="card-subtitle">Pipeline Tools & Development</p>
          
          {!reelExpanded ? (
            // YouTube Thumbnail
            <div className="card-video-container" onClick={toggleReel} style={{ cursor: 'pointer' }}>
              <img 
                src="https://img.youtube.com/vi/VgLU79oU2dI/maxresdefault.jpg"
                alt="TD Demo Reel Thumbnail"
                className="youtube-thumbnail"
              />
              <div className="play-button-overlay">▶</div>
            </div>
          ) : (
            // YouTube Embed
            <div className="card-youtube-embed">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VgLU79oU2dI?autoplay=1"
                title="Technical Direction Demo Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          
          <div className="reel-buttons">
            <button 
              className="btn btn-color-2 project-btn"
              onClick={toggleReel}
            >
              {reelExpanded ? 'Close Reel ✕' : 'Watch Reel'}
            </button>
            <button 
              className="btn btn-color-2 project-btn"
              onClick={() => window.location.href = '#code'}
            >
              View All Projects →
            </button>
          </div>
        </div>

        {/* 3D Animation Card - Unchanged */}
        <div 
          className="profile-nav-card animation-card"
          onClick={() => window.location.href = '#art'}
        >
          <h3>3D Animation</h3>
          <p className="card-subtitle">Character Animation & Storytelling</p>
          
          <div className="card-video-container">
            <video 
              className="card-preview-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/3D/InitialTestRender_1.mp4" type="video/mp4" />
            </video>
          </div>
          
          <p className="card-cta">Click here to check out my animation portfolio →</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;