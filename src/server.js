const kitchenRoutes = require('./routes/kitchenRoutes');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const mysql = require('mysql2');

app.use(cors())
app.use(express.json())

app.use('/kitchen', kitchenRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port on ${PORT}`);
});
// Gunakan rute dapur
// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',  // MySQL server location
  user: 'root',       // Default MySQL username
  password: '',       // Default password for root user in XAMPP (leave empty)
  database: 'restoran' // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL!');
});

// untuk menambah data pemesanan pada database
app.post('/insert', (req, res) => {
    
});

// mengambil semua data di database
app.get("/fetch", async (req,res)=>{
    
})

//ambil semua daftar menu untuk ditampilkan di kelola menu
app.get("/fetchMenu", async (req,res)=>{
  
})

//ambil semua status yang akan digunakan untuk membuat clien tahu apakah menu tersebut ada atau tidak
app.get("/fetchStatus", async (req,res)=>{
  
})

//hapus salah satu berdasarkan req yg diterima daftar pemesanan
app.post("/delete", async (req,res)=>{
  
})

//cahnge status mengubah status 1/0 dari tabel menu bagian status database
app.post("/changeStatus", async (req,res)=>{
  
})
