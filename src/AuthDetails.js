import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      signOut(auth)
        .then(() => {
          console.log(`Sign Out Successful`);
        })
        .catch((error) => console.log(error));
    };
  }, []);

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed in as ${authUser.email}`}</p>
        </>
      ) : (
        <>
          <p>Not Signed In</p>
        </>
      )}
    </div>
  );
};

export default AuthDetails;
