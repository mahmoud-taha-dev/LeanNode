import {Table, Avatar, Button, Tooltip} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchCountries} from "../../redux/features/countries/countriesActions";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '25%',
  },
  {
    title: 'Capital',
    dataIndex: 'capital',
    key: 'capital',
    width: '15%',
  },
  {
    title: 'Flag',
    dataIndex: 'flag',
    key: 'flag',
    render: (imgURL) => <Avatar size="small" src={imgURL} shape='square'/>,
    width: '10%',
  },
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
    width: '15%',
  },
  {
    title: 'Population',
    dataIndex: 'population',
    key: 'population',
    width: '15%',
  },
  {
    title: 'Position',
    dataIndex: 'latlng',
    key: 'latlng',
    render: (latlng) => (
        <Button type="link" onClick={() => {
          window.open(`https://maps.google.com/maps?q=${latlng[0]},${latlng[1]}`, "_blank");
        }}>
          Show on Google map
        </Button>
    ),
    width: '20%',
  },
  {
    title: 'Actions',
    dataIndex: 'numericCode',
    key: 'numericCode',
    render: (numericCode) => (
        <Tooltip title="Edit">
          <Link to={`/edit/${numericCode}`}>
            <Button
                type="default"
                shape="circle"
                icon={<EditOutlined/>}/>
          </Link>
        </Tooltip>
    ),
  }
];

const Home = () => {
  const dispatch = useDispatch()
  const {data, isLoadingData, isDataFetched} = useSelector((state) => state.countries);
  
  useEffect(() => {
    if (!isDataFetched) {
      fetchCountries(dispatch)
    }
  }, [dispatch, isDataFetched]);
  
  return (
      <div className="container">
        <Table
            columns={columns}
            dataSource={data}
            bordered
            loading={isLoadingData}
            rowKey={(country) => country.numericCode}
            scroll={{x: "max-content"}}
            pagination={{
              pageSize: 10,
              showSizeChanger: false,
              responsive: true,
              hideOnSinglePage: true,
            }}/>
      </div>
  );
};

export default Home;
