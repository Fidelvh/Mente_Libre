/**
 * CardPrograma.jsx
 *
 * Componente reutilizable para mostrar programas
 * individuales con imagen, título, descripción y enlace.
 *
 * Se utiliza en todas las vistas dentro de /pages/programas
 */

import { Link } from 'react-router-dom'

export default function CardPrograma({ title, description, image, link, reverse }) {
  return (
    <div className={`row align-items-center my-5 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="col-md-6">
        <img
          src={image}
          alt={title}
          className="img-fluid rounded shadow-sm"
          style={{ height: '300px', objectFit: 'cover', width: '100%' }}
        />
      </div>
      <div className="col-md-6">
        <h3 className="text-copper">{title}</h3>
        <p className="text-muted">{description}</p>
        <Link to={link} className="btn btn-outline-primary">
          Ver más
        </Link>
      </div>
    </div>
  )
}
