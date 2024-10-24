import aboutPhoto from "../images/about.jpeg";
import Title from "./Title";

export const About = () => {
  return (
    <section className='section' id='about'>
      <Title first={"about"} second={"us"} />
      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutPhoto} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a
            href='https://en.wikipedia.org/wiki/Wikipedia:About'
            className='btn'
            target='_blank'
            rel='noreferrer'
          >
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
