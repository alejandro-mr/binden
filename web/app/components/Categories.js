import Link from 'next/link'
import CategoryTile from './CategoryTile';

const Categories = (props) => (
  <div className="grid-container">
    <div className="grid-x grid-margin-x small-up-1 large-up-3 main-categories">
      <CategoryTile url="/category?tag=Bodas" image="/static/wedding_category.jpg" title="Bodas" />
      <CategoryTile url="/category?tag=quinceanera" image="/static/xv_category.jpg" title="XY" />
      <CategoryTile url="/category?tag=Fiestas infantiles" image="/static/pinata_category_tmp.jpg" title="Fiestas infantiles" />
      <CategoryTile url="/category?tag=Bautizos" image="/static/baptism_category.jpg" title="Bautizos" />
      <CategoryTile url="/category?tag=Bautizos" image="" title="Baby shower" />
      <CategoryTile url="/" image="" title="Salones de eventos" />
    </div>

    <style jsx>{`
      .main-categories {
        //margin-top: 1rem;
        //margin-left: -0.125rem;
        //margin-right: -0.125rem;

        background: rgba(240, 240, 240, 1);
        box-shadow: 0 1px 0.625rem rgba(0,0,0,0.3) inset;
        padding: 1rem 0;
      }

      @media screen and (min-width: 64em) {
        .main-categories {
          background: none;
          box-shadow: none;
        }
      }
      `}</style>
  </div>
)

export default Categories
