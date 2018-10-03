import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';

class Gallery__desktop extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 0,
      selectedImage: 0
    }
  }

  // componentDidMount = () => this.props.actions.calcScroll(this.props.id)

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
      <div className='gallery' id={this.props.id}>
        <div className='nav'>
          <h1>{ name }</h1>
          <div className='links'>
            {
              data.map((item, key) => <p
                                        key={key}
                                        className={`size__font-30px ${selected === key ? 'active' : ''}`}
                                        onClick={() => this.handleNameClick(Number(key))}
                                        >{ item.name }</p>)
            }
          </div>
        </div>
        <div className='image-slider'>
          <ImageGallery
            ref={c => this.reactGallery = c}
            items={data[selected].images.map((image, key) => ({
              original: image,
              thumbnail: image,
              bulletClass: 'bullet',
              bulletOnClick: item => this.reactGallery && key === item.itemIndex ? 'bullet active' : 'bullet'
            }))}
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
            <p className='size__font-30px'>{ data[selected].name }</p>
            <p className='size__font-20px'>{ data[selected].location }</p>
            <p className='size__font-18px'>{ data[selected].description }</p>
            <p className='size__font-30px'>{ data[selected].cost }</p>
            <button onClick={() => togglePopup(data[selected].name, this.props.name)}>Связаться с нами</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery__desktop
