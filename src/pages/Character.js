import React from 'react';
import { useParams } from 'react-router';
import useCharacter from '../hooks/useCharacter';
import './Character.css';

const Character = () => {
	const { id } = useParams();
	const { data, loading, error } = useCharacter(id);
	if (loading) return <div> spinner</div>;
	if (error) return <div> error</div>;
	return (
		<div className="Character">
			<img src={data.character.image} width={750} height={750} />
			<div className="Character-content">
				<h1>{data.character.name}</h1>
				<p>{data.character.gender}</p>
				<div className="Character-episode">
					{data.character.episode.map((e) => {
						return (
							<div>
								{e.name} - <b>{e.episode}</b>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Character;
