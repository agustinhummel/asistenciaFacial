import React, { useState } from 'react';
import { Table, Input, Button, Space, Modal } from 'antd';
import { SearchOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';

const TurnoTable = ({ data, onDelete }) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: 'Eliminar Turno',
      content: '¿Estás seguro de que deseas eliminar este turno?',
      okText: 'Eliminar',
      okType: 'danger',
      cancelText: 'Cancelar',
      onOk() {
        onDelete(id);
      },
    });
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0].toString());
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (placeHolder,dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          id="searchInput"
          placeholder={`Buscar ${placeHolder}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Buscar
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reiniciar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => {
      let recordValue;
      if (dataIndex.includes('.')) {
        const keys = dataIndex.split('.');
        recordValue = keys.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : null, record);
      } else {
        recordValue = record[dataIndex];
      }


      if (recordValue !== undefined && recordValue !== null) {
        const recordValueString = recordValue.toString().toLowerCase();
        const filterValueString = value.toLowerCase();
        return recordValueString.includes(filterValueString);
      }
      return false;
    },
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => document.getElementById('searchInput')?.select(), 100);
      }
    },
  });

  const columns = [
    {
      title: 'Nombre del Paciente',
      dataIndex: ['patient','fullname'],
      key: 'patientName',
      ...getColumnSearchProps('por nombre','patient.fullname'),
    },
    {
      title: 'Nombre del Médico',
      dataIndex: ['medic','fullname'],
      key: 'medicName',
      ...getColumnSearchProps('por nombre','medic.fullname'),
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
      render: (fecha) => moment(fecha).format('YYYY-MM-DD HH:mm:ss'),
      ...getColumnSearchProps('por fecha','fecha'),
    },
    {
      title: 'Acción',
      key: 'action',
      render: (text, record) => (
        <>
          <Link to={`/edit-turno/${record.id}`}>
            <Button type="link" icon={<EditOutlined />} style={{ color: '#1890ff' }}>Editar</Button>
          </Link>
          <Button type="link" danger onClick={() => showDeleteConfirm(record.id)}>Eliminar</Button>
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default TurnoTable;
