import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import { editPatient, getPatient } from '../redux/state/PatientActions';

const EditPatientForm = () => {
    
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { patientId } = useParams();
  
  const selectedPatient = useSelector((state) => state.patients.selectedPatient);
  const loading = useSelector((state) => state.patients.loading);

  useEffect(() => {
    dispatch(getPatient(patientId));
  }, [dispatch, patientId]);

  useEffect(() => {
    if (selectedPatient) {
      form.setFieldsValue({
        fullname: selectedPatient.fullname,
        email: selectedPatient.email,
        obraSocial: selectedPatient.obraSocial,
        dateOfBirth: moment(selectedPatient.dateOfBirth),
      });
    }
  }, [selectedPatient, form]);

  const onFinish = (values) => {
    const updatedPatientData = {
      ...values,
      dateOfBirth: values.dateOfBirth.toISOString(),
    };
    dispatch(editPatient(patientId, updatedPatientData)).then(() => {
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

export default EditPatientForm;
