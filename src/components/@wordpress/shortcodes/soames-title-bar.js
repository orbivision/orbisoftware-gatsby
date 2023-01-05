import React from "react";

const SoamesTitleBar = ({ title }) => {

  return(
    <section className="soames-section content4 soames-title-bar" id="content4-fq">
      <div className="container">
        <div className="media-container-row">
          <div className="title col-12 col-md-8">
            <h2 className="align-center pb-3 mbr-fonts-style display-2">{title}</h2>
          </div>
        </div>
      </div>
    </section>
  )

}

export default SoamesTitleBar;