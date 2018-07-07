import {withRouter} from 'next/router'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/layout'

const Search = withRouter((props) => (
  <Layout withHero={ false }>
    <main className="content grid-container">
      <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-12 large-12">
          <nav aria-label="You are here:" role="navigation">
            <ul className="breadcrumbs">
              <li>
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </li>
              <li className="disabled">
                Búsqueda:
              </li>
              <li>
                <span className="show-for-sr">Current: </span> {props.router.query.keyword}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="grid-x grid-margin-x">
        {props.vendors.map((vendor) => (
          <div className="cell vendor" key={vendor.id}>
            <div className="media-object stack-for-small">
              <div className="media-object-section">
                <div className="thumbnail">
                  <img src={vendor.image} />
                </div>
              </div>
              <div className="media-object-section main-section">
                <Link href="/">
                  <h4>
                    {vendor.name}
                  </h4>
                </Link>
                <span className="category">{vendor.category}</span>
                <p>{vendor.description}</p>
                <Link href="/contact">
                  <a className="button alert">
                    Más información
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>

    <style jsx>{`
      .vendor {
        color: rgb(39, 18, 27);
        border-bottom: 1px dashed rgba(88, 90, 89, .3);
      }
      .vendor:nth-child(n+2) .media-object {
        margin-top: 1rem;
      }
      .vendor h4 {
        color: rgb(64, 24, 41);
        font-size: 1.25rem;
        font-weight: 600;
      }
      .vendor .category {
        color: rgb(88, 90, 89);
        font-size: .875rem;
      }
      .vendor p {
        font-size: 1rem;
      }
      `}</style>
  </Layout>
))

Search.getInitialProps = async ({ query }) => {
  const search = query.keyword;

  const res = await fetch(`http://localhost:8080/vendors?q=${search}`)
  const data = await res.json()

  return {
    vendors: data
 }
}

export default Search
