// @flow
import React from 'react'
import {connect} from 'react-redux'
import sortBy from 'lodash/sortBy'
import Star from 'react-icons/lib/io/star'
import Map from 'react-icons/lib/md/map'
import {browserHistory} from 'react-router'

import css from '../../styles/AreaSelector.scss'
import Text from '../Text'

const specialAreas = [
  {id: -2, name: <Text id="nearby" />, icon: <Map />},
  {id: -1, name: <Text id="starred" />, icon: <Star style={{marginLeft: '0.4rem'}} />}
]

export const AreaSelector = ({areas, selectedArea, setSelectedArea}) => (
  <div className={css.modal}>
    <Text id="selectArea" className={css.title} />
    <div className={css.container}>
      {specialAreas.concat(sortBy(areas, 'name')).map(area =>
      <div key={area.id} className={css.area + (selectedArea === area.id ? ' ' + css.selected : '')}>
        <button
          onClick={() => {setSelectedArea(area.id); browserHistory.replace('/')}}
          className={'button-text ' + (selectedArea === area.id ? css.selected : '')}
          key={area.id}>
          {area.icon
          ? <div className={css.icon}>{area.icon}</div>
          : <img className={css.map} src={area.mapImageUrl} />}
          {area.name}
        </button>
      </div>
      )}
    </div>
  </div>
)

const mapState = state => ({
  areas: state.data.areas || [],
  selectedArea: state.preferences.selectedArea,
  useLocation: state.preferences.useLocation
})

const mapDispatch = dispatch => ({
  setSelectedArea: areaId => dispatch(setSelectedArea(areaId)),
  openModal(component) {
    dispatch(openModal(component))
  }
})

export default connect(mapState, mapDispatch)(AreaSelector)
