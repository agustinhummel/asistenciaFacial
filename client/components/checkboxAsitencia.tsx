import React, { useState } from "react";

function CheckboxAsistencia({ id }) {
  // Estado para controlar si se marca la asistencia o no
  const [asistencia, setAsistencia] = useState(false);

  // Función para manejar el cambio de estado del checkbox
  const handleCheckboxChange = () => {
    setAsistencia(!asistencia); // Cambiar el estado al contrario del valor actual
  };

  return (
    <>
      <input
        type="checkbox"
        id={`asistenciaCheckbox${id}`} // Utilizar el ID único para el input
        checked={asistencia}
        onChange={handleCheckboxChange}
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      />
      <label className="px-6 py-4" htmlFor={`asistenciaCheckbox_${id}`}>
        {" "}
        {asistencia ? "Asistencia marcada" : "Marcar Asistencia"}
      </label>
    </>
  );
}

export default CheckboxAsistencia;
