import Link from 'next/link'

const CategoryTile = ({title, image}) =>(
  <Link prefetch href="/about">
    <a className="cell text-center category-tile">
      <div className="overlay"></div>
      <div className="category-title">
        { title }
      </div>

      <style jsx>{`
        .category-tile {
          color: rgb(243, 245, 244);
          //border: 1px solid rgba(0, 0, 0, .5);
          //border-width: 1px 1px 0 1px;
          cursor: pointer;
          display: flex;
          font-size: 1rem;
          line-height: 1rem;
          font-weight: 600;
          height: 5rem;
          position: relative;
          transition: all .3s;

          //margin-left: .125rem;
          //margin-right: .125rem;
          //width: calc(33.33333% - .25rem);
        }

        .category-tile:hover {
          color: rgb(243, 245, 244);
          height: 10rem;
        }

        .category-tile .overlay {
          background-image: url('${image ? image : ''}');
          background-position: center center;
          background-size: cover;
          filter: drop-shadow(0 0 2px rgb(0 ,0, 0));
          height: 100%;
          position: absolute;
          width: 100%;
        }

        .category-tile .category-title {
          align-self: center;
          font-size: 1.25rem;
          position: relative;
          text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
          width: 100%;
        }

        .category-tile:hover > .category-title {
          align-self: flex-end;
          background: rgba(13, 13, 13, 0.5);
          height: 3rem;
          padding: 0.875rem 0;
        }

        @media screen and (min-width: 64em) {
          .category-tile {
            height: 15rem;
            font-size: 1.5rem;
            margin-top: 0.625rem;
            position: relative;
          }

          .category-tile .overlay {
            background-size: 100%;
            background-position: center center;
            transition: all 0.5s ease-in 0s;
          }

          .category-tile .category-title {
            align-self: flex-end;
            position: absolute;
            bottom: 0;
            margin-left: 0;
            width: 100%;
            height: 3rem;
            background-color: rgba(13, 13, 13, 0.5);
            padding: 0.875rem 0;
          }
          .category-tile:hover {
            height: 15rem;
          }
          .category-tile:hover > .overlay {
            background-size: 110%;
          }
        }
      `}</style>

    </a>
  </Link>
)

export default CategoryTile;
