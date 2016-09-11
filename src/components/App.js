import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import css from '../styles/App.scss'
import modalCss from '../styles/Modal.scss'
import * as asyncActions from '../store/actions/async'
import {closeModal} from '../store/actions/values'
import {selectLang} from '../store/selectors'
import Header from './Header'
import Footer from './Footer'

class App extends React.Component {
  componentWillReceiveProps(props) {
    if ((!props.initializing && this.props.initializing) || props.lang !== this.props.lang) {
      this.fetchAll(props.lang)
    }

    if (props.useLocation && props.useLocation !== this.props.useLocation) {
      this.props.fetchLocation()
    }

    if (props.authData && props.authData !== this.props.authData) {
      this.props.fetchUser(props.authData)
    }
  }
  fetchAll(lang) {
    const {fetchAreas, fetchMenus, fetchRestaurants, fetchFavorites} = this.props
    fetchAreas(lang)
    fetchMenus(lang)
    fetchRestaurants(lang)
    fetchFavorites(lang)
  }
  render() {
    const {view, initializing, modal, closeModal} = this.props
    if (initializing)
      return null
    return (
      <div>
        <Header />
        {view}
        <Footer />
        <div className={modalCss.container + (modal.open ? ' ' + modalCss.open : '')}>
          <div className={modalCss.overlay} onClick={() => closeModal()}></div>
          <div className={modalCss.content}>{modal.component}</div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  initializing: state.value.initializing,
  view: state.value.view.view,
  lang: selectLang(state),
  modal: state.value.modal,
  useLocation: state.preferences.useLocation,
  authData: state.value.authData
})

const mapDispatch = dispatch => bindActionCreators({
  ...asyncActions,
  closeModal
}, dispatch)

export default connect(mapState, mapDispatch)(App)
