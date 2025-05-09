import ImageSlider from './ImageSlider';
import './ii.css';
function Slides() {
  const slides = [
    {
      id: 1,
      url: 'https://example.com/image1.jpg',
      caption: 'Beautiful Landscape'
    },
    {
      id: 2,
      url: 'https://example.com/image2.jpg',
      caption: 'City View'
    },
    {
      id: 3,
      url: 'https://example.com/image3.jpg'
    }
  ];

  return (
    <div className="app">
      <h1>Image Gallery</h1>
      <ImageSlider 
        images={slides} 
        autoPlay={true}
        interval={3000}
      />
    </div>
  );
}