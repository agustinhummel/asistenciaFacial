import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import { editPatient, getPatient } from '../redux/state/PatientActions';

const EditTurnoForm = () => {
    
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { turnoId } = useParams();
  
  const selectedTurno = useSelector((state) => state.turnos.selectedTurno);
  const loading = useSelector((state) => state.turnos.loading);

  useEffect(() => {
    dispatch(getTurno(turnoId));
  }, [dispatch, turnoId]);

  useEffect(() => {
    if (selectedTurno) {
      form.setFieldsValue({
        fullname: selectedTurno.fullname,
        email: selectedTurno.email,
        obraSocial: selectedTurno.obraSocial,
        dateOfBirth: moment(selectedTurno.dateOfBirth),
      });
    }
  }, [selectedTurno, form]);

  const onFinish = (values) => {
    const updatedTurnoData = {
      ...values,
      dateOfBirth: values.dateOfBirth.toISOString(),
    };
    dispatch(editPatient(turnoId, updatedTurnoData)).then(() => {
      navigate('/admin');
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        fullname: '',
        email: '',
        obraSocial: '',
        dateOfBirth: '',
      }}
    >
      <Form.Item
        name="fullname"
        label="Nombre Completo"
        rules={[{ required: true, message: 'Por favor ingresa el nombre completo' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Correo Electrónico"
        rules={[
          { required: true, message: 'Por favor ingresa el correo electrónico' },
          { type: 'email', message: 'Por favor ingresa un correo electrónico válido' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="obraSocial"
        label="obraSocial"
        rules={[{ required: true, message: 'Por favor ingresa la obraSocial' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="dateOfBirth"
        label="Fecha de Nacimiento"
        rules={[{ required: true, message: 'Por favor ingresa la fecha de nacimiento' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Guardar Cambios
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditTurnoForm;
