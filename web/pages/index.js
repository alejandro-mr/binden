import Link from 'next/link'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SearchForm from '../components/SearchForm'
import Categories from '../components/Categories'
import Sponsored from '../components/SponsoredVendors'
import HowItWorks from '../components/HowItWorks'

const Index = () => (
  <Layout>
    <Hero lead="Encuentra proveedores locales para tus eventos">
      <SearchForm />
    </Hero>
    <main className="content">
      <div className="grid-container fluid">
        <div className="grid-x grid-padding-x">
          <div className="hide cell text-center download-app">
            <h1>Descarga nuestra App</h1>
            <p>
              Disponible para iPhone y Android.
            </p>
          </div>
        </div>
      </div>
      <Categories></Categories>
      <Sponsored></Sponsored>
      <HowItWorks></HowItWorks>
    </main>

    <style jsx>{`
      .content {
        //background: rgba(90, 79, 83, 0.1);
        border-top: 1px solid rgba(50, 50, 50, 0.2);
        color: rgb(243, 241, 242);
        padding-top: 0;
      }
      .download-app {
        background: linear-gradient( rgba(255,255,255,0.4), rgba(255,0,0, 0.2) ), url('/static/download-app.jpg');
        background-size: cover;
        height: 15rem;
        margin-top: -1rem;
        padding-top: 5rem;
        text-shadow: 0 0 1px #059;
      }
      `}</style>
  </Layout>
)

export default Index
