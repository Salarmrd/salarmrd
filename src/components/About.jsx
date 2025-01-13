import React from 'react';
import styles from "./About.module.scss";
import Counter from "./Counter";

const About = () => {
  return (
    <div className='container'>
      <h2>About <span className={styles.me}>me</span></h2>
      <p className='mb-3 mb-md-5 mt-2'>My adventure in the tech world began 4 years ago with HTML and CSS, laying a solid foundation for my web development skills. However, my path took an interesting turn as I explored WordPress and UI/UX design, where I spent the next 4 years creating engaging and user-friendly websites.<br />
      A year ago, I decided to reignite my love for programming and dove back into the world of code. Currently, I'm a third-year software engineering student, honing my skills and exploring the exciting realms of frontend development. I've been immersing myself in modern tools and technologies like React, Sass, and Bootstrap, and I'm thrilled to bring these skills to life in my projects.<br />
      I'm currently focused on crafting beautiful, responsive, and dynamic websites, and I'm eager to apply my blend of design and development expertise to new challenges. If you're looking for someone who combines creative design with solid technical skills, let's connect!</p>
      <div className="row flex-column flex-md-row justify-content-start justify-content-md-between">
        <div className="col-md-4 col-12 mb-3 d-flex">
          <div className="d-flex align-items-center w-100">
            <h3 className={styles.gradient}><Counter end={40} duration={2000} />+</h3>
            <div>
              <p className={styles.info}>
                <span className={styles.highlightRed}>Website development</span>
                <br />
                More than 40 projects with WordPress
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mb-3 d-flex">
          <div className="d-flex align-items-center w-100 justify-content-md-end">
            <h3 className='mr-5'><Counter end={25} duration={2000} />+</h3>
            <p className={styles.info}>
              <span className={styles.highlightRed}>UI/UX design</span>
              <br />
              More than 25 Figma projects
            </p>
          </div>
        </div>
        <div className="col-md-4 col-12  d-flex justify-content-md-end">
          <div className="d-flex align-items-center ">
            <h3><Counter end={10} duration={2000} />+</h3>
            <p className={styles.info}>
              <span className={styles.highlightRed}>React projects</span>
              <br />
              More than 5 projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
