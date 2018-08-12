import Menu from './menu'

const Header = () => (
  <header>
    <Menu />
    <style jsx>{`
      header {
        filter: drop-shadow(0 0 2px rgba(61, 23, 40, .1));
      }
    `}</style>
  </header>
)

export default Header
