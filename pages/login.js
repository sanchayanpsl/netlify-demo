// import gql from "graphql-tag";
// import Link from "next/link";
// import apolloClient from "../src/setup/apolloClient";
// import {LOGIN_QUERY} from "../src/setup/login"
// import {REGISTRATION_QUERY} from "../src/setup/registration"
// import React, { useState, useEffect } from "react";
// import Router from "next/router";

// const Login = ({ projects }) => {
//   console.log(projects, "projects");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phone, setPhone] = useState("");

//   const [email, setEmail] = useState("");
//   const [emails, setEmails] = useState("");

//   const [password, setPassword] = useState("");
//   const [passwords, setPasswords] = useState("");

//   const [isLogin, setIsLogin] = useState("false");
//   const [isRegister, setRegister] = useState("");

//   const handleLogin = async () => {
//     const frmdetails = {
//       email: email,
//       password: password,
//     };
//     login(frmdetails);
//     setEmail("");
//     setPassword("");

//     // document.getElementById("loginForm").reset();
//   };

//   const handleRegister = async () => {
//     const frmdetails = {
//       firstName: firstName,
//       lastName: lastName,
//       phone: phone,
//       email: emails,
//       password: passwords,
//     };
//     register(frmdetails);
//     setFirstName("");
//     setLastName("");
//     setPhone("");
//     setEmails("");
//     setPasswords("");
//   };

//   const login = async (frmdetails) => {
//     console.log(frmdetails, "nssggbg");
//     const { data, error } = await apolloClient.mutate({
//       mutation: LOGIN_QUERY,
//       variables: {
//         email: frmdetails.email,
//         password: frmdetails.password,
//       },
//     });

//     if (data) {
//       console.log(data, error, "data");
//       if (data.customerAccessTokenCreate.customerAccessToken.accessToken) {
//         setIsLogin("true");
//         customerData(
//           data.customerAccessTokenCreate.customerAccessToken.accessToken
//         );
//         localStorage.setItem(
//           "accessToken",
//           data.customerAccessTokenCreate.customerAccessToken.accessToken
//         );
//         Router.push("/");
//       }
//     }

//     return {
//       props: {
//         projects: data,
//       },
//     };
//   };

//   const register = async (frmdetails) => {
//     console.log(frmdetails, "nssggbg");
//     const { data, error } = await apolloClient.mutate({
//       mutation: REGISTRATION_QUERY,
//       variables: {
//         firstName: frmdetails.firstName,
//         lastName: frmdetails.lastName,
//         email: frmdetails.email,
//         password: frmdetails.password,
//         phone: frmdetails.phone,
//         acceptsMarketing: false,
//       },
//     });

//     if (data) {
//       console.log(data, error, "data REGISTRATION_QUERY");
//       if (data.customerCreate.customer) {
//         console.log(data.customerCreate.customer, "here");
//         setRegister("Register Successfully");
//         // Router.push("/product");
//       } else {
//         if (data.customerCreate.customerUserErrors.length > 0) {
//           setRegister(data.customerCreate.customerUserErrors[0].message);
//         }
//       }
//     }

//     return {
//       props: {
//         projects: data,
//       },
//     };
//   };

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

//   return (
//     <>
//       <h2>{isLogin}</h2>
//       <h2>{isRegister}</h2>
//       <div
//         className="container"
//         style={{ display: "flex", justifyContent: "center" }}
//       >
//         <div>
//           <h2>LOGIN</h2>

//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br></br>
//           <br></br>

//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br></br>
//           <br></br>

//           <button type="submit" onClick={handleLogin}>
//             Login
//           </button>
//         </div>
//         &nbsp; &nbsp; &nbsp; &nbsp;
//         <div style={{ display: "inlineBlock" }}>
//           <h2>REGISTER</h2>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={firstName}
//             onChange={(e) => {
//               setFirstName(e.target.value);
//             }}
//           />
//           <br></br>
//           <br></br>

