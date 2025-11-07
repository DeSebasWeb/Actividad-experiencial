import './App.css'
import ApartmentCard from './components/ApartmentCard'
import SearchBar from './components/SearchBar'
import Header from './components/Header'  //

function App() {
  const samplePlaces = [
    { name: "Habitación en Laureles - Estadio", photo:"imagen1.jpeg", valor:"160,056", tiempo:"por 2 noches", estrellas:"4.89"},
    { name: "Habitación en Laureles - Estadio", photo:"imagen2.jpg", valor:"144,833", tiempo:"por 2 noches", estrellas:"4.97"},
    { name: "Loft en Laureles - Estadio", photo:"imagen3.jpg", valor:"207,126", tiempo:"por 2 noches", estrellas:"4.88"},
    { name: "Apartamento en Laureles - Estadio", photo:"imagen4.jpg", valor:"210,241", tiempo:"por 2 noches", estrellas:"4.88"},
  ];

  return (
    <>
      <Header /> {/* <-- Header aquí */}
      <SearchBar />
      {/* Cards */}
      <div className="container-fluid px-4 py-4">
        <h5 className="fw-semibold mb-3">Alojamientos populares en Medellín ›</h5>
        <div className="row g-3">
          {samplePlaces.map((place, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={index}>
              <ApartmentCard apartment={place} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
