const http = require('http');
const port = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200);
    if(req.url == '/'){
        res.write('<html><body><h2>Anda Berada Di Halaman Index</h2></body></html>');
    }
    else if(req.url == '/siswa'){
        res.write('<html><body><h2>Anda Berada Di Halaman Siswa</h2></body></html>');
        const siswa = [
            {
                nama : 'Pleg',
                matkul : 'Pemrograman Berbasis Platform',
                kelas : 'TI25G',
                server : 'node.js'
            },
            {
                nama : 'Hafidz',
                matkul : 'Pemrograman Berbasis Platform',
                kelas : 'TI25G',
                server : 'node.js'
            }
        ];
        res.write('<h3>Data Siswa</h3>');
        res.write('<ul>');
        siswa.forEach(i => {
            res.write(`<li>Nama: ${i.nama} - Matkul: ${i.matkul} - Kelas: ${i.kelas} - Server: ${i.server}</li>`);
        });
        res.write('</ul>');
    }
    else if(req.url == '/dosen'){
        res.write('<html><body><h2>Anda Berada Di Halaman Dosen!</h2></body></html>');
    }
    else if(req.url == '/admin'){
        res.write('<html><body><h2>Anda Berada Di Halaman Admin1!</h2></body></html>');
    }
    else{
        res.write('<html><body><h2>Page Tidak Ditemukan (404)</h2></body></html>');
    }

}).listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})