import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GridItem from '@react-css/grid/dist/src/components/GridItem';
import Grid from '@react-css/grid';

import ItemImage from './ItemImage.jsx';

function Item(props) {
  const {
    img, title, price, id,
  } = props;

  return (
    <>
      <GridItem className="card catalog-item-card">
        <ItemImage img={img} title={title} />
        <Grid className="card-body" rows="1fr">
          <p className="card-text">{title}</p>
          <p className="card-text">{price} руб.</p>
          <Link className="btn btn-outline-primary" to={`/catalog/${id}`}>
            Заказать
        </Link>
        </Grid>
      </GridItem>
    </>
  );
}
const mapStateToProps = (state, ownProps) => {
  const items = state.items.itemsList.length
    ? state.items.itemsList
    : state.topsales.topsalesList;
  const { id } = ownProps;
  const currentItem = items.find((i) => i.id === id);
  return {
    id,
    img: currentItem.img,
    price: currentItem.price,
    title: currentItem.title,
  };
};
export default connect(mapStateToProps)(Item);
