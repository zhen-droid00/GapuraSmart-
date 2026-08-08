        const checklistDatabase = [
            {
                title: "📋 Checklist Area Check-in",
                trigger: "checkin",
                keywords: ["checkin", "check-in"],
                answer: "<b>📋 CHECKLIST PERSIAPAN AREA CHECK-IN:</b><br>" +
                        "<label class='checklist-item'><input type='checkbox'> Editing flight (H-48 Jam): SPCL handling, Infant, Child, Group/Couple</label>" +
                        "<label class='checklist-item'><input type='checkbox'> Mengikuti Briefing</label>" +
                        "<label class='checklist-item'><input type='checkbox'> Cek perlengkapan (Label Fragile, Heavy, Bag tag, Priority, Transfer)</label>" +
                        "<label class='checklist-item'><input type='checkbox'> Cek Form document, Sign DGR, & Security Question</label>" +
                        "<label class='checklist-item'><input type='checkbox'> Mengecek System Counter Check-in</label>" +
                        "<label class='checklist-item'><input type='checkbox'> Pastikan timbangan pada angka 0 (Zero calibration)</label>" +
                        "<label class='checklist-item'><input type='checkbox'> Memastikan area konter bersih & rapi</label>"
            },
            {
                title: "📋 Checklist Area Boarding Gate",
                trigger: "gate",
                keywords: ["gate", "boarding"],
                answer: "<b>📋 CHECKLIST PERSIAPAN AREA BOARDING GATE:</b><br>" +
                        "<label class='checklist-item'><input type='checkbox'> Persiapkan perlengkapan: Sign Board, WCHR, HT, Hand Count, Form, & BTU</label>" +
                        "<label class='checklist-item'><input type='checkbox'> Alat Remote Parking: Jas Hujan, Payung, & Transportasi</label>" +
                        "<label class='checklist-item'><input type='checkbox'> Pastikan sistem (Komputer & Scanner) berjalan normal</label>" +
                        "<label class='checklist-item'><input type='checkbox'> Pastikan layar FIDS gate dalam kondisi baik</label>" +
                        "<label class='checklist-item'><input type='checkbox'> Pastikan ketersediaan notice DGR</label>" +
                        "<label class='checklist-item'><input type='checkbox'> Memastikan area gate kondusif & rapi</label>"
            }
        ];

        const sopDatabase = [
            {
                title: "🔋 Panduan Powerbank",
                trigger: "powerbank",
                keywords: ["powerbank", "pb", "baterai"],
                answer: "<b>1. Batasan Kapasitas (Wh) & Ketentuan:</b><ul>" +
                        "<li><b>Kapasitas < 100 Wh (≤ 20.000 mAh):</b> Bebas dibawa ke kabin.</li>" +
                        "<li><b>Kapasitas 100 – 160 Wh (20.000 – 32.000 mAh):</b> Wajib lapor dan butuh izin maskapai.</li>" +
                        "<li><b>Kapasitas > 160 Wh (> 32.000 mAh):</b> Dilarang keras dibawa.</li>" +
                        "<li><b>Label Pudar / Hilang:</b> Otomatis disita petugas.</li></ul><br>" +
                        "<b>2. Jumlah & Lokasi Penyimpanan:</b><ul>" +
                        "<li><b>Maksimal Jumlah:</b> Hanya boleh membawa maksimal 2 unit per penumpang.</li>" +
                        "<li><b>Wajib di Kabin:</b> Masuk tas jinjing/ransel, dilarang keras masuk bagasi check-in (kargo).</li>" +
                        "<li><b>Posisi Aman:</b> Simpan di bawah kursi atau kantong kursi depan, jangan di loker bagasi atas.</li></ul><br>" +
                        "<b>3. Aturan Selama Penerbangan:</b><ul>" +
                        "<li><b>Dilarang Digunakan:</b> Dilarang mengecas HP atau perangkat lain selama penerbangan.</li>" +
                        "<li><b>Dilarang Diecas:</b> Dilarang mengisi ulang daya powerbank di kursi pesawat.</li>" +
                        "<li><b>Wajib Cabut Kabel:</b> Lepas semua kabel dari powerbank untuk mencegah korsleting.</li></ul>"
            },
            {
                title: "🕒 Aturan Penanganan Delay",
                trigger: "delay",
                keywords: ["delay", "terlambat", "kompensasi"],
                answer: "<b>ATURAN PENANGANAN DELAY (PM 89/2015):</b><br><br>" +
                        "<b>1. Kompensasi Berdasarkan Durasi Delay:</b><ul>" +
                        "<li><b>30 – 60 menit:</b> Dapat minuman ringan.</li>" +
                        "<li><b>61 – 120 menit:</b> Dapat minuman + makanan ringan (snack).</li>" +
                        "<li><b>121 – 180 menit:</b> Dapat minuman + makanan berat.</li>" +
                        "<li><b>181 – 240 menit:</b> Dapat minuman + snack + makanan berat.</li>" +
                        "<li><b>Lebih dari 240 menit (4 Jam):</b> Ganti rugi tunai Rp300.000 per orang.</li>" +
                        "<li><b>Pembatalan Penerbangan:</b> Dialihkan ke penerbangan lain atau refund tiket 100%.</li></ul><br>" +
                        "<b>2. Fasilitas & Hak Tambahan Penumpang:</b><ul>" +
                        "<li><b>Hak Refund Sejak Awal:</b> Penumpang bisa meminta refund atau pindah maskapai jika delay sudah masuk kategori 61 menit ke atas.</li>" +
                        "<li><b>Delay > 6 Jam:</b> Maskapai wajib menyediakan hotel/penginapan gratis beserta transportasi jemputan jika harus menginap.</li></ul><br>" +
                        "<b>3. Ketentuan Pencairan Rp300.000:</b><ul>" +
                        "<li><b>Metode Bayar:</b> Bisa berupa uang tunai, voucher yang dapat dicairkan, atau transfer bank.</li>" +
                        "<li><b>Tenggat Waktu:</b> Wajib dibayarkan maskapai maksimal 3 x 24 jam sejak waktu delay.</li></ul><br>" +
                        "<b>4. Pengecualian Tanggung Jawab:</b><ul>" +
                        "<li>Maskapai bebas dari kewajiban ganti rugi hanya jika bisa membuktikan delay disebabkan faktor cuaca buruk atau masalah teknis operasional bandara.</li></ul>"
            }
        ];
