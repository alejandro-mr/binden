import Link from 'next/link'

const Footer = (props) => (
  <footer className="grid-container fluid">
    <div className="grid-x grid-margin-x">
      <div className="logo cell small-12 text-center">
        <Link href="/">
          <div>Binden<span>&reg;</span></div>
        </Link>
      </div>
      <div className="cell small-12 text-center">
        { props.children }
      </div>
      <div className="cell small-12 large-9 small-order-1 large-order-2">
        <ul className="menu vertical large-horizontal align-center">
          <li>
            <Link href="/contacto">
              <a>
                Contáctanos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/acerca">
              <a>
                Acerca de Nosotros
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                Términos y Condiciones
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                Política de Privacidad
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="copyright cell small-12 large-3 small-order-2 large-order-1 text-center">
        <div>
          Copyright &copy; 2018 <span>BINDEN, Inc.</span>
        </div>
      </div>
    </div>

    <style jsx>{`
      footer {
        background: rgb(31, 17, 28);
        border-top: 3px solid rgb(41, 21, 28);
        color: rgb(243, 245, 244);
        font-size: .875rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
      }
      footer .menu a {
        color: rgb(243, 245, 244);
        position: relative;
      }
      /*
      footer .menu a:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgb(190, 39, 48);
        height: 0px;
        width: 0px;
        transition: all 0.5s ease-in-out 0s;
      }
      */
      footer .menu a:hover:after, footer .menu a.active:after {
        background: rgb(190, 39, 48);
        bottom: 0;
        content: "";
        height: 2px;
        left: 0;
        position: absolute;
        width: 100%;
      }

      footer .logo {
        background-size: cover;
        padding: 0 .5rem;
        margin-bottom: 1rem;

        font-family: 'Galada', cursive;
        font-size: 1.875rem;
        color: rgb(164, 37, 46);
      }
      footer .logo span {
        font-size: 1rem;
        vertical-align: super;
      }
      footer .copyright {
        color: rgb(140, 140, 140);
        font-size: .8125rem;
        margin-top: 1.5625rem;
      }
      footer .copyright span {
        //color: rgb(142, 41, 97);
        //color: rgb(255, 220, 240);
        color: rgb(243, 245, 244);
        font-weight: 600;
      }

      @media screen and (min-width: 64em) {
        footer .copyright {
          margin-top: 0;
          padding: 0.7rem 0;
        }
      }
      `}</style>
  </footer>
)

export default Footer
