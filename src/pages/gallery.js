import React, { PureComponent } from 'react';
import { withPrefix } from 'gatsby';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import DefaultLayout from '../layouts/DefaultLayout';
import DefaultLayoutContent from '../layouts/DefaultLayoutContent';
import SEO from '../components/SEO';

const photos = [{
  src: 'img/gallery/1.jpg',
  width: 800,
  height: 600,
}, {
  src: 'img/gallery/2.jpg',
  width: 640,
  height: 480,
}, {
  src: 'img/gallery/3.jpg',
  width: 800,
  height: 534,
}, {
  src: 'img/gallery/4.jpg',
  width: 800,
  height: 600,
}, {
  src: 'img/gallery/5.jpg',
  width: 800,
  height: 601,
}, {
  src: 'img/gallery/6.jpg',
  width: 1040,
  height: 780,
},
];

class GalleryPage extends PureComponent {
  state = {
    lightboxImgIndex: 0,
    lightboxOpen: false,
  };

  openLightbox = (event, photo) => {
    this.setState({
      lightboxImgIndex: photo.index,
      lightboxOpen: true,
    });
  }

  goToPrevious = () => {
    const { lightboxImgIndex } = this.state;
    this.setState({
      lightboxImgIndex: lightboxImgIndex - 1,
    });
  }

  goToNext = () => {
    const { lightboxImgIndex } = this.state;
    this.setState({
      lightboxImgIndex: lightboxImgIndex + 1,
    });
  }

  closeLightbox = () => {
    this.setState({
      lightboxOpen: false,
    });
  }

  render() {
    const {
      lightboxImgIndex,
      lightboxOpen,
    } = this.state;

    const photosWithPrefixSrc = photos.map(photo => ({
      ...photo,
      src: withPrefix(photo.src),
    }));

    return (
      <DefaultLayout>
        <SEO title="Gallery" />
        <Lightbox
          images={photosWithPrefixSrc}
          currentImage={lightboxImgIndex}
          isOpen={lightboxOpen}
          onClickPrev={this.goToPrevious}
          onClickNext={this.goToNext}
          onClose={this.closeLightbox}
        />
        <DefaultLayoutContent>
          <div id="gallery">
            <Gallery
              photos={photosWithPrefixSrc}
              margin={5}
              onClick={this.openLightbox}
            />
          </div>
        </DefaultLayoutContent>
      </DefaultLayout>
    );
  }
}

export default GalleryPage;
