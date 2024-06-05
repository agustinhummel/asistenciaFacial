import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editTurnoReview, fetchTurnoReview } from '../redux/state/TurnoActions';

const CheckboxWithValidation = ({ turnoId }) => {
  const dispatch = useDispatch();
  const [texto, setTexto] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);
  const [isEnviarEnabled, setIsEnviarEnabled] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchTurnoReview(turnoId))
      .then((data) => {
        if (data && data.review) {
          setTexto(data.review);
          setIsChecked(true);
        } else {
          setIsChecked(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching turno review:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, turnoId]);

  const contarPalabras = (texto) => {
    const palabras = texto.trim().split(/\s+/);
    return palabras.length;
  };

  const handleChange = (event) => {
    const nuevoTexto = event.target.value;
    setTexto(nuevoTexto);
    setIsEnviarEnabled(contarPalabras(nuevoTexto) >= 50);
  };

  const enviarInformacion = () => {
    dispatch(editTurnoReview(turnoId, texto))
      .then(() => {
        setIsChecked(true);
        setIsTextareaVisible(false);
        setToastVisible(true);
        toast.success('Información enviada');
      })
      .catch((error) => {
        toast.error('Error al enviar la información');
        console.error('Error:', error);
      });
  };

  const cancelarAccion = () => {
    setIsTextareaVisible(false);
  };

  const handleCheckboxClick = () => {
    if (!isChecked) {
      setIsTextareaVisible(true);
    }
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
          readOnly={isChecked}
        />
        <div className="flex justify-end">
          {!isChecked && (
            <>
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
            </>
          )}
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
          onChange={handleCheckboxClick}
          disabled={isChecked || isLoading}
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
