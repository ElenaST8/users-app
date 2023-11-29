import "./footer.css";
// import FooterItem from "../FooterItem";
// import NavigationItem from "../navigationItem";
import { useEffect, useState } from "react";
// import { UsersContext } from "../../App";

const Footer = () => {
  const [users, setUsers] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [longestNameUser, setLongestNameUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((resp) => {
        setUsers(resp);
        setFetching(false);
      })
      .catch((err) => {
        setFetching(false);
        setFetchError(err);
      });
    console.log("users", users);
    if (users && users.length > 0) {
      const userWithLongestName = users.reduce(
        (max, user) => (user.name.length > max.name.length ? user : max),
        users[0]
      );
      setLongestNameUser(userWithLongestName);
    }
    setLoading(false);
  }, [users]);

  return (
    <footer>
      {/* <FooterItem content="FOOTER" isLowersetext={true} /> */}
      <div className="footer">
        {/* <FooterItem content="Головна" isLowersetext={false} />
        <FooterItem content="Про нас" isLowersetext={false} />
        <FooterItem content="Контакти" isLowersetext={false} />
        <FooterItem content="Блог" isLowersetext={false} /> */}
        {/* <NavigationItem text="navItem" /> */}
        <div
          style={{ color: "black", fontWeight: "bold", fontStyle: "italic" }}
        >
          {loading
            ? "Завантаження даних..."
            : longestNameUser
            ? `Найдовше ім'я: ${longestNameUser.name}`
            : "Жодного користувача не знайдено"}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
