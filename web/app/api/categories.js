import fetch from 'isomorphic-unfetch'

const RESOURCE_URL = process.env.API_URL ? `${process.env.API_URL}/categories` : 'http://localhost:8080/categories';

const categories = {
  searchCategory: query => fetch(`${RESOURCE_URL}?tags_like=${query}`)
}

export default categories
