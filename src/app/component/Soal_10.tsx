import { Text, Code } from '@radix-ui/themes'

const Soal_10 = () => {
  return (
    <div className="mt-10">
      <Text
        weight="bold"
        size="4"
      >
        menggunakan media gambar yang berbeda untuk ukuran layar yang berbeda
      </Text>

      <div>
        <pre className='text-blue-500 bg-gray-900 rounded-lg p-5'>
          {`.banner {
  background-image: url("image-large.jpg");
}

@media (max-width: 768px) {
  .banner {
    background-image: url("image-medium.jpg");
  }
}

@media (max-width: 480px) {
  .banner {
    background-image: url("image-small.jpg");
  }
}`}
        </pre>
      </div>
      <div>Dengan menggunakan configurasi ini maka adjustemen pada media gambar akan di sesuaikan dengan ukuran layar yang sedang user gunakan</div>
            <div> img-large.jpg akan menjadi default utama media gambar yang di tampilkan </div>
            <div>{` Jika resolusi layar < dari 768px maka menggunakan medium `} </div>
            <div>{` Jika resolusi layar < dari 480px maka menggunakan small `} </div>
    </div>
  )
}

export default Soal_10
