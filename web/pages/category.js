import {withRouter} from 'next/router'

import Api from '../api'
import Layout from '../components/layout'

const Category = withRouter((props) => (
  <Layout withHero={false}>
    <main className="content grid-container">
      <div className="grid-x grid-margin-x small-up-3 medium-up-6">
        {props.categories.map(category => (
          <div className="cell category" key={category.id}>
            <span>{category.name}</span>
            <img src={category.image} />
          </div>
        ))}
      </div>
    </main>
    <style jsx>{`
      .category {
        height: 100px;
        text-align: center;
      }
      .category span {
        display: block;
        text-align: center;
        margin-bottom: 1rem;
      }
      .category img {
        height: 2.813rem;
      }
      `}</style>
  </Layout>
))

Category.getInitialProps = async ({ query }) => {
  const tag = query.tag;

  const res = await Api.searchCategory(tag);
  const data = await res.json();

  return {
    categories: data
  }
}

export default Category
