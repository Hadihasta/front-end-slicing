import React from 'react'
import { Text, Code } from '@radix-ui/themes'

const Soal_4 = () => {
  return (
    <div className="mt-10">
      <Text
        weight="bold"
        size="4"
      >
        CSS dan SCSS
      </Text>

      {/* body */}

      <div className="mt-10">
        <div>
          <Text
            size="3"
            weight="light"
          >
            CSS (Cascading Style Sheets)
          </Text>
          <div>
            <br />
            Bahasa standar untuk mendesain halaman web.
            <br />
            Sintaks sederhana (selector → property → value).
            <br />
            Tidak mendukung fitur pemrograman seperti variabel, nesting, atau function
          </div>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-lg overflow-x-auto text-sm font-mono">
            {`body {
  background: white;
  color: black;
}

.btn {
  padding: 10px;
  background: blue;
  color: white;
}`}
          </pre>

          <span className="text-green-600">
            {' '}
            Kelebihan: Native, langsung dikenali browser tidak butuh compiler. Lebih ringan, cocok untuk project kecil.
            Dokumentasi luas dan standar W3C.
            <br />
          </span>

          <span className="text-red-500">
            Kekurangan: Tidak ada variabel, nesting, atau function (lebih verbose). Susah maintain untuk project besar
            style bisa cepat berantakan. Tidak ada fitur modularisasi.
          </span>
        </div>
      </div>

      {/* 2 */}

      <div className="mt-10">
        <div>
          <Text
            size="3"
            weight="light"
          >
            SCSS (Sassy CSS)
          </Text>
          <div>
            <br />
            Bentuk syntax dari Sass (Syntactically Awesome Stylesheet).
            <br />
            Superset dari CSS → artinya semua kode CSS valid juga valid di SCSS.
            <br />
            Menyediakan fitur mirip bahasa pemrograman:
            <br />
            Variables ($color-primary: blue;)
            <br />
            Nesting (selector bisa ditulis bertingkat)
            <br />
            Mixins (fungsi untuk reusable code)
            <br />
            Inheritance/Extend
            <br />
            Operators (perhitungan langsung di CSS)
          </div>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-lg overflow-x-auto text-sm font-mono">
            {`$primary-color: blue;

body {
  background: white;
  color: black;
}

.btn {
  padding: 10px;
  background: $primary-color;
  color: white;

  &:hover {
    background: darken($primary-color, 10%);
  }
}`}
          </pre>


             <span className="text-green-600">  Kelebihan:

Lebih powerful & rapi dengan nesting, variables, dan mixins.

Reusable code → efisien untuk project besar.

Bisa split file menjadi modular (pakai @import atau @use).

Komunitas besar dan dipakai di banyak framework (Bootstrap, dll).
</span>   
<br />
  <span className="text-red-500">
Kekurangan:

Butuh compiler (contoh: sass, node-sass, dart-sass)  menambah step build.

File SCSS tidak bisa langsung dipakai di browser.

Bisa “over-nesting”  kode malah jadi kompleks.
 </span>
        </div>
      </div>
    </div>
  )
}

export default Soal_4
