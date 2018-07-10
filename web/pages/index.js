import Link from 'next/link'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SearchForm from '../components/SearchForm'

const Index = () => (
  <Layout>
    <Hero lead="Encuentra proveedores locales para tus eventos">
      <SearchForm />
    </Hero>
    <main className="content grid-container">
      <div className="grid-x">
        <div className="cell download-app">
          <h1>Descarga nuestra App</h1>
          <p>
            Disponible para iPhone y Android.
          </p>
        </div>
      </div>
      <div className="grid-x grid-margin-x small-up-1 medium-up-2 large-up-4 main-categories">
        <Link href="/">
          <div className="cell text-center wedding">
            Bodas
          </div>
        </Link>
        <Link href="/">
          <div className="cell text-center xy">
            XY
          </div>
        </Link>
        <Link href="/">
          <div className="cell text-center children-party">
            Fiestas infantiles
          </div>
        </Link>
        <Link href="/">
          <div className="cell text-center baptism">
            Bautizo
          </div>
        </Link>
      </div>
    </main>

    <style jsx>{`
      .download-app {
        background: url('../static/download-app.jpg');
        background-size: cover;
        height: 22rem;
        color: #fff;
        text-align: center;
      }
      .main-categories {
        margin-top: 1rem;
      }
      .main-categories div {
        background-size: cover;
        border: 1px solid #ccc;
        color: #fff;
        cursor: pointer;
        font-size: 1.75rem;
        line-height: 5rem;
        font-weight: 600;
        height: 12rem;
      }
      .main-categories .wedding {
        background-image: url('../../static/wedding_category.jpg');
      }
      .main-categories .xy {
        background-image: url('../../static/xv_category.jpg');
      }
      .main-categories .children-party {
        background-image: url('../../static/children_party_category.jpg');
      }
      .main-categories .baptism {
        background-image: url('../../static/baptism_category.jpg');
      }
      `}</style>
  </Layout>
)

export default Index
