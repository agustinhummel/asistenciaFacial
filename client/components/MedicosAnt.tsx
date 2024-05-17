
import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Medico } from '../types'; // Asumiendo que tienes definido un tipo para el modelo Medic


interface MedicTableProps {
  data: Medico[];
  onDelete: (id: string) => void;
}
  
  const MedicTable: React.FC<MedicTableProps> = ({ data, onDelete }) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
  
    const handleSearch = (selectedKeys: React.Key[], confirm: () => void, dataIndex: string) => {
      confirm();
      setSearchText(selectedKeys[0].toString());
      setSearchedColumn(dataIndex);
    };
  
    const handleReset = (clearFilters: () => void) => {
      clearFilters();
      setSearchText('');
    };
  
    const getColumnSearchProps = (dataIndex: string) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={`Search ${dataIndex}`}
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
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value: any, record: any) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible: boolean) => {
        if (visible) {
          setTimeout(() => document.getElementById('searchInput')?.select(), 100);
        }
      },
    });
  
    const columns = [
      {
        title: 'Fullname',
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
        title: 'Action',
        key: 'action',
        render: (text: string, record: any) => (
          <Button type="link" danger onClick={() => onDelete(record.id)}>Delete</Button>
        ),
      },
    ];
  
    return <Table columns={columns} dataSource={data} />;
  };
  
  export default MedicTable;
  