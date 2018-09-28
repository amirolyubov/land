import React, { Component, Fragment } from 'react'
import ImageGallery from 'react-image-gallery';

class Gallery__mobile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 0,
      selectedImage: 0
    }
  }

  handleNameClick = key => {
    this.reactGallery.slideToIndex(0)
    this.setState({ selected: key, selectedImage: 0 })
  }
  handleNextImageClick = () => {
    const { data } = this.props
    const { selectedImage, selected } = this.state
    const imagesLength = data[selected].images.length
    this.setState({ selectedImage: selectedImage < (imagesLength - 1) ? selectedImage + 1 : 0 })
  }
  handlePreviousImageClick = () => {
    const { data } = this.props
    const { selectedImage, selected } = this.state
    const imagesLength = data[selected].images.length
    this.setState({ selectedImage: selectedImage > 0 ? selectedImage - 1 : imagesLength - 1 })
  }

  returnOne = () => {

  }
  render () {
    const { data, name, togglePopup, id } = this.props
    const { selected, selectedImage } = this.state

    return (
      <Fragment>
        {
          data.map((item, key) => (
            <div className='gallery' key={key}>
              <div className='nav'>
                <h1>{ item.name }</h1>
              </div>
              <div className='image-slider'>
                <ImageGallery
                  ref={ item.images.map(image => ({ original: image, thumbnail: image }))}
                  showThumbnails={false}
                  showFullscreenButton={false}
                  useBrowserFullscreen={false}
                  showPlayButton={false}
                  showBullets
                  additionalClass='image-wrapper'
                  renderLeftNav={(onClick) => <button className='icon left' onClick={onClick}></button>}
                  renderRightNav={(onClick) => <button className='icon right' onClick={onClick}></button>}
                  />
              </div>
              <div className='info'>
                <div>
                  <p className='size__font-30px'>{ item.name }</p>
                  <p className='size__font-20px'>{ item.location }</p>
                  <p className='size__font-18px'>{ item.description }</p>
                  <p className='size__font-30px'>{ item.cost }</p>
                  <button onClick={togglePopup}>Связаться с нами</button>
                </div>
              </div>
            </div>
          ))
        }
      </Fragment>
    )
  }
}

export default Gallery__mobile
