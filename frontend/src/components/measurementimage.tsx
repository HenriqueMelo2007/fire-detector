import Image from 'next/image'

interface measurementimageprops {
  src: string
  alt: string
  width: number
  height: number
  borderColor: string
}

export default function MeasurementImage({
  src,
  alt,
  width,
  height,
  borderColor
}: measurementimageprops) {
  return (
    <div className="flex justify-center items-center">
      <div className={`rounded-full border-4 ${borderColor} p-1`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  )
}
