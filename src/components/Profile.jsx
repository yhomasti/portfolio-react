import { useState } from 'react';

function Profile() {
  const [reelExpanded, setReelExpanded] = useState(false);

  const toggleReel = () => {
    setReelExpanded(!reelExpanded);
  };

  return (
    <section id="profile">
      {/* Just the Two Cards - TD Reel + Animation */}
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

        {/* 3D Animation Card */}
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