import {Menu} from "antd";
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const routes = [{label: "Home", link: '/'}, {label: "Create", link: "/create"}]
  const location = useLocation();
  console.log("mckl;cmed",location.pathname )
  return (
      <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          items={routes.map((route) => {
            const key = route.link;
            return {
              key,
              label: (
                  <Link to={route.link}>
                    {route.label}
                  </Link>
              ),
            };
          })}
      />
  );
};

export default Navbar;
