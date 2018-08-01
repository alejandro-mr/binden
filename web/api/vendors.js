import fetch from 'isomorphic-unfetch'

const RESOURCE_URL = process.env.API_URL ? `${process.env.API_URL}/vendors` : 'http://localhost:8080/vendors'

const vendors = {
  searchVendors: (query) => fetch(`${RESOURCE_URL}?q=${query}`)
}

export default vendors;
