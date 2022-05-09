import Image from 'next/image';

const MyImage = ({src, width, heigth, alt}) => {
    return (
    <div>
      <Image
      src={src}
      alt={alt}
      width={width}
      height={heigth}
      />
    </div>
  )
}
export default MyImage;