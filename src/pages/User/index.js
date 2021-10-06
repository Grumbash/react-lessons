import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import SingleUser from "../../components/User";
import { getDogById } from "../../api/dog";
import { getUser, setDog as setDogToRedux } from "../../redux/actions";

function User() {
  const value = useSelector((state) => state.valueField.value);
  const { user, dog } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const setDog = (dog) => {
    dispatch(setDogToRedux(dog));
  };

  const { uuid } = useParams();
  useEffect(() => {
    if (uuid) {
      dispatch(getUser(uuid));
    }
  }, [uuid]);

  useEffect(() => {
    if (user?.id) {
      getDogById(user?.id).then((res) => {
        setDog(res);
      });
    }
  }, [user?.id]);

  if (user) {
    return (
      <>
        <SingleUser user={user}></SingleUser>
        <p>{value}</p>
        <p>dog name is : {dog?.name}</p>
      </>
    );
  } else {
    return <h1 className="user__color_error"> There is no user! </h1>;
  }
}

export default User;
