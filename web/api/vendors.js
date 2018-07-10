import fetch from 'isomorphic-unfetch'

const RESOURCE_URL = `${process.env.API_URL}/vendors`

const vendors = {
  searchVendors: (query) => fetch(`${RESOURCE_URL}?q=${query}`)
}

export default vendors;
