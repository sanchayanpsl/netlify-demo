import gql from "graphql-tag";
import Link from "next/link";
import apolloClient from "../src/setup/apolloClient";
import {LOGIN_QUERY} from "../src/setup/login"
import {REGISTRATION_QUERY} from "../src/setup/registration"
import React, { useState, useEffect } from "react";
import Router from "next/router";

const Checkout = ({ projects }) => {
  console.log(projects, "projects");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState("");

  const [password, setPassword] = useState("");
  const [passwords, setPasswords] = useState("");

  const [isLogin, setIsLogin] = useState("false");
  const [isRegister, setRegister] = useState("");

  useEffect(()=>{
      const token = localStorage.getItem("accessToken")
      console.log(token,"here")
      if(!token){
          Router.push("/login")
      }
  },[])

  const handleLogin = async () => {
    const frmdetails = {
      email: email,
      password: password,
    };
    login(frmdetails);
    setEmail("");
    setPassword("");

    // document.getElementById("loginForm").reset();
  };

  const handleShipping = async () => {
      const customerData = localStorage.getItem("customer")
    const frmdetails = {
      firstName: customerData.firstName,
      lastName: customerData.lastName,
      phone: phone,
      email: emails,
      password: passwords,
    };
    register(frmdetails);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmails("");
    setPasswords("");
  };

  const login = async (frmdetails) => {
    console.log(frmdetails, "nssggbg");
    const { data, error } = await apolloClient.mutate({
      mutation: LOGIN_QUERY,
      variables: {
        email: frmdetails.email,
        password: frmdetails.password,
      },
    });

    if (data) {
      console.log(data, error, "data");
      if (data.customerAccessTokenCreate.customerAccessToken.accessToken) {
        setIsLogin("true");
        // customerData(
        //   data.customerAccessTokenCreate.customerAccessToken.accessToken
        // );
        localStorage.setItem(
          "accessToken",
          data.customerAccessTokenCreate.customerAccessToken.accessToken
        );
        Router.push("/");
      }
    }

    return {
      props: {
        projects: data,
      },
    };
  };

  const register = async (frmdetails) => {
    console.log(frmdetails, "nssggbg");
    const { data, error } = await apolloClient.mutate({
      mutation: REGISTRATION_QUERY,
      variables: {
        firstName: frmdetails.firstName,
        lastName: frmdetails.lastName,
        email: frmdetails.email,
        password: frmdetails.password,
        phone: frmdetails.phone,
        acceptsMarketing: false,
      },
    });

    if (data) {
      console.log(data, error, "data REGISTRATION_QUERY");
      if (data.customerCreate.customer) {
        console.log(data.customerCreate.customer, "here");
        setRegister("Register Successfully");
        // Router.push("/product");
      } else {
        if (data.customerCreate.customerUserErrors.length > 0) {
          setRegister(data.customerCreate.customerUserErrors[0].message);
        }
      }
    }

    return {
      props: {
        projects: data,
      },
    };
  };

//   const customerData = async (frmdetails) => {
//     console.log(frmdetails, "nssggbg");
//     const { data, error } = await apolloClient.query({
//       query: CUSTOMER_QUERY,
//       variables: {
//         customerAccessToken: frmdetails,
//       },
//     });

//     if (data) {
//       console.log(data, error, "data");
//       localStorage.setItem("customer", JSON.stringify(data.customer));
//     }

//     return {
//       props: {
//         projects: data,
//       },
//     };
//   };

  return (
    <>
      <h2>{isLogin}</h2>
      <h2>{isRegister}</h2>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <h2>LOGIN</h2>

          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>

          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>

          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div style={{ display: "inlineBlock" }}>
          <h2>REGISTER</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <br></br>
          <br></br>

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <input
            type="email"
            name="email"
            value={emails}
            placeholder="Email"
            onChange={(e) => setEmails(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="password"
            name="password"
            value={passwords}
            placeholder="Password"
            onChange={(e) => setPasswords(e.target.value)}
          />
          <br></br>
          <br></br>

          <button type="submit" onClick={handleShipping}>
            Add Shipping Address
          </button>
        </div>
      </div>
    </>
  );
};


export default Checkout;
