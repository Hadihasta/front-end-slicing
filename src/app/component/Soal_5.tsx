import { Text } from '@radix-ui/themes'

const Soal_5 = () => {
  return (
    <div className="mt-10">
      <Text
        weight="bold"
        size="4"
      >
        Nesting
      </Text>
      <div>
        <Text
          size="3"
          weight="light"
        >
          adalah fitur di SCSS/Sass yang memungkinkan kita menulis selector di dalam selector lain (seperti struktur
          hirarki HTML). Tujuannya agar kode lebih rapi, ringkas, dan mudah dibaca, tanpa harus mengulang selector
          berulang-ulang.
        </Text>
      </div>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-lg overflow-x-auto text-sm font-mono">
        {`
            .navbar {
  background: #222;

  ul {
    list-style: none;

    li {
      display: inline-block;
      margin-right: 10px;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}`}
      </pre>

      <br />

      <Text
        weight="bold"
        size="4"
      >
        Mixin
      </Text>
      <div>
        <Text
          size="3"
          weight="light"
        >
          adalah semacam “function” di SCSS yang menyimpan sekumpulan style agar bisa digunakan kembali. Kita bisa
          memanggilnya dengan @include, bahkan bisa pakai parameter.
        </Text>
      </div>

      <br />
      <div>Tanpa Mixin</div>
      <br />
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-lg overflow-x-auto text-sm font-mono">
        {`
.button-primary {
  padding: 10px 20px;
  border-radius: 8px;
  background: blue;
  color: white;
}

.button-secondary {
  padding: 10px 20px;
  border-radius: 8px;
  background: gray;
  color: white;
}   
`}
      </pre>
      <br />
      <div>Menggunakan Mixin</div>
      <br />

      <pre className='bg-gray-900 text-green-400 p-4 rounded-lg shadow-lg overflow-x-auto text-sm font-mono"'>
        {`
@mixin button-style($bg-color) {
  padding: 10px 20px;
  border-radius: 8px;
  background: $bg-color;
  color: white;
}

.button-primary {
  @include button-style(blue);
}

.button-secondary {
  @include button-style(gray);
}          
`}
      </pre>
    </div>
  )
}

export default Soal_5
