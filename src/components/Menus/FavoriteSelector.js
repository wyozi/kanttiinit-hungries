// @flow
import React from 'react'
import Heart from 'react-icons/lib/md/favorite'
import HeartOutline from 'react-icons/lib/md/favorite-outline'
import {observer} from 'mobx-react'

import {dataStore, preferenceStore} from '../../store'
import css from '../../styles/FavoriteSelector.scss'

@observer
export default class FavoriteSelector extends React.PureComponent {
  render() {
    return (
      <div className={css.modal}>
        <h1>Suosikit</h1>
        <div className={css.container}>
          {dataStore.formattedFavorites.map(favorite =>
          <button
            key={favorite.id}
            className={'button ' + (favorite.isSelected ? css.selected : '')}
            onClick={() => preferenceStore.toggleFavorite(favorite.id)}>
            {favorite.isSelected
            ? <Heart className="inline-icon" />
            : <HeartOutline className="inline-icon" />}
            &nbsp;
            {favorite.name}
          </button>
          )}
        </div>
      </div>
    )
  }
}