import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { getuser, verifyLoginDetails } from "../config/action";
import { useDispatch } from "react-redux";
import { auth, signInWithEmailAndPassword } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { db, get, ref, onValue } from "../config/firebase";
import  Button from "./button";
import Input from "./input";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const login = (e) => {
      e.preventDefault();
      let obj = {
        email,
        password,
      };
      signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then((succes) => {
          console.log("User Sign In Successfully ", succes);
          const refrence = ref(db, `/users/${succes.user.uid}`);
  
          onValue(refrence, (snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              let userObj = snapshot.val();
             
            }
          });
  
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          console.log(err.message);
        });
      console.log(obj);
    };
  
    return (
      <>
        <div>
          <h1>Login</h1>
          <form onSubmit={(e) => login(e)}>
            <div>
              <Input
                value={email}
                placeholder="Enter Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                value={password}
                placeholder="Enter Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Button value="login" />
            </div>
          </form>
          <div>
            <Link to="/signup">Register</Link>
          </div>
        </div>
      </>
    );
  }
  export default Login;

