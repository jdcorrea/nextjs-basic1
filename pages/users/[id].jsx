import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";
import Container from "../../src/layouts/Container";
import PageNotFound from "../../src/components/PageNotFound";

const User = (props) => {
	const router = useRouter();
	const { id } = router.query;
	const user = props.user;

	if (user.id > 0) {
		return (
			<Container title="user">
				<h5>{user.name}</h5>
				<p>username: {user.username}</p>
			</Container>
		);
	} else {
		return (
			<Container title="user">
				<PageNotFound />
			</Container>
		);
	}
};

User.getInitialProps = async (ctx) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/users/${ctx.query.id}`
	);
	const data = await res.json();
	console.log("@data", data);
	const user = data;
	return { user };
};

export default User;
