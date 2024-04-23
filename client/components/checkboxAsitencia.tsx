import React, { useState, useEffect } from "react";

function CheckboxAsistencia({ id }) {
  // Estado para controlar si se marca la asistencia o no
  const [asistencia, setAsistencia] = useState(false);

  // Función para manejar el cambio de estado del checkbox
  const handleCheckboxChange = () => {
    // Verificar si ya se ha marcado la asistencia antes de permitir cambios
    if (!asistencia) {
      setAsistencia(true); // Cambiar el estado solo si aún no se ha marcado
      // Guardar la asistencia marcada en el localStorage
      localStorage.setItem(`asistencia_${id}`, "true");
    }
  };

  // Comprobar si hay una marca de asistencia en el localStorage al cargar el componente
  useEffect(() => {
    const storedAsistencia = localStorage.getItem(`asistencia_${id}`);
    if (storedAsistencia === "true") {
      setAsistencia(true); // Establecer el estado de asistencia según lo almacenado en el localStorage
    }
  }, [id]);

  return (
    <div>
      {/* Input de tipo checkbox controlado por el estado "asistencia" */}
      <input type="checkbox" id={`asistenciaCheckbox_${id}`} checked={asistencia} onChange={handleCheckboxChange} />
      {/* Etiqueta para el input */}
      <label htmlFor={`asistenciaCheckbox_${id}`}>{asistencia ? " Asistencia marcada" : " Marcar asistencia"}</label>
      {/* Mostrar un mensaje dependiendo del estado de la asistencia */}
      <p></p>
    </div>
  );
}

export default CheckboxAsistencia;
