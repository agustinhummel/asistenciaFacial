import React, { useState } from 'react';
import { Table, Input, Button, Space, Checkbox } from 'antd';
import { SearchOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import CheckboxWithValidation from './CheckboxWithValidation';
import './patientTableStyles.css';


const PatientTableMedic = ({ data, onDelete }) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0].toString());
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div className="p-2">
        <Input
          placeholder={`Buscar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          className="mb-2 block w-full"
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
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
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

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
}

const columns = [
    {
        title: 'Nombre Completo',
        dataIndex: ['patient', 'fullname'],
        key: 'patient.fullname',
        render: text => text,
        ...getColumnSearchProps('por Nombre'),
    },
    {
        title: 'Obra Social',
        dataIndex: ['patient', 'obraSocial'],
        key: 'patient.obraSocial',
        render: text => text,
        ...getColumnSearchProps('por Obra Social'),
    },
    {
        title: 'Fecha',
        dataIndex: 'fecha',
        key: 'fecha',
        render: text => formatDate(text), // Formatear la fecha
        ...getColumnSearchProps('Fecha'),
    },
    {
        title: 'Acción',
        key: 'action',
        render: (text, record) => (
            <>
                <div className="flex items-center space-x-4">
                    <CheckboxWithValidation turnoId={record.id} />
                    <Link to={`turno/bymedicid/${record.patientId}`} className="text-blue-500 hover:text-blue-700">
                        <Button type="link" icon={<EditOutlined />} className="text-blue-500 hover:text-blue-700">
                            Ver Historial
                        </Button>
                    </Link>
                </div>
            </>
        ),
    },
];

return <Table columns={columns} dataSource={data} />;
};

export default PatientTableMedic;
