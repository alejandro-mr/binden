import React, { Component } from 'react'

class SearchForm extends Component {
  render() {
    return (
      <form action="/search">
        <div className="grid-container">
          <div className="grid-x grid-padding-x align-center">
            <div className="cell small-12 medium-10 large-8">
              <div className="input-group">
                <input type="text" name="keyword" className="input-group-field search-input"
                  placeholder="Busca por nombre o ubicación" />
                <button type="submit" className="input-group-button search-submit">
                  <i className="material-icons">
                    search
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .search-input {
            border-color: #fff;
            border-style: solid;
            border-width: 1px 0 1px 1px;
          }
          .search-submit {
            background: rgba(115, 115, 115, .6);
            border-color: rgb(255, 255, 255);
            border-style: solid;
            border-width: 1px 1px 1px 0;
            color: #fff;
            font-weight: bold;
          }
          .search-submit i {
            width: 2.5rem;
          }

          @media screen and (min-width: 64em) {
            .search-input {
              height: 3.2rem;
            }
            .search-submit i {
              width: 3rem;
            }
          }
          `}</style>
      </form>
    )
  }
}

export default SearchForm
