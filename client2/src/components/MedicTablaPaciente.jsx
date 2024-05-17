import React, { useState } from 'react';
import { Table, Input, Button, Space, Modal } from 'antd';
import { SearchOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const PatientTableMedic = ({ data, onDelete }) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');



  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0].toString());
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Buscar ${dataIndex}`}
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
            Resetear
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => {
      const dataIndexPath = dataIndex.split('.');
      let recordValue = record;
      for (let path of dataIndexPath) {
        recordValue = recordValue[path];
        if (recordValue === undefined) {
          return false;
        }
      }
      return recordValue.toString().toLowerCase().includes(value.toLowerCase());
    },
  });

  console.log(data)

  const columns = [
    {
      title: 'Nombre Completo',
      dataIndex: 'patient',
      key: 'patient.fullname',
      render: (text, record) => record.patient.fullname,
      ...getColumnSearchProps('patient.fullname'),
    },
    {
        title: 'Obra Social',
        dataIndex: 'patient',
        key: 'patient.obraSocial',
        render: (text, record) => record.patient.obraSocial,
        ...getColumnSearchProps('patient.obraSocial'),
    },
    {
        title: 'Fecha',
        dataIndex: 'fecha',
        key: 'fecha',
        ...getColumnSearchProps('Fecha'),
      },
    {
      title: 'Acción',
      key: 'action',
      render: (text, record) => (
        <>
          <Link to={`/edit-patient/${record.id}`}>
            <Button type="link" icon={<EditOutlined />} style={{ color: '#1890ff' }}>Ver Historial</Button>
          </Link>

        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default PatientTableMedic;
