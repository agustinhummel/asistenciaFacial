import React, { useEffect } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getMedic, editMedic } from '../redux/state/MedicActions';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';

const EditMedicForm = () => {
    
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { medicId } = useParams();

  const selectedMedic = useSelector((state) => state.medics.selectedMedic);
  const loading = useSelector((state) => state.medics.loading);

  useEffect(() => {
    dispatch(getMedic(medicId));
  }, [dispatch, medicId]);

  useEffect(() => {
    if (selectedMedic) {
      form.setFieldsValue({
        fullname: selectedMedic.fullname,
        email: selectedMedic.email,
        dateOfBirth: moment(selectedMedic.dateOfBirth),
      });
    }
  }, [selectedMedic, form]);

  const onFinish = (values) => {
    const updatedMedicData = {
      ...values,
      dateOfBirth: values.dateOfBirth.toISOString(),
    };
    dispatch(editMedic(medicId, updatedMedicData)).then(() => {
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

export default EditMedicForm;
