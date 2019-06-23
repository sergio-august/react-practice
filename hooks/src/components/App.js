import React, { useState } from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList'

const App = () => {
	const [resource, setResource] = useState('posts')
	return (
		<div>
			<h2>Users</h2>
			<UserList />
			<h2>Resources</h2>
			<div>
				<button onClick={() => setResource('posts')}>Posts</button>
				<button onClick={() => setResource('todos')}>Todos</button>
			</div>
			<ResourceList resource={resource} />
		</div>
	)
}

export default App
