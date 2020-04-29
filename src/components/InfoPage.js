import React from "react";
import { fetchUsers } from "../api/api";

const InfoPage = (props) => {
  const [state, setState] = React.useState({
    loading: false,
    user: [],
    hasData: false,
  });

  React.useEffect(() => {
    const getUsers = () => {
      setState({ ...state, loading: true });
      fetchUsers()
        .then((res) => {
          const users = res.data.data;
          setState({
            ...state,
            loading: false,
            hasData: true,
            user: users,
          });
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    getUsers();
    // eslint-disable-next-line
  }, [true]);

  return (
    <div className="info-page">
      <div className="title">Collaborators</div>
      {state.loading && <p>Loading Please wait..</p>}

      {state.hasData && (
        <React.Fragment>
          {state.user.map((item) => {
            return (
              <div key={item.id} className="user-info flex ci">
                <div className="avatar">
                  <img src={item.avatar} alt="" />
                </div>
                <div>
                  <div className="name">
                    {item.first_name} {item.last_name}
                  </div>
                  <div className="email">{item.email}</div>
                </div>
              </div>
            );
          })}
        </React.Fragment>
      )}
    </div>
  );
};

export default InfoPage;
