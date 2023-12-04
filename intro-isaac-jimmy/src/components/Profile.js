import React from 'react'

const Profile = () => {
	return (
		<>
		<p> Our team is comprised of {team.key1.name} & {team.key2.name} </p>
		</>
  )
}
export default Profile


var team = {
	key1: {
		name: "Isaac",
		serviceBranch: "Army",
},
	key2: {
		name: "Jimmy",
		serviceBranch: "Army"
	}
	
}

