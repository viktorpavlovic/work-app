import { Button, Form, Input } from "antd";
import { taskService } from "../../../modules/task/task.service";
import "./LoginWrapper.scss";
import "./login-wrapper.scss";

// test commit comment


const onFinishFailed = (errorInfo: unknown) => {
  console.log("Failed:", errorInfo);
};
type FieldType = {
  username?: string;
  password?: string;
};
export const LoginWrapper = () => {
  return (
    <div className="div-login-wrapper">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={taskService.onFinishLogIn}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            LOG IN
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
