import React, { useState } from 'react';
import { Table, Input, Button, Space, Modal } from 'antd';
import { SearchOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const PatientTable = ({ data, onDelete }) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const showDeleteConfirm = (email) => {
    Modal.confirm({
      title: 'Eliminar Paciente',
      content: '¿Estás seguro de que deseas eliminar este paciente?',
      okText: 'Eliminar',
      okType: 'danger',
      cancelText: 'Cancelar',
      onOk() {
        onDelete(email);
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
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => document.getElementById('searchInput')?.select(), 100);
      }
    },
  });

  const columns = [
    {
      title: 'Nombre Completo',
      dataIndex: 'fullname',
      key: 'fullname',
      ...getColumnSearchProps('fullname'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'NID',
      dataIndex: 'nid',
      key: 'nid',
      ...getColumnSearchProps('nid'),
    },
    {
      title: 'Acción',
      key: 'action',
      render: (text, record) => (
        <>
          <Link to={`/edit-patient/${record.id}`}>
            <Button type="link" icon={<EditOutlined />} style={{ color: '#1890ff' }}>Editar</Button>
          </Link>
          <Button type="link" danger onClick={() => showDeleteConfirm(record.email)}>Eliminar</Button>
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default PatientTable;
