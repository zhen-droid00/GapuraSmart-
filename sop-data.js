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
    },
    {
        title: "📋 Checklist Area Ramp / Apron",
        trigger: "ramp",
        keywords: ["ramp", "apron", "als"],
        answer: "<b>📋 CHECKLIST PERSIAPAN AREA RAMP / GSE:</b><br>" +
                "<label class='checklist-item'><input type='checkbox'> Cek kelayakan alat GSE (GPU, Belt Loader, Baggage Towing Tractor, High Lift)</label>" +
                "<label class='checklist-item'><input type='checkbox'> Pastikan area parking stand bersih dari Foreign Object Damage (FOD)</label>" +
                "<label class='checklist-item'><input type='checkbox'> Koordinasi marshalling dan penempatan wheel chock</label>" +
                "<label class='checklist-item'><input type='checkbox'> Pengecekan alat komunikasi (HT) berfungsi dengan baik</label>" +
                "<label class='checklist-item'><input type='checkbox'> Memastikan Alat Pelindung Diri (APD) lengkap dan digunakan tim</label>"
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
    },
    {
        title: "🧳 Aturan Bagasi Garuda Indonesia Terupdate",
        trigger: "bagasi",
        keywords: ["bagasi","baggage"],
        answer: "<b>Ketentuan Bagasi Garuda Indonesia per september 2026:</b><br><br>" +
                "<b> Pembelian tiket sebelum 1SEPTEMBER2026 masih menggunakan skema WEIGHT CONCEPT (berdasarkan total berat bagasi) Sedangkan pembelian tiket per 1 SEPTEMBER 2026 bagasi sudah menggunakan skema PIECE CONCEPT:</b><ul>" +
                "<li>FBA untuk penerbangan DOMESTIK <i></i> untuk kelas ECONOMY mendapat jatah 1PC dengan maksimal berat 23kg/piece.</li>" +
                "<li>untuk BISNIS dan FIRST CLASS sama-sama mendapat jatah 2PC dengan berat maksimal 32kg/piece .</li>" +
                "<li>FBA untuk penerbangan INTERNASIONAL.</li>" +
                "<li>untuk kelas ECONOMY mendapat jatah 2PC dengan maksimal berat 23kg/pc.</li>" +
                "<li>untuk BISNIS dan FIRST CLASS sama-sama mendapat jatah 2PC dengan berat maksimal 32kg/pc.</li></ul>"
    },
    {
            title: "🧳 4. Ketentuan Bagasi Kabin Garuda",
            trigger: "bagasi kabin",
            keywords: ["kabin", "cabin", "tas jinjing", "bawaan pesawat", "dimensi kabin"],
            answer: "<b>4. Ketentuan Bagasi Kabin:</b><ul>" +
                    "<li>Maksimum 1 (satu) bagasi kabin.</li>" +
                    "<li>Berat maksimum 7 kg.</li>" +
                    "<li>Dimensi maksimum 56 x 36 x 23 cm (total dimensi tidak melebihi 115 cm).</li>" +
                    "<li>Apabila ukuran/berat melebihi ketentuan, Garuda berhak memindahkannya menjadi bagasi terdaftar.</li>" +
                    "<li>Selain bagasi kabin, setiap penumpang diperkenankan membawa 1 (satu) barang pribadi ke dalam kabin tanpa biaya tambahan.</li></ul>"
        },
        {
            title: "🧳 5. Excess & Heavy Baggage Rate",
            trigger: "excess baggage",
            keywords: ["excess", "kelebihan bagasi", "heavy baggage", "overweight", "bayar bagasi"],
            answer: "<b>5. EXCESS BAGGAGE RATE:</b><ul>" +
                    "<li><b>Biaya Excess 1PC Domestik:</b> Rp. 500.000. Untuk penumpang individual (FIT), pembelian Prepaid Baggage dapat dilakukan hingga 4 Additional Piece, sedangkan Excess Baggage di Bandara hingga 3 Additional Piece.</li>" +
                    "<li><b>Heavy Baggage Domestik:</b> Biaya Excess Heavy baggage (berat lebih dari 23kg hingga maksimum 32kg) domestik sector adalah Rp. 250.000.</li></ul>"
        },
        {
            title: "🧳 6. Benefit GarudaMiles (Allowance Bagasi)",
            trigger: "garudamiles",
            keywords: ["miles", "member", "benefit bagasi", "diskon bagasi", "skyteam"],
            answer: "<b>6. BENEFIT GARUDA MILES pada Allowance Bagasi:</b><ul>" +
                    "<li><b>Tier Blue / blu debit card (bluPro & bluGrande):</b> Diskon 5% Prepaid Baggage untuk pembelian pertama bagasi (piece) tambahan.</li>" +
                    "<li><b>Tier Silver / Diaspora Hongkong:</b> Diskon 50% Prepaid Baggage untuk pembelian pertama bagasi (piece) tambahan.</li>" +
                    "<li><b>Gratis 1 bagasi tambahan:</b> Untuk Tier Gold / Gold Privilage / Skyteam Elite, Platinum / Skyteam Eliteplus, bluElite, BluRoyal, GarudaIndonesia UOB (GIUC), dan BNI Garuda Signature Card (sesuai kelas perjalanan).</li></ul>"
        },
        {
            title: "🧳 7. Upgrade (Bid / Instant) Bagasi",
            trigger: "bid upgrade",
            keywords: ["upgrade", "instant upgrade", "naik kelas"],
            answer: "<b>7. Bid Upgrade / Instant Upgrade:</b><br><br>" +
                    "Mengikuti kapasitas bagasi bebas biaya sesuai kelas dan jenis tiket yang dibeli (original paid class)."
        },
        {
            title: "🧳 8. Ketentuan Bagasi Bayi (Infant)",
            trigger: "bagasi bayi",
            keywords: ["bayi", "infant", "anak", "bawaan bayi"],
            answer: "<b>8. Ketentuan Bagasi pada Bayi (Infant):</b><br><br>" +
                    "Gratis 1 Bagasi (piece). Mendapatkan 1 bagasi tambahan tanpa biaya sesuai kelas perjalanan."
        },
        {
            title: "🧳 9. Bagasi Peralatan Olahraga (Sport)",
            trigger: "alat olahraga",
            keywords: ["olahraga", "sport", "sepeda", "golf", "surfing", "diving"],
            answer: "<b>9. Peralatan Olahraga (Sport Equipment):</b><ul>" +
                    "<li><b>Bicycle (Sepeda):</b> Free 1PC (32kgs/pc).</li>" +
                    "<li><b>Lainnya:</b> Surfing Board, Kite, BodyBoard, Golf Bag, Diving, Other Sport Equipment Free 1PC (23kg/pc).</li></ul>"
        },
        {
            title: "🧳 10. Bagasi Kursi Roda & Alat Bantu Medis",
            trigger: "kursi roda",
            keywords: ["kursi roda", "wheelchair", "alat medis", "mobilitas", "wchr"],
            answer: "<b>10. Kursi Roda & Alat Bantu Mobilitas:</b><ul>" +
                    "<li>Penumpang yang menggunakan kursi roda atau alat bantu mobilitas karena kebutuhan medis dapat membawa perangkat tersebut sebagai tambahan di luar kapasitas bagasi bebas biaya.</li>" +
                    "<li>Apabila berat atau ukuran perangkat melebihi ketentuan bagasi terdaftar, perangkat akan ditangani sebagai kargo sesuai prosedur.</li></ul>"
        }
    
];

const circularDatabase = [
    { 
        title: "SE-01/2026: Standar Pelayanan Ground Handling", 
        date: "01 Agustus 2026", 
        desc: "Penyesuaian prosedur SOP", 
        link: "https://drive.google.com/drive/folders/1-YlewEQvT3BBQUhXrVx66fW_9vfVWJSg?hl=ID" 
    },
    { 
        title: "SE-02/2026: Peningkatan Keselamatan Sisi Udara (Safety Campaign)", 
        date: "20 Agustus 2026", 
        desc: "Ketentuan ketat penggunaan APD dan batas kecepatan kendaraan GSE di Apron", 
        link: "https://drive.google.com/drive/folders/1-YlewEQvT3BBQUhXrVx66fW_9vfVWJSg?hl=ID" 
    }
];