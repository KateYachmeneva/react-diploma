import React, { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import Preloader from '../Preloader/Preloader.jsx';
import OrderForm from './OrderForm/OrderForm.jsx';
import LoadButton from './LoadButton/LoadButton.jsx';
import {
  toggleDeleteCartItem,
  removeDeleted,
  fetchPrices,
} from '../../actions/actionCreator';

const Cart = (props) => {
  const { cartState } = useSelector((state) => state.cart);
  const cartitems = useSelector((state) => state.cartitems);
  const sum = cartitems
    .filter((el) => el.delete !== true)
    .reduce((s, el) => s + el.newPrice * el.quantity, 0);

  const firstLoad = () => {
    if (cartitems.length > 0) {
      props.getPrice(cartitems);
    }
  };
  const handleToggleDelete = (id) => {
    props.onToggleDelete(id);
  };

  useEffect(() => {
    const clear = () => props.removeDeleted();
    window.addEventListener('beforeunload', clear);
    firstLoad();
    return () => {
      window.removeEventListener('beforeunload', clear);
      clear();
    };
  }, []);

  if (cartState === 'idle') {
    return (
      <React.Fragment>
        <section className="cart">
          <h2 className="text-center">Корзина</h2>
          {cartitems.length > 0 ? (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название</th>
                  <th scope="col">Размер</th>
                  <th scope="col">Кол-во</th>
                  <th scope="col">Стоимость</th>
                  <th scope="col">Итого</th>
                  <th scope="col">Действия</th>
                </tr>
              </thead>
              <tbody>
                {cartitems.map((el, index) => (
                  <tr
                    className={el.delete ? 'bg-light' : null}
                    key={el.cartItemId}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>
                      {el.delete ? (
                        <b className="text-warning">Удалено: </b>
                      ) : null}
                      <a href={`/catalog/${el.id}`}>{el.title}</a>
                    </td>
                    <td>{el.size}</td>
                    <td>{el.quantity}</td>
                    <td>
                      {el.price !== el.newPrice ? (
                        <>
                          <s>{`${el.price}р.`}</s>
                          {el.newPrice > el.price ? (
                            <b className="text-danger"> ↑ {el.newPrice}р.</b>
                          ) : (
                            <b className="text-success"> ↓ {el.newPrice}р.</b>
                          )}
                        </>
                      ) : (
                        `${el.price}р.`
                      )}
                    </td>
                    <td>
                      {el.price !== el.newPrice ? (
                        <>
                          <s>{`${el.price * el.quantity}р.`}</s>
                          {el.newPrice > el.price ? (
                            <b className="text-danger">
                              {' '}
                              ↑ {el.newPrice * el.quantity}р.
                            </b>
                          ) : (
                            <b className="text-success">
                              {' '}
                              ↓ {el.newPrice * el.quantity}р.
                            </b>
                          )}
                        </>
                      ) : (
                        `${el.newPrice * el.quantity}р.`
                      )}
                    </td>
                    <td>
                      <button
                        className={`btn ${
                          el.delete ? 'btn-primary' : 'btn-outline-danger'
                        } btn-sm`}
                        onClick={() => handleToggleDelete(el.id)}
                      >
                        {el.delete ? 'Отменить удаление' : 'Удалить'}
                      </button>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td colSpan="5" className="text-right">
                    Общая стоимость
                  </td>
                  <td>{sum}р.</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div> Пусто... </div>
          )}
        </section>
        {cartitems.filter((el) => !el.delete).length > 0 ? <OrderForm /> : null}
      </React.Fragment>
    );
  }

  if (cartState === 'loading') return <Preloader />;
  return <LoadButton firstLoad={firstLoad} currentState={cartState} />;
};

const mapStateToProps = (state) => {
  const { cartState } = state.cart;
  const { cartItems } = state;
  return { cartState, cartItems };
};

const mapDispatchToProps = (dispatch) => ({
  getPrice: (items) => dispatch(fetchPrices(items)),
  onToggleDelete: (id) => {
    dispatch(toggleDeleteCartItem(id));
  },
  removeDeleted: () => dispatch(removeDeleted()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
