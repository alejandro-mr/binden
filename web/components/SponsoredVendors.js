import Link from 'next/link'
import VendorCard from './VendorCard'

const SponsoredVendors = (props) => (
  <div className="grid-container fluid premium-vendors">
    <div className="grid-container">
      <h5>Proveedores destacados</h5>
      <section className="grid-x grid-padding-x small-up-1 medium-up-2 large-up-4">

        <div className="cell">
          <VendorCard name="Vendor name" image="http://via.placeholder.com/350x150" title="This is a card.">
            It has an easy to override visual style, and is appropriately subdued.
          </VendorCard>
        </div>
        <div className="cell">
          <VendorCard name="Vendor name" image="http://via.placeholder.com/350x150" title="This is a card.">
            It has an easy to override visual style, and is appropriately subdued.
          </VendorCard>
        </div>
        <div className="cell">
          <VendorCard name="Vendor name" image="http://via.placeholder.com/350x150" title="This is a card.">
            It has an easy to override visual style, and is appropriately subdued.
          </VendorCard>
        </div>
        <div className="cell">
          <VendorCard name="Vendor name" image="http://via.placeholder.com/350x150" title="This is a card.">
            It has an easy to override visual style, and is appropriately subdued.
          </VendorCard>
        </div>

      </section>
    </div>
    <style jsx>{`
      .premium-vendors {
        color: rgb(19, 10, 17);
      }
      `}</style>
  </div>
)

export default SponsoredVendors
