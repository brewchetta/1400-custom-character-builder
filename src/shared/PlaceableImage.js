function PlaceableImage({src, alt=`image of ${src}`, top="", left="", bottom="", right="", width, height, position="absolute", transform }) {

  return (
    <img
      src={ src }
      alt={ alt }
      style={{ top, left, bottom, right, width, height, position, transform: transform || 'translateX(-50%)' }}
    />
  )

}

export default PlaceableImage
