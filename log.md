# Log — u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922

- 2026-11-24 15:09 WIB: Aturan dibaca ulang, lanjut dari awal (sesi baru, subagen build). Kit kanonis level: kit.json bundle_sha256 16169eb6b53eff61a020322c611ee1f491efbe3f995ceae810a18ed23b1c84c8, fase dev. Deadline 27 Nov 2026 14:25 WIB (27 Nov 07:25 UTC). Hadiah $5 total, 10 tempat berbayar (juara 1 $1,54). Entri saat ini: 477.
- 2026-11-24 15:10 WIB: Lembar Paham ditulis (di bawah), lalu build.

## Lembar Paham (ringkas, #3c)

(1) Tugas dalam 3 kalimat: Kirim SATU judul pekerjaan paling aneh, maks 60 karakter, lewat program yang menulis teks itu ke /output/entry.txt. Juri buta (model z-ai/glm-5.3-flash) membandingkan judul dua-dua dan memilih yang lebih aneh/lucu; win rate tertinggi menang. Yang masuk final heat adalah 500 besar papan dev; 10 besar final heat dibayar.

(2) Rumus skor + batas keras (sumber primer, dibaca 24 Nov 2026 ~15:08 WIB):
- Gate: /output/entry.txt UTF-8, 1–60 karakter, bukan cuma spasi — Valid 1/0. Sumber: kit RULES.txt ("The gate") + competition.yaml (resolution.criteria Gate).
- Skor: win rate dari fit Bradley-Terry atas semua game final heat; tiap game = 2 panggilan juri (kedua urutan), tiap panggilan 0,5 + margin/10 (0,6–1,0). Sumber: RULES.txt ("The judge", "Ranking").
- Kriteria juri, urut: (1) judul kerja aneh, (2) lebih aneh dari kerja biasa / twist, (3) lucu saat dibaca pertama kali, (4) terdengar seperti pekerjaan nyata, spesifik sampai bisa dibayangkan orangnya, (5) terbaca instan. Sumber: RULES.txt ("The judge" — brief juri verbatim).
- Batas keras: program/v1, Node 22 / Python 3.13, tanpa network, waktu program maks 60 dtk/run; entrypoint main.ts di root repo + LICENSE OSI; repo dibuat sesudah kompetisi buka (24 Nov 2026 07:26:27 UTC). Sumber: competition.yaml (harness, submission_rule) + RULES.txt ("Before you submit").
- Jatah submit: maks 5/hari per entrant (UTC). Final entry = submission terakhir sebelum deadline. Sumber: competition.yaml (submission_rule.max_per_day 5).

(3) Mekanisme penilai langkah demi langkah: program dijalankan 2x di sandbox → gate cek entry.txt → dev heat: 11 game lawan teks tetap house (3 anchor + 3 rung, lalu ronde adaptif) → provisional rate (Bradley-Terry vs kekuatan tetap) → cut 500 besar dev board → final heat: 3 ronde Swiss + playoff top 12 → win rate final = ekspektasi menang lawan semua anggota heat → 10 besar dibayar. Dev rate tidak ikut ke final; final dinilai fresh.

(4) PRACTICE vs FINAL: tidak ada dataset practice/final terpisah di bounty ini — dev heat hanya penentu cut 500 besar; skor final dihitung ulang dari nol di final heat. Yang dikejar: (a) lolos cut 500 (dari 477 entri saat ini, nyaris semua lolos selama valid — tapi field bisa tumbuh), (b) win rate tinggi di final heat lawan entri lain, bukan lawan teks house.

(5) Bedah top 3: TIDAK BISA dibedah penuh — blind rounds: tidak ada skor/rank papan yang tampil sebelum hasil dipublikasikan (RULES.txt: "nothing is judged when you submit... no one's live rank or score shows"). Kualifikasi: yang tidak tampil adalah papan/skor; teks tiap entri lawan TAMPIL publik di Feed begitu dev grade tercatat, dan sesudah tiap ronde, ±5 tetangga di atas/bawah entri kita terlihat di round board (GET /api/competitions/.../rounds/board). Di sesi ini saya tidak membaca Feed maupun round board — jadi bedah top 3 tetap tidak dilakukan, dan itu dicatat sebagai keterbatasan, bukan sebagai fakta. Dugaan (ditandai dugaan): sebagian besar entri memakai pola generik ("Professional X", "Chief Y Officer") — celah: judul dengan SATU twist spesifik + adegan yang bisa dibayangkan langsung mengalahkan keanehan generik, sesuai brief juri ("a real-sounding job with one hilariously specific twist beats a generic oddity"). Jumlah entri 477: dari brief tugas agen induk (24 Nov 2026 ~15:06 WIB), bukan dari kit — kit tidak memuat angka live.

