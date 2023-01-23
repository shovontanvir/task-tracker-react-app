import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

const LoginPage = () => {
  return (
    <Layout>
      <div className="flex flex-col w-1/2 m-auto py-20 bg-sky-800 rounded-xl items-center">
        <h1 className="text-white text-2xl">Welcome To</h1>
        <h1 className="text-6xl text-green-300 font-bold">Task Tracker</h1>
        <p className="text-yellow-300 leading-loose text-2xl tracking-wide">
          Track your tasks in an organized manner
        </p>
        <div className="w-3/4 flex flex-col">
          <input
            type="text"
            placeholder="Username or Email"
            className="p-5 rounded-lg text-slate-800 m-2"
          />
          <input
            type="text"
            placeholder="Enter Password"
            className="p-5 rounded-lg text-slate-800 m-2"
          />
          <div className="ml-3">
            <p className="text-sm text-red-300 font-light text-start mb-5">
              Forgot Password???
            </p>
          </div>
          <Button
            action="Login"
            btnClass="border-green-300 px-20 text-green-400 hover:bg-green-600 rounded-xl"
          />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
