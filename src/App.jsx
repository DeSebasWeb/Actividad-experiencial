import './App.css'
import ApartmentCard from './components/ApartmentCard'
import Header from './components/Header';
import SearchBar from './components/SearchBar'
import Footer from './components/layout/Footer';

const samplePlaces = [
  { name: "Habitación en Laureles - Estadio", photo:"imagen1.jpeg", valor:"160,056", tiempo:"por 2 noches", estrellas:"4.89"},
  { name: "Habitación en Laureles - Estadio", photo:"imagen2.jpg", valor:"144,833", tiempo:"por 2 noches", estrellas:"4.97"},
  { name: "Loft en Laureles - Estadio", photo:"imagen3.jpg", valor:"207,126", tiempo:"por 2 noches", estrellas:"4.88"},
  { name: "Apartamento en Laureles - Estadio", photo:"imagen4.jpg", valor:"210,241", tiempo:"por 2 noches", estrellas:"4.88"},
  { name: "Bed and breakfast en Medellín", photo:"imagen5.jpg", valor:"165,040", tiempo:"por 2 noches", estrellas:"4.93"},
  { name: "Apartamento en Laureles - Estadio", photo:"imagen6.jpg", valor:"300,000", tiempo:"por 2 noches", estrellas:"4.96"}
];

function App() {
  return (
    <>
      {/* Barra de búsqueda */}
      <Header/>

      {/* Cards de los apartamentos*/}
      <div className="container-fluid px-4 py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="fw-semibold mb-0">Alojamientos populares en Medellín ›</h5>
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-light rounded-circle p-2" style={{width: '32px', height: '32px'}}>
            <span>‹</span>
          </button>
          <button className="btn btn-sm btn-light rounded-circle p-2" style={{width: '32px', height: '32px'}}>
            <span>›</span>
          </button>
        </div>
      </div>
      
      <div className="row g-3">
        {samplePlaces.map((place, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={index}>
            <ApartmentCard apartment={place} />
          </div>
        ))}
      </div>
    </div>
     <Footer />
    </>
  )
}
export default App
