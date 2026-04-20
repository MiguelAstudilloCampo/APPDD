
// import './App.css'

import logo from './assets/dibujos-animados-viajes-vacaciones_24640-22301.avif'


function App() {
  return (
    <>
      {/* =========================== NAVBAR MODERNA =========================== */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center fw-bold fs-4" href="#">
            <img src={logo} width="36" height="36" className="me-2 rounded-circle" alt="Logo" />
            ExploraPop
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-label="Menú">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="menuPrincipal">
            <ul className="navbar-nav gap-2">
              <li className="nav-item"><a className="nav-link active fw-semibold" href="#inicio">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#destinos">Destinos</a></li>
              <li className="nav-item"><a className="nav-link" href="#reservas">Reservas</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        {/* =========================== SECCIÓN BIENVENIDA (CARD VIAJERO) =========================== */}
        <section id="inicio" className="container mt-5 pt-2">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card p-4 shadow-lg border-0 rounded-4 bg-white">
                <div className="text-center mb-2">
                  <i className="bi bi-globe-americas fs-1 text-primary"></i>
                </div>
                <h1 className="text-center fw-bold">Bienvenido Viajero ✈️</h1>
                <p className="text-center text-secondary">Ingresa tus datos y comienza a explorar Popayán</p>
                <input type="text" className="form-control mb-3 rounded-pill" placeholder="Digite su nombre completo" />
                <input type="text" className="form-control mb-3 rounded-pill" placeholder="Digite su usuario / email" />
                <button className="btn btn-primary w-100 rounded-pill py-2 fw-semibold">Siguiente <i className="bi bi-arrow-right-short"></i></button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================== DESTINOS TURÍSTICOS =========================== */}
        <section id="destinos" className="container mt-5 pt-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold display-6">Destinos turísticos</h2>
            <p className="lead text-secondary">Explora los lugares más emblemáticos de Popayán, la Ciudad Blanca</p>
            <div className="mx-auto" style={{ width: "60px", height: "3px", backgroundColor: "#1e6f5c" }}></div>
          </div>

          <div className="row g-4">
            {/* Tarjeta 1: Parque Caldas */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src="data:image/jpeg;base64,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" className="card-img-top" alt="Parque Caldas" />
                <div className="card-body d-flex flex-column">
                  <h5 className="text-center fw-bold">Parque Caldas</h5>
                  <div className="mt-auto d-grid">
                    <button className="btn btn-outline-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#modalParqueCaldas">
                      Más info <i className="bi bi-info-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Morro de Tulcán */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOV1Yp8W3hKG21jXVTmUYBt8FpnO6TMcKVWw&s" className="card-img-top" alt="Morro de Tulcán" />
                <div className="card-body d-flex flex-column">
                  <h5 className="text-center fw-bold">Morro de Tulcán</h5>
                  <div className="mt-auto d-grid">
                    <button className="btn btn-outline-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#modalMorroTulcan">
                      Más info <i className="bi bi-info-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 3: Puente del Humilladero */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVlrSpX3w7d5edxDbHqwrMUAXELjC_I4XQJQ&s" className="card-img-top" alt="Puente del Humilladero" />
                <div className="card-body d-flex flex-column">
                  <h5 className="text-center fw-bold">Puente del Humilladero</h5>
                  <div className="mt-auto d-grid">
                    <button className="btn btn-outline-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#modalPuente">
                      Más info <i className="bi bi-info-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 4: Catedral */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHE7j7TRmZOo4Rq_GYSxadg45m6b-pmH3sQ&s" className="card-img-top" alt="Catedral" />
                <div className="card-body d-flex flex-column">
                  <h5 className="text-center fw-bold">Catedral Basílica</h5>
                  <div className="mt-auto d-grid">
                    <button className="btn btn-outline-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#modalCatedral">
                      Más info <i className="bi bi-info-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 5: Pueblito Patojo */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQR4UEq3ZPIGBlBzWouyU_2lNSlK54FdGk-Q&s" className="card-img-top" alt="Pueblito Patojo" />
                <div className="card-body d-flex flex-column">
                  <h5 className="text-center fw-bold">Pueblito Patojo</h5>
                  <div className="mt-auto d-grid">
                    <button className="btn btn-outline-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#modalPatojo">
                      Más info <i className="bi bi-info-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 6: Cerro las Tres Cruces */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBIcHp6thO_8jq0vrXFN6Yh9gvePZ8syf3g&s" className="card-img-top" alt="Cerro Tres Cruces" />
                <div className="card-body d-flex flex-column">
                  <h5 className="text-center fw-bold">Cerro las Tres Cruces</h5>
                  <div className="mt-auto d-grid">
                    <button className="btn btn-outline-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#modalTresCruces">
                      Más info <i className="bi bi-info-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 7: Hotel Dann Monasterio */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/bf/2c/1c/patio-central-hotel-dann.jpg?w=900&h=500&s=1" className="card-img-top" alt="Hotel Dann Monasterio" />
                <div className="card-body d-flex flex-column">
                  <h5 className="text-center fw-bold">Hotel Dann Monasterio</h5>
                  <div className="mt-auto d-grid">
                    <button className="btn btn-outline-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#modalHotelDann">
                      Más info <i className="bi bi-info-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 8: Termales Puracé */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src="https://cdn.baquianos.com/img/tours/2023/16/termales-de-coconuco-pasadia-5yy1543.jpg" className="card-img-top" alt="Termales Puracé" />
                <div className="card-body d-flex flex-column">
                  <h5 className="text-center fw-bold">Termales Puracé</h5>
                  <div className="mt-auto d-grid">
                    <button className="btn btn-outline-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#modalTermales">
                      Más info <i className="bi bi-info-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================== SECCIÓN RESERVAS (hoteles y termales) =========================== */}
        <section id="reservas" className="container mt-5 pt-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold display-6">Reservas exclusivas</h2>
            <p className="text-secondary">Vive la experiencia en los mejores alojamientos y atractivos naturales</p>
            <div className="mx-auto" style={{ width: "60px", height: "3px", backgroundColor: "#1e6f5c" }}></div>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Tarjeta reserva Hotel Dann Monasterio */}
            <div className="col-md-6 col-lg-5">
              <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/bf/2c/1c/patio-central-hotel-dann.jpg?w=900&h=500&s=1" className="card-img-top" alt="Hotel Dann Monasterio" style={{ height: "220px" }} />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h4 className="fw-bold">Hotel Dann Monasterio</h4>
                    <span className="badge bg-success rounded-pill">⭐ 4.8</span>
                  </div>
                  <p className="text-muted mt-2">Hotel histórico en un antiguo monasterio del siglo XVI, arquitectura colonial y ambiente único.</p>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-cash-stack text-primary me-2"></i><strong>Precio por noche:</strong> $250.000 - $400.000 COP</li>
                    <li><i className="bi bi-wifi text-primary me-2"></i><strong>Incluye:</strong> desayuno, wifi, piscina</li>
                    <li><i className="bi bi-clock-history text-primary me-2"></i><strong>Check-in:</strong> 3:00 pm | <strong>Check-out:</strong> 12:00 pm</li>
                  </ul>
                  <div className="d-grid mt-3">
                    <button className="btn btn-primary rounded-pill py-2 fw-semibold" data-bs-toggle="modal" data-bs-target="#reservaHotelModal">
                      <i className="bi bi-calendar-check"></i> Reservar ahora
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta reserva Termales de Puracé */}
            <div className="col-md-6 col-lg-5">
              <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
                <img src="https://cdn.baquianos.com/img/tours/2023/16/termales-de-coconuco-pasadia-5yy1543.jpg" className="card-img-top" alt="Termales Puracé" style={{ height: "220px" }} />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h4 className="fw-bold">Termales de Puracé</h4>
                    <span className="badge bg-info rounded-pill">🔥 Volcán activo</span>
                  </div>
                  <p className="text-muted mt-2">Aguas termales volcánicas, ecosistema único y senderos ecológicos inolvidables.</p>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-ticket-perforated text-primary me-2"></i><strong>Entrada general:</strong> $15.000 - $25.000 COP</li>
                    <li><i className="bi bi-binoculars text-primary me-2"></i><strong>Recorrido guiado:</strong> $20.000 COP</li>
                    <li><i className="bi bi-sun text-primary me-2"></i><strong>Horario:</strong> 8:00 am - 5:00 pm</li>
                    <li><i className="bi bi-tree text-primary me-2"></i><strong>Incluye:</strong> acceso a termales + senderos ecológicos</li>
                  </ul>
                  <div className="d-grid mt-3">
                    <button className="btn btn-primary rounded-pill py-2 fw-semibold" data-bs-toggle="modal" data-bs-target="#reservaTermalesModal">
                      <i className="bi bi-calendar-check"></i> Reservar experiencia
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================== FOOTER MODERNO =========================== */}
      <footer id="contacto" className="bg-white text-dark mt-5 pt-4 pb-3 border-top">
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold"><i className="bi bi-compass"></i> ExploraPop</h5>
              <p className="text-muted small">Descubre la Ciudad Blanca de Colombia — historia, cultura y naturaleza en un solo destino.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h6 className="fw-semibold">Contacto directo</h6>
              <p className="mb-1"><i className="bi bi-geo-alt-fill text-primary"></i> Popayán, Cauca</p>
              <p className="mb-1"><i className="bi bi-envelope-fill text-primary"></i> <a href="mailto:info@ExploraPop.co" className="text-dark">info@ExploraPop.co</a></p>
              <p><i className="bi bi-telephone-fill text-primary"></i> +57 602 820 0000</p>
            </div>
            <div className="col-md-4 mb-3">
              <h6 className="fw-semibold">Síguenos</h6>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a href="#" className="text-dark fs-5"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-dark fs-5"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-dark fs-5"><i className="bi bi-twitter-x"></i></a>
              </div>
              <p className="mt-2 small text-muted">© 2025 ExploraPop - Turismo con propósito</p>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================== MODALES DE INFORMACIÓN (DESTINOS) =========================== */}
      {/* Modal 1 - Parque Caldas */}
      <div className="modal fade" id="modalParqueCaldas" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-4">
            <div className="modal-header bg-light">
              <h5 className="modal-title fw-bold">Parque Caldas</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <img src="https://placehold.co/400x300?text=Parque+Caldas" className="img-fluid rounded-3 mb-3 modal-img" alt="Parque Caldas" />
              <p>El Parque Caldas es la plaza principal de Popayán, corazón histórico y cultural de la ciudad, donde se reúnen los principales edificios y actividades representativas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 2 - Morro de Tulcán */}
      <div className="modal fade" id="modalMorroTulcan" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-4">
            <div className="modal-header bg-light">
              <h5 className="modal-title fw-bold">Morro de Tulcán</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <img src="https://placehold.co/400x300?text=Morro+Tulcán" className="img-fluid rounded-3 mb-3 modal-img" alt="Morro Tulcán" />
              <p>El Morro del Tulcán es un antiguo túmulo indígena ubicado en Popayán, testimonio arqueológico de la época precolombina.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 3 - Puente del Humilladero */}
      <div className="modal fade" id="modalPuente" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-4">
            <div className="modal-header bg-light">
              <h5 className="modal-title fw-bold">Puente del Humilladero</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <img src="https://placehold.co/400x300?text=Puente+Humilladero" className="img-fluid rounded-3 mb-3 modal-img" alt="Puente" />
              <p>El Puente del Humilladero, construido en el siglo XIX, es un emblemático puente colonial que conecta zonas históricas de Popayán.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 4 - Catedral */}
      <div className="modal fade" id="modalCatedral" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-4">
            <div className="modal-header bg-light">
              <h5 className="modal-title fw-bold">Catedral Basílica de Popayán</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <img src="https://placehold.co/400x300?text=Catedral" className="img-fluid rounded-3 mb-3 modal-img" alt="Catedral" />
              <p>La Catedral Basílica es la iglesia principal de Popayán, con arquitectura colonial y gran importancia religiosa y cultural.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 5 - Pueblito Patojo */}
      <div className="modal fade" id="modalPatojo" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-4">
            <div className="modal-header bg-light">
              <h5 className="modal-title fw-bold">Pueblito Patojo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <img src="https://placehold.co/400x300?text=Pueblito+Patojo" className="img-fluid rounded-3 mb-3 modal-img" alt="Pueblito Patojo" />
              <p>Esta réplica en miniatura muestra los monumentos y edificios más representativos de la ciudad, ideal para conocer Popayán a escala.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 6 - Cerro Tres Cruces */}
      <div className="modal fade" id="modalTresCruces" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-4">
            <div className="modal-header bg-light">
              <h5 className="modal-title fw-bold">Cerro las Tres Cruces</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <img src="https://placehold.co/400x300?text=Tres+Cruces" className="img-fluid rounded-3 mb-3 modal-img" alt="Cerro Tres Cruces" />
              <p>Es un mirador natural emblemático, famoso por sus senderos ecológicos, caminatas familiares y la vista panorámica de la Ciudad Blanca.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 7 - Hotel Dann Monasterio (info) */}
      <div className="modal fade" id="modalHotelDann" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-4">
            <div className="modal-header bg-light">
              <h5 className="modal-title fw-bold">Hotel Dann Monasterio</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <img src="https://placehold.co/400x300?text=Hotel+Dann" className="img-fluid rounded-3 mb-3 modal-img" alt="Hotel Dann" />
              <p>El Hotel Dann Monasterio es un histórico hotel ubicado en un antiguo monasterio del siglo XVI, con arquitectura colonial y jardines únicos.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 8 - Termales Puracé (info) */}
      <div className="modal fade" id="modalTermales" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-4">
            <div className="modal-header bg-light">
              <h5 className="modal-title fw-bold">Termales Puracé</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <img src="https://placehold.co/400x300?text=Termales+Puracé" className="img-fluid rounded-3 mb-3 modal-img" alt="Termales" />
              <p>Las termales de Puracé son conocidas por sus aguas termales volcánicas, con un ecosistema único y actividad volcánica activa.</p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================== MODALES DE RESERVA =========================== */}
      {/* Modal Reserva Hotel */}
      <div className="modal fade" id="reservaHotelModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 border-0">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title fw-semibold"><i className="bi bi-building"></i> Reserva - Hotel Dann Monasterio</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Nombre completo</label>
                  <input type="text" className="form-control rounded-pill" placeholder="Ej: Ana María López" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Correo electrónico</label>
                  <input type="email" className="form-control rounded-pill" placeholder="tucorreo@ejemplo.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Teléfono</label>
                  <input type="tel" className="form-control rounded-pill" placeholder="+57 300 123 4567" />
                </div>
                <button type="submit" className="btn btn-primary w-100 rounded-pill py-2">Confirmar reserva <i className="bi bi-check2-circle"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Reserva Termales */}
      <div className="modal fade" id="reservaTermalesModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 border-0">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title fw-semibold"><i className="bi bi-water"></i> Reserva - Termales de Puracé</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Nombre completo</label>
                  <input type="text" className="form-control rounded-pill" placeholder="Nombre y apellido" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Correo electrónico</label>
                  <input type="email" className="form-control rounded-pill" placeholder="correo@dominio.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Teléfono de contacto</label>
                  <input type="text" className="form-control rounded-pill" placeholder="Número celular" />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-pill py-2">Reservar ahora <i className="bi bi-tree"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
