import React from "react";

const HeroHeader = ({
  title,
  subhead,
  backgroundImage,
  backgroundImageTitle,
  overlayOpacity
}) => {
  
  if (!backgroundImage) {
    backgroundImage = 'https://picsum.photos/1080/720';
  } else {
    // check background image title for specified opacity value
    if (backgroundImageTitle && backgroundImageTitle.includes('_03o_')) {
      overlayOpacity = 0.3;
    }
    else if (backgroundImageTitle && backgroundImageTitle.includes('_04o_')) {
      overlayOpacity = 0.4;
    }
    else if (backgroundImageTitle && backgroundImageTitle.includes('_05o_')) {
      overlayOpacity = 0.5;
    }
    else if (backgroundImageTitle && backgroundImageTitle.includes('_06o_')) {
      overlayOpacity = 0.6;
    }
    else if (backgroundImageTitle && backgroundImageTitle.includes('_07o_')) {
      overlayOpacity = 0.7;
    }
  }

  // default overlay opacity to 0.6
  if (!overlayOpacity) {
    overlayOpacity = 0.6;
  }

  const css = `
    .soames-background-lg::after {
      background: url(${backgroundImage});
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      position: fixed;
      top: 0px;
      left: 0px;
      overflow: hidden;
      pointer-events: none;
      margin-top: -180px;
    }
  `

  return (
    <>
      <style>{css}</style>
      <section className="soames-header-lg soames-parallax soames-background-lg" id="header1">
        <div className="soames-overlay"
          style={{ opacity: overlayOpacity, backgroundColor: 'rgb(46, 46, 46)' }} />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="soames-white col-md-10">
              <h1 className="soames-section-title align-center soames-bold pb-3 mbr-fonts-style display-1">
                {title}
              </h1>
              <div className="soames-section-subtitle align-center soames-light soames-white mbr-fonts-style display-5">
                {subhead}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroHeader;
