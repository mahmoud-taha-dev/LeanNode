import {Button, Form, Input, InputNumber} from "antd";

const CountryForm = ({onFinish, initialValues = {}, buttonText}) => {
  
  return (
      <Form
          name="basic"
          labelCol={{lg: {span: 10}, sm: {span: 10}}}
          wrapperCol={{span: 24}}
          initialValues={initialValues}
          onFinish={onFinish}
          autoComplete="off"
          labelAlign="left"
      >
        <Form.Item
            label="Country Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please fill the input'
              },
            ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
            label="Capital"
            name="capital"
            rules={[
              {required: true, message: 'Please fill the input'}
            ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
            label="Flag URL"
            name="flag"
            rules={[
              {required: true, message: 'Please fill the input'},
              {
                pattern: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|svg))/gi,
                message: 'The input is not valid!',
              }
            ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
            label="Region"
            name="region"
            rules={[
              {required: true, message: 'Please fill the input'},
              {
                pattern: /^[A-Za-z\s]*$/,
                message: 'The input is not valid!',
              }
            ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
            label="Population"
            name="population"
            rules={[
              {required: true, message: 'Please fill the input'},
            ]}
        >
          <InputNumber/>
        </Form.Item>
        <Form.Item
            label="Latitude"
            name={['latlng', 'lat']}
            rules={[
              {required: true, message: 'Please fill the input'},
              {
                pattern: /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/ig,
                message: "The input is not valid!"
              }
            ]}
        >
          <InputNumber/>
        </Form.Item>
        <Form.Item
            label="Longitude"
            name={['latlng', 'lng']}
            rules={[
              {required: true, message: 'Please fill the input'},
              {
                pattern: /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/ig,
                message: "The input is not valid!"
              }
            ]}
        
        >
          <InputNumber/>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8, span: 16}}>
          <Button type="primary" htmlType="submit">
            {buttonText}
          </Button>
        </Form.Item>
      </Form>
  );
};

export default CountryForm;
