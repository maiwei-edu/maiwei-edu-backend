import { useEffect, useState } from "react";
import { Modal, Form, Input, message, Space } from "antd";
import { member } from "../../../api/index";
import { HelperText } from "../../../components";

interface PropsInterface {
  open: boolean;
  id: number;
  onCancel: () => void;
  onSuccess: () => void;
}

export const IOSDialog = (props: PropsInterface) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (props.open) {
      form.setFieldsValue({
        amount: "",
        remark: "",
      });
    }
  }, [props.open]);

  const onFinish = (values: any) => {
    if (loading) {
      return;
    }
    setLoading(true);
    let data = { user_id: props.id };
    Object.assign(data, values);
    member
      .IOSRecharge(data)
      .then((res: any) => {
        setLoading(false);
        message.success("成功！");
        props.onSuccess();
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {props.open ? (
        <Modal
          title="变动iOS余额"
          onCancel={() => {
            props.onCancel();
          }}
          open={true}
          width={800}
          maskClosable={false}
          onOk={() => {
            form.submit();
          }}
          centered
        >
          <div className="float-left mt-30">
            <Form
              form={form}
              name="IOS-dailog"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 21 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="变动额度"
                name="amount"
                rules={[{ required: true, message: "请输入变动额度!" }]}
              >
                <Space align="baseline" style={{ height: 32 }}>
                  <Form.Item
                    name="amount"
                    rules={[{ required: true, message: "请输入变动额度!" }]}
                  >
                    <Input
                      type="number"
                      style={{ width: 300 }}
                      placeholder="请输入变动额度"
                      allowClear
                    />
                  </Form.Item>
                  <div className="ml-10">
                    <HelperText text="正数增加iOS余额，负数减少iOS余额"></HelperText>
                  </div>
                </Space>
              </Form.Item>
              <Form.Item
                label="变动说明"
                name="remark"
                rules={[{ required: true, message: "请输入变动说明!" }]}
              >
                <Input.TextArea
                  style={{ width: 300 }}
                  placeholder="请输入变动说明"
                  allowClear
                  rows={3}
                />
              </Form.Item>
            </Form>
          </div>
        </Modal>
      ) : null}
    </>
  );
};
