import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    // <section className="my-5">
    //   <h1 id="about">Kait Weishaar</h1>
    //   <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    //   <div className="my-2">
    //     <p>
    //       I'm a full stack web developer and designer, with a background in Architecture and Engineering. I have a Bachelor's of Architecture and a Master's in Structural Engineering, which have helped hone my design thinking and critical problem solving skills.
    //     </p>
    //   </div>
    // </section>

    //above was copied from module, I can do better
    <section className="my-5">
      <h1 id="about">Kait Weishaar</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover-image" />
      <div className="row justify-content-center" id="about-container">       
      <div lg={6} md={12}>
          <center><img src="https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/crop2.jpg" className="my-image" alt="Kait's Headshot"/></center>
          <p className="title">Full Stack Web Developer</p>
          <h2 className="bio">Bio</h2>
            <p>
            I'm a full stack web developer and designer, with a background in Architecture and Engineering.
            I have a Bachelor's of Architecture and a Master's in Structural Engineering, which have helped hone my design thinking and critical problem solving skills.
            </p>
      </div>

      </div>
    </section> 
  );
}

export default About;
