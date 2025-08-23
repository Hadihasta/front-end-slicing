import { Text } from '@radix-ui/themes'

const Soal_7 = () => {
  return (
    <div className="mt-10">
      <Text
        weight="bold"
        size="4"
        color="lime"
      >
        Tailwind & Bootstrap
      </Text>
      <div>
        <span className="text-blue-600">
          {' '}
          Tailwind Lebih Fleksibel dan sangat customable untuk digunakan
          <br />
        </span>
        <br />
        <span className="text-white"> </span>

        <pre>{`<span className="text-blue-600"></span>`}</pre>
        <br />
      </div>

      <div>
        <span className="text-purple-600">
          {' '}
          Sedangkan Bootstrap sudah ditentukan jika kita menggunakan seperti configurasinya btn-primary makan warnanya
          untuk primary akan mengikuti ketentuan bootstrap
          <br />
        </span>
        <br />

   

        <pre>{`<button class="btn btn-primary">Klik Saya</button>`} </pre>
        <br />
      </div>
    </div>
  )
}

export default Soal_7
