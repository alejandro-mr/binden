import Link from 'next/link'

const Hero = ({ lead, children }) => (
  <div className="hero grid-x">
    <span className="cell small-10 small-offset-1 lead">
      { lead }
    </span>
    <div className="cell">
      { children }
    </div>

    <style jsx>{`
      .hero {
        background-image: linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ), url('../static/hero.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 18rem;
        max-height: 22rem;
        padding-top: 7rem;
        padding-bottom: 3.6rem;
      }

      .hero .lead {
        color: rgb(243, 245, 244);
        font-size: 1.5rem;
        padding-bottom: 1rem;
        text-align: center;
        text-shadow: 0 2px 2px #383838;
      }

      @media screen and (min-width: 64em) {
        .hero {
          height: 27rem;
          margin-top: -5.4375rem;
          max-height: 27rem;
          padding-top: 12.4375rem;
          padding-bottom: 1rem;
        }
      }
      `}</style>
  </div>
)

export default Hero
