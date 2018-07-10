import {withRouter} from 'next/router'
import Link from 'next/link'

import Api from '../api'
import Layout from '../components/layout'
import Vendor from '../components/vendor'

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
            <Vendor {...vendor} key={vendor.id} />
        ))}
      </div>
    </main>
  </Layout>
))

Search.getInitialProps = async ({ query }) => {
  const search = query.keyword;

  const res = await Api.searchVendors(search);
  const data = await res.json()

  return {
    vendors: data
 }
}

export default Search