(6) Riset luar: bounty ini satu baris teks — tidak ada paper/teknik yang relevan secara langsung; riset yang dipakai adalah brief juri itu sendiri + pola humor: (a) inkongruensi formal-vs-absurd (judul korporat megah + tugas remeh/absurd) — sumber: brief juri kriteria 2+4; (b) spesifisitas konkret mengalahkan keanehan abstrak — sumber: brief juri "specific enough to picture the person doing it"; (c) hewan yang terkenal galak (angsa) sebagai objek tugas mustahil — dugaan, dari pengetahuan umum soal humor absurd. Dampak: menentukan sumbu kandidat (korporat + objek absurd spesifik). Biaya: nol.

(7) Hipotesis berurutan (dampak per biaya):
- H1: Judul korporat formal + tugas absurd spesifik (mis. "Senior Vice President of Apologizing to Geese") mengalahkan judul aneh generik, karena memenuhi kriteria 1–4 sekaligus. Prediksi: menang pairwise vs kandidat generik di judge lokal 7/7. Kriteria tolak: kalah 2+ pairwise vs kandidat generik.
- H2: Spesifisitas objek (angsa yang tidak bisa minta maaf) mengalahkan objek generik (anjing, Senin, warna cat), karena adegannya lebih hidup. Prediksi: A > F/D/G di pairwise. Kriteria tolak: kalah vs kandidat objek generik.
- H3: Menambah embel-embel ke judul yang sudah lengkap tidak menaikkan skor — juri: "Length for its own sake does not count" — versi bersih ≥ versi berembel-embel. Prediksi: A mengalahkan A-long di pairwise. Kriteria tolak: A-long menang 2x (dua arah). Catatan: ini BUKAN klaim "lebih pendek selalu lebih baik" — memendekkan di bawah judul formal penuh bisa merusak (lihat uji H3 di bawah: A vs A-short).

(8) Ajar-balik: Juri itu seperti perekrut komedi yang membandingkan dua kartu nama. Kartu yang menang bukan yang kata-katanya paling aneh, tapi yang begitu dibaca langsung kebayang orangnya: seorang wakil presiden senior yang kerjaannya cuma minta maaf ke angsa. Itu lucu karena pangkatnya setinggi langit, tugasnya seremeh itu, dan angsa terkenal tidak bisa diajak damai — tiga lapis lucu dalam satu baris.

## Pre-mortem (#3e)
(a) Alasan kalah dari top 3: (i) 477+ entri lain memakai sumbu sama (korporat + hewan) dan salah satunya lebih tajam; (ii) juri GLM menilai "geese" sebagai humor acak, bukan twist; (iii) ada entri dengan twist cerita lebih kuat (dua karakter berinteraksi). Pengecekan: pairwise lokal vs 7 kandidat sumbu beda (sudah dijalankan — lihat bawah); tidak ada cara cek lawan nyata karena blind.
(b) Jebakan skor lokal bagus tapi server jelek: (i) saya menilai kandidat sendiri → bias; mitigasi: pairwise dua arah + devil's advocate per pasangan; (ii) heat awal ≠ final (lawan beda); mitigasi: pilih yang paling kuat secara absolut, bukan yang menang tipis; (iii) duplikat byte-dengan-entri-lain → berbagi rate; mitigasi: frasa orisinal, bukan meme terkenal (ditolak: "Underwater Basket Weaving Instructor" — meme klise).
(c) Tiap alasan dipetakan ke pengecekan: pairwise lokal (jalan), cek orisinalitas frasa (jalan — bukan kutipan meme), cek gate 60 karakter (jalan — 45 karakter).

## Kandidat (8) + pairwise lokal
Kandidat: A "Senior Vice President of Apologizing to Geese" (45) · B "Professional Ghostwriter for Ghosts" (35) · C "Certified Translator for Passive-Aggressive Notes" (49) · D "Official Namer of Paint Colors Nobody Buys" (42) · E "Senior Manager of Regret, Midwest Division" (42) · F "Professional Apologizer for Other People's Dogs" (47) · G "Chief Sigh Officer, Department of Mondays" (41) · H "Underwater Basket Weaving Instructor" (36).

