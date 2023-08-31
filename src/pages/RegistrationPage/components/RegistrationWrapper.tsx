import { Button, Form, Input, Select, InputNumber, DatePicker } from "antd";
import { taskService } from "../../../modules/task/task.service";

import "./RegistrationWrapper.scss";

const onFinishFailed = (errorInfo: unknown) => {
  console.log("Failed:", errorInfo);
};
type FieldType = {
  name?: string;
  lastName?: string;
  password?: string;
};
const { Option } = Select;

export const RegistrationWrapper = () => {
  return (
    <div className="div-registration-wrapper">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={taskService.onFinishRegistrationForm}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
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

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Form.Item label="Years of Experience">
            <Form.Item
              name="inputNumber"
              rules={[
                { required: true, message: "Pleas input years of experience" },
              ]}
            >
              <InputNumber min={0} max={40} />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Date of birth" name="birthDate">
            <DatePicker />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            REGISTER
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
