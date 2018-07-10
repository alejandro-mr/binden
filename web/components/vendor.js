import Link from 'next/link'

const Vendor = ({ id, image, name, description, category }) => (
  <div className="cell vendor">
    <div className="media-object stack-for-small">
      <div className="media-object-section">
        <div className="thumbnail">
          <img src={image} />
        </div>
      </div>
      <div className="media-object-section main-section">
        <Link href="/">
          <h4>
            {name}
          </h4>
        </Link>
        <span className="category">{category}</span>
        <p>{description}</p>
        <Link href="/contact">
          <a className="button alert">
            Más información
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .vendor {
        color: rgb(39, 18, 27);
        border-bottom: 1px dashed rgba(88, 90, 89, .3);
      }
      .vendor:nth-child(n+2) .media-object {
        margin-top: 1rem;
      }
      .vendor h4 {
        color: rgb(64, 24, 41);
        font-size: 1.25rem;
        font-weight: 600;
      }
      .vendor .category {
        color: rgb(88, 90, 89);
        font-size: .875rem;
      }
      .vendor p {
        font-size: 1rem;
      }
      `}</style>
  </div>
)

export default Vendor
