import React from 'react'
import CodeComponent from './CodeComponent'
import { Text,Code } from '@radix-ui/themes'

const Soal_1 = () => {
  return (
    <>
      <div>
          <Text
            weight="bold"
            size="4"
          >
            CSS specificity
          </Text>
        </div>

        <div>
          <Text
            weight="bold"
            size="2"
          >
            {' '}
            Prioritas Selector CSS
          </Text>
        </div>
        <div>
          <Text
            size="3"
            weight="light"
          >
            study case : ketika membuat CSS biasanya saling menimpa satu sama lain sehingga yang memiliki priority yang
            paling tinggi yang akan menjadi style utama dalam suatu tag
          </Text>
        </div>
        <CodeComponent />

        <p className="whitespace-pre-line">
          {`Setiap element tag selector bernilai 0,0,0,1
Setiap class selector, attribut selector bernilai 0,0,1,0
Setiap ID selector bernilai 0,1,0,0
Setiap inline style bernilai 1,0,0,0`}
        </p>
        <br />

        <Text
          size="3"
          weight="light"
        >
          {`tag <p> pada contoh di atas akan bewarna orange dikarenakan menggunakan ID selector yang memiliki prioritas lebih tinggi di banding dengan tag selector  dan atribut selector `}
        </Text>
        <br />

        <Text
          size="2"
          weight="medium"
        >
          {`Note : !important mengalahkan semuanya namun tidak di rekomendasikan karena susah di maintenance `}
        </Text>
    </>
  )
}

export default Soal_1