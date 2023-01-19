import {Col, message, Row, Space, Typography} from 'antd';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {v4 as uuid} from 'uuid';
import CountryForm from "../../components/CountryForm/CountryForm";
import {addNewCountry} from "../../redux/features/countries/countriesActions";

const {Title} = Typography;

const CreateCountry = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onFinish = (values) => {
    const newCountry = {
      ...values,
      latlng: Object.values(values.latlng),
      numericCode: uuid(),
    }
    message.success(`${values.name} added successfully`, 2);
    dispatch(addNewCountry(newCountry));
    setTimeout(() => {
      navigate("/");
    }, 1000)
  };
  
  return (
      <div className="container">
        <Space direction="horizontal" style={{display: "flex", justifyContent: 'center'}}>
          <Title>Create Country</Title>
        </Space>
        <Row>
          <Col lg={{span: 8, push: 8, pull: 8}}>
            <CountryForm onFinish={onFinish} buttonText="Add Country"/>
          </Col>
        </Row>
      </div>
  );
};

export default CreateCountry;
