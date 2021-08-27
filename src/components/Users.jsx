import React from "react";
import Router from "next/router";

const Users = (props) => {
	const users = props.users;
	return (
		<ul className="list-group">
			{users.map((user) => {
				return (
					<li
						className="list-group-item list-group-item-action"
						key={user.id}
						onClick={(e) => Router.push("/users/[id]", `/users/${user.id}`)}
					>
						<h5>{user.name}</h5>
						<p>email: {user.email}</p>
					</li>
				);
			})}
		</ul>
	);
};

export default Users;
