import { useEffect, useState } from "react";
import { Modal, message, Table, Input, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { path } from "../../../api/index";

interface DataType {
  id: React.Key;
  charge: number;
}

interface PropsInterface {
  onChange: (result: any) => void;
}

export const LearnPathComp = (props: PropsInterface) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [keywords, setKeywords] = useState<string>("");

  useEffect(() => {
    getData();
  }, [page, size, refresh]);

  const getData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    path
      .list({
        page: page,
        size: size,
        sort: "created_at",
        order: "desc",
        keywords: keywords,
      })
      .then((res: any) => {
        setList(res.data.data);
        setTotal(res.data.total);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  const resetList = () => {
    setPage(1);
    setSize(10);
    setList([]);
    setKeywords("");
    setRefresh(!refresh);
  };

  const paginationProps = {
    current: page, //当前页码
    pageSize: size,
    total: total, // 总条数
    onChange: (page: number, pageSize: number) =>
      handlePageChange(page, pageSize), //改变页码的函数
    showSizeChanger: true,
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "路径ID",
      width: 120,
      render: (_, record: any) => <span>{record.id}</span>,
    },
    {
      title: "路径",
      render: (_, record: any) => (
        <div className="d-flex">
          <div>
            <img src={record.thumb} width="100" height="80" />
          </div>
          <div className="ml-15">{record.name}</div>
        </div>
      ),
    },
    {
      title: "价格",
      width: 120,
      dataIndex: "charge",
      render: (charge: number) => <span>￥{charge}</span>,
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      let row: any = selectedRows[0];
      if (row) {
        props.onChange({
          resource_type: "learnPath",
          id: row.id,
          title: row.name,
          thumb: row.thumb,
          charge: row.charge,
          original_charge: row.charge,
        });
      }
    },
  };

  return (
    <div className="float-left">
      <div className="float-left mb-15">
        <Input
          value={keywords}
          onChange={(e) => {
            setKeywords(e.target.value);
          }}
          allowClear
          style={{ width: 150 }}
          placeholder="关键字"
        />
        <Button className="ml-10" onClick={resetList}>
          清空
        </Button>
        <Button
          className="ml-10"
          type="primary"
          onClick={() => {
            setPage(1);
            setRefresh(!refresh);
          }}
        >
          筛选
        </Button>
      </div>
      <div className="float-left mb-15">
        <Table
          rowSelection={{
            type: "radio",
            ...rowSelection,
          }}
          loading={loading}
          columns={columns}
          dataSource={list}
          rowKey={(record) => record.id}
          pagination={paginationProps}
        />
      </div>
    </div>
  );
};
