/**
 * Menyajikan halaman web utama saat URL Web App diakses.
 */
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('CekFakta Sekolah: Lawan Hoaks & Misinformasi')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Fungsi pembantu untuk menyisipkan file HTML/JS lain ke dalam Index.html
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Inisialisasi sheet "Laporan_Hoaks" jika belum ada di Spreadsheet
 */
function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Laporan_Hoaks');
  
  if (!sheet) {
    sheet = ss.insertSheet('Laporan_Hoaks');
    // Membuat header kolom
    sheet.appendRow([
      'ID Laporan', 
      'Waktu Lapor', 
      'Nama Pelapor / Kelas', 
      'Isi Pesan / Klaim', 
      'Skor Kredibilitas', 
      'Status Hasil', 
      'Catatan Verifikasi'
    ]);
    // Styling header sederhana
    sheet.getRange('A1:G1').setFontWeight('bold').setBackground('#e0e7ff');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * Menyimpan hasil pengecekan fakta ke dalam Google Sheets
 */
function simpanLaporan(data) {
  try {
    const sheet = getOrCreateSheet();
    const id = 'CF-' + new Date().getTime().toString().slice(-6);
    const waktu = Utilities.formatDate(new Date(), 'Asia/Jakarta', 'dd/MM/yyyy HH:mm');
    
    sheet.appendRow([
      id,
      waktu,
      data.pelapor || 'Anonim (Siswa)',
      data.pesan,
      data.skor,
      data.status,
      data.catatan
    ]);
    
    return { success: true, message: 'Laporan berhasil disimpan ke Papan Sekolah!', data: getDaftarLaporan() };
  } catch (error) {
    return { success: false, message: 'Gagal menyimpan: ' + error.toString() };
  }
}

/**
 * Mengambil seluruh data laporan dari Google Sheets untuk ditampilkan di Papan Laporan
 */
function getDaftarLaporan() {
  try {
    const sheet = getOrCreateSheet();
    const lastRow = sheet.getLastRow();
    
    if (lastRow <= 1) return []; // Belum ada data selain header
    
    const values = sheet.getRange(2, 1, lastRow - 1, 7).getValues();
    // Membalik urutan agar laporan terbaru muncul di paling atas
    return values.reverse().map(row => ({
      id: row[0],
      waktu: row[1],
      pelapor: row[2],
      pesan: row[3],
      skor: Number(row[4]),
      status: row[5],
      catatan: row[6]
    }));
  } catch (error) {
    return [];
  }
}
