import Link from 'next/link'

const VendorCard = ({name, title, image, children}) => (
  <div className="card">
    <div className="card-divider">
      {name}
    </div>
    <img src={image} />
    <div className="card-section">
      <h5>{title}</h5>
      <p>{children}</p>
    </div>

    <style jsx>{`
.card {
  position: relative;
}
.card-divider {
position: relative;
}
.card::before, .card::after {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 1));
  transition: all .1s;
  z-index: -1;
}

.card:hover > .card::before {
  filter: drop-shadow(0 10px 3px rgba(0, 0, 0, 0.4));
  transform: scale2d(1.02, 1.02);
}
      `}</style>

  </div>
)

export default VendorCard
