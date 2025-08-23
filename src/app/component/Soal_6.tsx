import React from 'react'
import { Text } from '@radix-ui/themes'

const Soal_6 = () => {
  return (
    <div className="mt-10">
      <Text
        weight="bold"
        size="4"
        color="red"
      >
        Resiko jika memuat file CSS dan JS dari CDN tanpa fallback
      </Text>

      <div>
        <span className="text-red-600">
          {' '}
          jika menggunakan CDN tanpa fallback dapat berakibat fatal resiko yand dapat di alami dapat berupa web yang
          tampilannya rusak jika CDN gagal di memuat ataupun jika ada CDN yang disusupi script yang berbahaya untuk
          keamanan aplikasi yang dapat menyebabkan kebocoran data atau semacamnya
          <br />
        </span>
        <br />
        <span className="text-white">
          {' '}
          Contohnya jika kita menggunakan boostrap dan kita inject menggunakan CDN jika gagal memuat maka web akan
          tampil dengan tampilan yang tidak semestinya
        </span>
        <br />

        <span className="text-gray-500">
          Note : saya cenderung memilih package yang besar comunity , reputasi yang baik , jumlah pemakaiannya besar
          agar terhindar masalah yang jarang ditemui dan lebih memilih mendownload secara local packagenya
        </span>
      </div>
    </div>
  )
}

export default Soal_6