//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={(e) => {
//               setLastName(e.target.value);
//             }}
//           />
//           <br></br>
//           <br></br>
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             onChange={(e) => {
//               setPhone(e.target.value);
//             }}
//           />
//           <br></br>
//           <br></br>
//           <input
//             type="email"
//             name="email"
//             value={emails}
//             placeholder="Email"
//             onChange={(e) => setEmails(e.target.value)}
//           />
//           <br></br>
//           <br></br>
//           <input
//             type="password"
//             name="password"
//             value={passwords}
//             placeholder="Password"
//             onChange={(e) => setPasswords(e.target.value)}
//           />
//           <br></br>
//           <br></br>

//           <button type="submit" onClick={handleRegister}>
//             Register
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// // const PROJECTS_QUERY = gql`
// //   query {
// //     collectionByHandle(handle: "frontpage") {
// //       title
// //       products(first: 25) {
// //         edges {
// //           node {
// //             id
// //             title
// //             handle
// //             priceRange {
// //               minVariantPrice {
// //                 amount
// //               }
// //             }
// //             images(first: 5) {
// //               edges {
// //                 node {
// //                   originalSrc
// //                   altText
// //                 }
// //               }
// //             }
// //           }
// //         }
// //       }
// //     }
// //   }
// // `

// // const LOGIN_QUERY = gql`
// //   mutation ($email: String!, $password: String!) {
// //     customerAccessTokenCreate(input: { email: $email, password: $password }) {
// //       customerAccessToken {
// //         accessToken
// //         expiresAt
// //       }
// //       customerUserErrors {
// //         code
// //         field
// //         message
// //       }
// //     }
// //   }
// // `;

// // const REGISTRATION_QUERY = gql`
// //   mutation (
// //     $firstName: String!
// //     $lastName: String!
// //     $email: String!
// //     $password: String!
// //     $phone: String!
// //     $acceptsMarketing: Boolean!
// //   ) {
// //     customerCreate(
// //       input: {
// //         firstName: $firstName
// //         lastName: $lastName
// //         email: $email
// //         phone: $phone
// //         password: $password
// //         acceptsMarketing: $acceptsMarketing
// //       }
// //     ) {
// //       customer {
// //         firstName
// //         lastName
// //         id
// //         email
// //         updatedAt
// //       }
// //       customerUserErrors {
// //         code
// //         field
// //         message
// //       }
// //     }
// //   }
// // `;

// const CUSTOMER_QUERY = gql`
//   query ($customerAccessToken: String!) {
//     customer(customerAccessToken: $customerAccessToken) {
//       firstName
//       lastName
//       email
//     }
//   }
// `;
// export default Login;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import Router from "next/router";

import { userService } from "../services";

export default Login;

// function Login() {
//     const router = useRouter();

//     useEffect(() => {
//         // redirect to home if already logged in
//         console.log(userService.userValue,"userService")
//         if (userService.userValue) {
//             router.push('/');
//         }
//     }, []);

//     // form validation rules
//     const validationSchema = Yup.object().shape({
//         username: Yup.string().required('Username is required'),
//         password: Yup.string().required('Password is required')
//     });
//     const formOptions = { resolver: yupResolver(validationSchema) };

//     // get functions to build form with useForm() hook
//     const { register, handleSubmit, setError, formState } = useForm(formOptions);
//     const { errors } = formState;

//     function onSubmit({ username, password }) {
//         return userService.login(username, password)
//             .then(() => {
//                 // get return url from query parameters or default to '/'
//                 const returnUrl = router.query.returnUrl || '/';
//                 router.push(returnUrl);
//             })
//             .catch(error => {
//                 setError('apiError', { message: error.message || error });
//             });
//     }

//     return (
//         <div className="col-md-6 offset-md-3 mt-5">
//             <div className="alert alert-info">
//                 Username: test<br />
//                 Password: test
//             </div>
//             <div className="card">
//                 <h4 className="card-header">Next.js JWT Login Example</h4>
//                 <div className="card-body">
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div className="form-group">
//                             <label>Username</label>
//                             <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
//                             <div className="invalid-feedback">{errors.username?.message}</div>
//                         </div>
//                         <div className="form-group">
//                             <label>Password</label>
//                             <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
//                             <div className="invalid-feedback">{errors.password?.message}</div>
//                         </div>
//                         <button disabled={formState.isSubmitting} className="btn btn-primary">
//                             {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
//                             Login
//                         </button>
//                         {errors.apiError &&
//                             <div className="alert alert-danger mt-3 mb-0">{errors.apiError?.message}</div>
//                         }
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = {
      username: username,
      password: password,
    };
    if (data) {
      const res = await axios.post(
        "https://capable-zabaione-a505bf.netlify.app/.netlify/functions/users",
        { username: data.username, password: data.password }
      ).catch(function (error) {
        console.log(error);
      });;
      console.log(res)
      if(res){
        var resCode = res.data;
        console.log(resCode, "hi");
        if (resCode.code == 200) {
          Router.push("/");
        } else {
          alert("Some Thing went wrong");
        }
      }else{
          alert("wrong")
      }
      
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20rem",
          padding: "20px",
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
