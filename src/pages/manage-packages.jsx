import React from "react";
import { Table, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

const ManagePackages = () => {
  const handleEdit = (packageType) => {
    console.log(`Chỉnh sửa gói: ${packageType}`);
  };

  const columns = [
    {
      title: "BASIC - FREE",
      dataIndex: "basic",
      key: "basic",
      align: "center",
    },
    {
      title: "PREMIUM",
      dataIndex: "premium",
      key: "premium",
      align: "center",
    },
    {
      title: "TITANIUM",
      dataIndex: "titanium",
      key: "titanium",
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      basic: "Free",
      premium: "200.000 VND",
      titanium: "650.000 VND",
    },
    {
      key: "2",
      basic: "Bộ Sưu Tập Gia Đình: 15GB",
      premium: "Bộ Sưu Tập Gia Đình: 256 GB",
      titanium: "Bộ Sưu Tập Gia Đình: 1 TB",
    },
    {
      key: "3",
      basic: "Lịch Gia Đình: Có",
      premium: "Lịch Gia Đình: Có hiệu ứng",
      titanium: "Lịch Gia Đình: Hiệu Ứng Đặc Biệt",
    },
    {
      key: "4",
      basic: "Đăng Hình Group Gia Đình: Có",
      premium: "Đăng Hình Group Gia Đình: Hỗ trợ chỉnh ảnh",
      titanium: "Đăng Hình Group Gia Đình: Bộ chỉnh ảnh đầy đủ",
    },
    {
      key: "5",
      basic: "Câu Đố, Trò Chơi: Không",
      premium: "Câu Đố, Trò Chơi: 50 câu",
      titanium: "Câu Đố, Trò Chơi: Không giới hạn",
    },
    {
      key: "6",
      basic: "Nhắn Tin: Có",
      premium: "Nhắn Tin: Tạo cảm xúc cá nhân",
      titanium: "Nhắn Tin: Cảm xúc đặc biệt",
    },
    {
      key: "7",
      basic: "Theo Dõi Vị Trí: Không",
      premium: "Theo Dõi Vị Trí: Có",
      titanium: "Theo Dõi Vị Trí: Giao diện chuyên sâu",
    },
    {
      key: "8",
      basic: "Nhắc Nhở Dịp Đặc Biệt: Không",
      premium: "Nhắc Nhở Dịp Đặc Biệt: Có",
      titanium: "Nhóm Gia Đình: Quản lí nhiều nhóm",
    },
    {
      key: "9",
      basic: "Hiệu Ứng Tương Tác: Không",
      premium: "Hiệu Ứng Tương Tác: 50 hiệu ứng",
      titanium: "Hỗ trợ từ hệ thống: Ưu tiên",
    },
    {
      key: "edit", // Dòng chứa nút chỉnh sửa
      basic: (
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => handleEdit("BASIC - FREE")}
        >
          Chỉnh sửa
        </Button>
      ),
      premium: (
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => handleEdit("PREMIUM")}
        >
          Chỉnh sửa
        </Button>
      ),
      titanium: (
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => handleEdit("TITANIUM")}
        >
          Chỉnh sửa
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <h2>Quản Lý Gói Premium</h2>
        <small>Các gói trong hệ thống</small>
      </div>

      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </div>
  );
};

export default ManagePackages;
