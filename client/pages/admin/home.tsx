import NavBar from "./../../components/navBar";
import Footer from "./../../components/footer";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import MedicTable from "../../components/MedicosAnt";

export default function home() {
  const onClick = (e: any) => {
    console.log("click ", e);
  };
  const items = [
    {
      key: "sub1",
      label: "Profesional",
      icon: <SettingOutlined />,
      children: [
        {
          key: "9",
          label: "Buscar Profesional",
        },
        {
          key: "10",
          label: "Crear Profesional",
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub2",
      label: "Paciente",
      icon: <SettingOutlined />,
      children: [
        {
          key: "9",
          label: "Buscar Pacientes",
        },
        {
          key: "10",
          label: "Crear Paciente",
        }
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub3",
      label: "Turno",
      icon: <SettingOutlined />,
      children: [
        {
          key: "9",
          label: "Buscar turno",
        },
        {
          key: "10",
          label: "Crear turno",
        }
      ],
    },
  ];

  return (
    <>
      <NavBar></NavBar>
      <div className="flex">
        <Menu
          onClick={onClick}
          style={{
            width: 256,
          }}
          mode="inline"
          items={items}
        />
        <MedicTable></MedicTable>
      </div>
    </>
  );
}
