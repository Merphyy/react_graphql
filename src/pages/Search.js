import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React, { useState } from 'react';

const GET_CHARACTER_LOCATIONS = gql`
	query GetCharacterLocations($name: String!) {
		characters(filter: { name: $name }) {
			results {
				location {
					name
				}
			}
		}
	}
`;

export default function Search() {
	const [name, setName] = useState('');

	const [getLocations, { loading, error, data, called }] = useLazyQuery(
		GET_CHARACTER_LOCATIONS,
		{ variables: { name } }
	);
	return (
		<div>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={() => getLocations()}>Search</button>

			{loading && <div>spinner...</div>}
			{error && <div>error...</div>}
			{data && (
				<ul>
					{data.characters.results.map((e) => {
						return <li>{e.location.name}</li>;
					})}
				</ul>
			)}
		</div>
	);
}
