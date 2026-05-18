import React from 'react';

function App() {
  // Menggunakan ekspresi variabel di dalam JSX sesuai materi modul
  const proyekInfo = {
    judul: "My First React Project",
    subJudul: "Praktikum Teknologi Web - Pertemuan 12",
    deskripsi: "Halaman ini telah dimodifikasi secara kreatif menggunakan React JS. Komponen ini disusun menggunakan fungsional komponen standar yang mengintegrasikan elemen heading, gambar, teks paragraf, dan pembungkus div dengan styling CSS modern.",
    avatarUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=500&auto=format&fit=crop"
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Menggunakan tag img dengan ekspresi atribut */}
        <img 
          src={proyekInfo.avatarUrl} 
          alt="React Logo atau Ilustrasi" 
          style={styles.image} 
        />
        
        {/* Menggunakan tag heading (h1 dan h2) */}
        <h1 style={styles.mainTitle}>{proyekInfo.judul}</h1>
        <h2 style={styles.subTitle}>{proyekInfo.subJudul}</h2>
        
        {/* Menggunakan tag paragraf (p) */}
        <p style={styles.paragraph}>{proyekInfo.deskripsi}</p>
        
        <div style={styles.footer}>
          <span>Status: Saya sudah praktikum</span>
        </div>
      </div>
    </div>
  );
}

// Styling CSS internal yang rapi dan kreatif
const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    backgroundColor: "#0f172a",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    padding: "32px",
    maxWidth: "450px",
    textAlign: "center",
    border: "1px solid #334155"
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "24px",
    border: "2px solid #38bdf8"
  },
  mainTitle: {
    color: "#f8fafc",
    fontSize: "22px",
    fontWeight: "bold",
    margin: "0 0 8px 0",
    lineHeight: "1.4"
  },
  subTitle: {
    color: "#38bdf8",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
    margin: "0 0 16px 0"
  },
  paragraph: {
    color: "#94a3b8",
    fontSize: "14px",
    lineHeight: "1.6",
    margin: "0 0 24px 0",
    textAlign: "justify"
  },
  footer: {
    borderTop: "1px solid #334155",
    paddingTop: "16px",
    color: "#64748b",
    fontSize: "12px",
    fontWeight: "500"
  }
};

export default App;