Pairwise (dua arah, kriteria juri urut 1→5; devil's advocate: tiap pasangan ditimbang argumen rival dulu):
- A>B: B cuma permainan kata; A adegan kerja utuh + lebih aneh. A menang.
- A>C: C sangat spesifik & lucu, tapi A lebih aneh (angsa + minta maaf) dan lebih visual. A menang tipis.
- A>D: D spesifik, A lebih aneh. A menang.
- A>E: E datar, kurang visual. A menang.
- A>F: F sumbu sama (tukang minta maaf) tapi anjing generik; angsa galak = lapisan inkongruensi ekstra. A menang.
- A>G: G keanehan generik. A menang.
- A>H: H meme klise (jurusan lelucon klasik), A lebih segar. A menang.
- C>B, C>D tipis, C>E, C>F, C>G, C>H → C 6/7 (kalah cuma dari A).
- D>B tipis, D>E, D>F, D>G, D>H → D 5/7.
- F>B tipis, F>E, F>G, F>H → F 4/7.
- B>E, B>G, B>H → B 3/7. H>E, H>G → H 2/7. G>E → G 1/7. E 0/7.
Tally: A 7/7, C 6/7, D 5/7, F 4/7, B 3/7, H 2/7, G 1/7, E 0/7.
Keputusan: pemenang A — "Senior Vice President of Apologizing to Geese" (45 karakter). H1+H2 TERBUKTI di judge lokal; H3 diuji di bawah (bukan sekadar diklaim).

## Uji H3 (perbaikan verifier #3d, 24 Nov 2026 ~15:14 WIB)
Pasangan eksplisit dari judul yang sama:
- A: "Senior Vice President of Apologizing to Geese" (45)
- A-long: "Senior Vice President of Apologizing to Geese, Night Shift" (59)
- A-short: "VP of Apologizing to Geese" (26)
Pairwise dua arah, kriteria juri urut 1→5:
- A vs A-long: "Night Shift" tidak menambah keanehan atau twist baru — inti lelucon sama, cuma lebih panjang dibaca (kriteria 5 turun; juri: panjang demi panjang tidak dihitung). A menang. Devil's advocate: "Night Shift" memberi adegan (tugas malam) — tapi adegan itu generik dan tidak memperkuat twist utama. A > A-long.
- A vs A-short: "VP" memangkas kemegahan formal yang justru jadi mesin lelucon (kontras pangkat vs tugas remeh melemah); "Senior Vice President" penuh membangun kontras itu. A menang. Ini membuktikan H3 yang benar adalah "tanpa embel-embel", BUKAN "lebih pendek selalu lebih baik".
Hasil: H3 TERBUKTI dalam rumusan yang dikoreksi (versi bersih ≥ versi berembel-embel); versi pendek-yang-dipangkas (A-short) KALAH dari A.
- Jumlah entri 477: sumber = brief tugas agen induk, 24 Nov 2026 ~15:06 WIB (bukan kit).

## Build
- Entry: main.ts menulis judul pemenang ke /output/entry.txt (mkdir -p bila perlu), tanpa network, tanpa dependensi.
- Verifikasi lokal: jalankan node main.ts → cek /output/entry.txt: UTF-8, 1–60 karakter, bukan spasi saja; bandingkan byte dengan judul pemenang.
- Tidak ada grade-local kit untuk bounty ini (RULES.txt: "There is no local grade of this competition: the server grades every entry") — verifikasi = gate lokal (panjang/UTF-8) + run program 2x.

## Verifikasi lokal (24 Nov 2026 ~15:12 WIB)
- `node main.ts` dijalankan 2x (seperti grader): run 1 + run 2, isi /output/entry.txt identik.
- Isi: "Senior Vice President of Apologizing to Geese" — 45 karakter / 45 byte, UTF-8, bukan spasi saja, exact match dengan judul pemenang. Gate 1–60 karakter: LOLOS.
- sha256 /output/entry.txt: 7f425b0f678013a5178695dbf5c508bdcfc6ce1fdd9b158048eff700c9b155ed
- Determinisme: kedua run byte-identik.
- Koreksi: hitungan karakter awal saya salah (48) — dihitung ulang via python, semua panjang kandidat diperbaiki di log + README. Verdict pairwise tidak berubah (semua kandidat tetap ≤60).
- Verifier independen (#3d): subagen verifier di-spawn 15:11 WIB — verdict awal DIKEMBALIKAN (15:13 WIB): (1) H3 belum diuji, (2) §(5) terlalu mutlak soal blind rounds, (3) sumber "477 entri" belum dicantumkan. Ketiganya diperbaiki 15:14 WIB: uji H3 eksplisit (A vs A-long vs A-short — H3 TERBUKTI dalam rumusan terkoreksi), §(5) dikualifikasi (Feed publik + round board ±5 tetangga), sumber 477 = brief agen induk 24 Nov ~15:06 WIB. Verifikasi ulang (subagen ke-2, 15:15 WIB): ketiga perbaikan PASS, verdict akhir LEMBAR LULUS. Lembar Paham selesai dan lolos gerbang #3d.
