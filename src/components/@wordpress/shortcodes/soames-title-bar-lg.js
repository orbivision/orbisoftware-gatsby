import React from "react";

const SoamesTitleBarLg = ({ title, attributes }) => {

  if (!attributes.subtitle) {
    attributes.subtitle = null;
  }
  if (!attributes.background) {
    attributes.background = 'https://picsum.photos/1080/720';
  }

  const css = `
    .soames-background-title-bar-lg::after {
      background: url(${attributes.background});
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      position: fixed;
      top: 0px;
      left: 0px;
      height: 177.1875px;
      overflow: hidden;
      pointer-events: none;
      margin-top: -210px;
      transform: translate3d(0px, 210px, 0px);
    }
  `

  return(
    <>
      <style>{css}</style>
      <section className="soames-header-sm soames-parallax soames-background-title-bar-lg mt-5 mb-3">
        <div className="soames-overlay" style={{ opacity: 0.6, backgroundColor: 'rgb(46, 46, 46)' }}></div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="soames-white col-md-10">
              <h1 className="soames-section-title align-center soames-bold pb-3 mbr-fonts-style display-1">
                {title}
              </h1>
              {attributes.subtitle &&
                <h3 className="soames-section-subtitle align-center soames-light soames-white mbr-fonts-style display-5">
                  {attributes.subtitle}
                </h3>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )

}

export default SoamesTitleBarLg;