import Layout from '../components/layout'
import Hero from '../components/hero'
import SearchForm from '../components/SearchForm'

const Index = () => (
  <Layout>
    <Hero lead="Encuentra proveedores locales para tus eventos">
      <SearchForm />
    </Hero>
    <main className="content grid-container">
      <div className="grid-x grid-margin-x">
        <div className="cell">
          <h1>Descarga nuestra App</h1>
          <p>
            Disponible para iPhone y Android.
          </p>
        </div>
      </div>
    </main>
  </Layout>
)

export default Index
