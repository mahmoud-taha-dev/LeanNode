import {Col, message, Row, Space, Typography, Empty} from 'antd';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import CountryForm from "../../components/CountryForm/CountryForm";
import {fetchCountries, updateCountry} from "../../redux/features/countries/countriesActions";
import {useNavigate} from "react-router-dom";

const {Title} = Typography;

const EditCountry = () => {
  const {data, isDataFetched} = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isDataFetched) {
      fetchCountries(dispatch)
    }
  }, [dispatch, isDataFetched]);
  
  const country = data.find((el) => el.numericCode === id);
  if (!country) return <Empty description='Country Not Found'/>;
  const initialValues = {
    ...country,
    latlng: {lat: country.latlng[0], lng: country.latlng[1]}
  }
  const onFinish = (values) => {
    const newCountry = {
      ...country,
      ...values,
      latlng: Object.values(values.latlng),
    }
    const newData = data.map(country => {
      if (country.numericCode === id) {
        return newCountry
      } else {
        return country
      }
    })
    
    message.success(`${values.name} edited successfully`, 2);
    dispatch(updateCountry(newData));
    setTimeout(() => {
      navigate("/");
    }, 1000)
  };
  
  return (
      <div className='container'>
        <Space direction="horizontal" style={{display: "flex", justifyContent: 'center'}}>
          <Title>Update Country</Title>
        </Space>
        <Row>
          <Col lg={{span: 8, push: 8, pull: 8}}>
            <CountryForm initialValues={initialValues} onFinish={onFinish} buttonText="Update Country"/>
          </Col>
        </Row>
      
      </div>
  );
};

export default EditCountry;
