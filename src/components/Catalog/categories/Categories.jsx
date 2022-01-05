import { useDispatch, useSelector, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import {
  changeCategory,
  resetCategory,
  getCategories,
} from '../../../actions/actionCreator';
import Preloader from '../../Preloader/Preloader.jsx';
import LoadButton from '../../Cart/LoadButton/LoadButton.jsx';

function Categories(props) {
  const { categoriesList, categoriesState } = useSelector(
    (state) => state.categories,
  );
  const { categoryId } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const firstLoad = () => {
    props.getCategories();
  };

  React.useEffect(() => {
    firstLoad();
  }, [dispatch]);

  const handleClick = (id) => {
    props.changeCategory(id);
  };

  switch (categoriesState) {
    case 'idle':
      return (
        <React.Fragment>
          <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
              <a
                className={`nav-link ${categoryId === null ? 'active' : ''}`}
                onClick={() => props.resetCategory()}
                href="#"
              >
                Все
              </a>
            </li>
            {categoriesList.map((c) => {
              const active = c.id === categoryId;
              return (
                <li className="nav-item" key={nanoid()}>
                  <a
                    className={`nav-link ${active ? 'active' : ''}`}
                    onClick={() => handleClick(c.id)}
                    href="#"
                  >
                    {c.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </React.Fragment>
      );
    case 'loading':
      return <Preloader />;
    default:
      return <LoadButton currentState={categoriesState} fn={firstLoad} />;
  }
}

const mapStateToProps = (state) => {
  const { categoriesList, categoriesState } = state.categories;
  return {
    categoriesList,
    categoriesState,
  };
};

function mapDispatchToProps(dispatch) {
  const boundCreators = bindActionCreators(
    {
      getCategories,
      changeCategory,
      resetCategory,
    },
    dispatch,
  );
  return boundCreators;
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
