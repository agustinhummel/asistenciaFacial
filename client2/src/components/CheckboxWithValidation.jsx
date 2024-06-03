import { useState } from 'react';
import { createPortal } from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Componente de Checkbox con validación de texto
const CheckboxWithValidation = () => {
  const [texto, setTexto] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);
  const [isEnviarEnabled, setIsEnviarEnabled] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  // Función para contar las palabras ingresadas
  const contarPalabras = (texto) => {
    const palabras = texto.trim().split(/\s+/);
    return palabras.length;
  };

  // Función para manejar el cambio en el textarea
  const handleChange = (event) => {
    const nuevoTexto = event.target.value;
    setTexto(nuevoTexto);
    setIsEnviarEnabled(contarPalabras(nuevoTexto) >= 10);
  };

  // Función para enviar la información y marcar el checkbox
  const enviarInformacion = () => {
    // Aquí puedes agregar la lógica para guardar el texto antes de marcar el checkbox
    setIsChecked(true);
    setIsTextareaVisible(false);
    setToastVisible(true);
    toast.success('Información enviada');
  };

  // Función para cancelar la acción y cerrar el textarea
  const cancelarAccion = () => {
    setIsTextareaVisible(false);
  };

  const popup = (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-800 bg-opacity-75" onClick={cancelarAccion}></div>
      <div className="bg-white p-8 rounded-lg relative z-10 w-96">
        <textarea
          value={texto}
          onChange={handleChange}
          className="w-full h-64 border border-gray-300 rounded p-2 mb-4 resize-none"
          placeholder="Escribe al menos 50 palabras..."
        />
        <div className="flex justify-end">
          <button
            onClick={cancelarAccion}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={enviarInformacion}
            disabled={!isEnviarEnabled}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${!isEnviarEnabled && 'opacity-50 cursor-not-allowed'}`}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsTextareaVisible(true)}
        />
        <span>Marcar Checkbox</span>
      </div>
      {isTextareaVisible && createPortal(popup, document.body)}
      {toastVisible && (
        <ToastContainer
          onClose={() => setToastVisible(false)}
          autoClose={3000}
        />
      )}
    </div>
  );
};

export default CheckboxWithValidation;
