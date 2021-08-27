import React from "react";
import Container from "../src/layouts/Container";
import Users from "../src/components/Users";
import fetch from "isomorphic-fetch";

const Index = (props) => {
	console.log("@props Index:", props);
	return (
		<Container title="home">
			<h1>next</h1>
			<Users users={props.users} />
		</Container>
	);
};

Index.getInitialProps = async (ctx) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	return { users: data };
};

export default Index;
