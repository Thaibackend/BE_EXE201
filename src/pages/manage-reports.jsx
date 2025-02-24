import React from "react";
import MTable from "../components/m-table";

const ManageReports = () => {
  const columns = [
    {
      title: "Người Dùng Tố Cáo",
      dataIndex: "reporter",
      key: "reporter",
    },
    {
      title: "Người dùng vi phạm",
      dataIndex: "violator",
      key: "violator",
    },
    {
      title: "Lý do",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Phê Duyệt",
      key: "approval",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "5px" }}>
          <button
            style={{
              background: "#d4a118",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            📄 Cấm
          </button>
          <button
            style={{
              background: "#d63031",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            🗑️ Xóa
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      reporter: "Jack 5 Củ",
      violator: "An An",
      reason: "Đom Đóm",
    },
    {
      key: "2",
      reporter: "Nguyễn Văn A",
      violator: "Phạm Thị A",
      reason: "Giết người",
    },
    {
      key: "3",
      reporter: "Nguyễn Văn B",
      violator: "Phạm Thị B",
      reason: "Chửi tục",
    },
    {
      key: "4",
      reporter: "Nguyễn Văn C",
      violator: "Phạm Thị M",
      reason: "Đồi trụy",
    },
    {
      key: "5",
      reporter: "Nguyễn Văn D",
      violator: "Phạm Thị O",
      reason: "18+",
    },
    {
      key: "6",
      reporter: "Nguyễn Văn M",
      violator: "Phạm Thị R",
      reason: "Spam",
    },
    {
      key: "7",
      reporter: "Nguyễn Văn P",
      violator: "Phạm Thị Q",
      reason: "Lừa Đảo",
    },
    {
      key: "8",
      reporter: "Nguyễn Văn U",
      violator: "Phạm Thị K",
      reason: "Spam tin quảng cáo",
    },
    {
      key: "9",
      reporter: "Nguyễn Văn T",
      violator: "Phạm Thị U",
      reason: "Đăng hình nhạy cảm",
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 30 }}>
        <h2>Quản Lí Báo Cáo Vi Phạm</h2>
        <small>Kiểm duyệt báo báo vi phạm do người dùng tố cáo</small>
      </div>
      <MTable
        noteAlert={
          "Lý do vi phạm phải hợp lệ , kiểm duyệt thật kĩ báo cáo trước khi phê duyệt."
        }
        isAlert={true}
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default ManageReports;
