import { Link } from 'react-router-dom';

export default function DigimonCard({ digimon }) {
  return (
    <li>
      <h3>{digimon.name}</h3>
      <img src={digimon.image} />
      <Link to={`/digimon/${digimon.id}`}> See Details</Link>
    </li>
  );
}
