import classes from './history.module.css';
import { useAppSelector } from '../../hooks/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromHistory } from '../../redux/history-reducer';
import { getDataFromLS, setDataToLS } from '../../utils/localStorage';
import { useEffect } from 'react';

const History = () => {
  const toLogin = useNavigate();
  const isAuth = getDataFromLS('isAuth', '""');
  const history = useAppSelector(state => state.history.history);
  const dispatch = useDispatch();
  const isAuthHistory = isAuth + ' history';

  useEffect(() => {
    if (!isAuth) {
      toLogin('/loginPage')
    }
  });

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  function removeHistoryItem(e: any) {
    const target = e.target as Element;
    const remove = target.getAttribute('id');
    dispatch(removeFromHistory(remove));
    const history = getDataFromLS(isAuthHistory, '[]').filter(
      (el: string) => el !== remove
    );
    setDataToLS(isAuthHistory, history);
  }

  return (
    <div className={classes.history}>
      <h2 className={classes.historyTitle}>Search history:</h2>
      {history.length ? (
        <div className={classes.historyList}>
          {history.map((el, id) => (
            <div className={classes.historyItem} key={id}>
              <Link className={classes.historyLink} to={`/search?name=${el}`}>
                {el}
              </Link>
              <p id={el} className={classes.deleteHistoryItem} onClick={removeHistoryItem}>
                delete
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className={classes.historyEmpty}>Search history is empty</p>
      )}
    </div>
  )
}

export default History;