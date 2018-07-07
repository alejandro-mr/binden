import Link from 'next/link'

const Footer = (props) => (
  <footer className="grid-container fluid">
    <div className="grid-x grid-margin-x">
      <div className="cell small-12 text-center">
        { props.children }
      </div>
      <div className="cell small-12 text-center">
        <Link href="/">
          <span className="logo">Binden<span>&reg;</span></span>
        </Link>
      </div>
      <div className="cell small-12 large-3 small-order-2 large-order-1 text-center">
        <span className="copyright">
          Copyright &copy; 2018 BINDEN, Inc.
        </span>
      </div>
      <div className="cell small-12 large-9 small-order-1 large-order-2">
        <ul className="menu vertical medium-horizontal align-center">
          <li>
            <Link href="">
              <a>
                Contáctanos
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
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
    </div>

    <style jsx>{`
      footer {
        background: rgb(31, 17, 28);
        border-top: 1px solid rgb(41, 21, 28);
        color: rgb(243, 245, 244);
        font-size: .8125rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
      }
      footer .menu a {
        color: rgb(243, 245, 244);
      }
      footer .logo {
        background-size: cover;
        padding: 0 .5rem;

        font-family: 'Galada', cursive;
        font-size: 1.375rem;
        color: rgb(164, 37, 46);
      }
      footer .logo span {
        font-size: 1rem;
        vertical-align: super;
      }
      footer .copyright {
        font-size: .625rem;
      }
      `}</style>
  </footer>
)

export default Footer
