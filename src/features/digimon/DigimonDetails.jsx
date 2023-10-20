import { useParams } from 'react-router-dom';
import { useGetDigimonByIdQuery } from './digimonSlice';
export default function SingleDigimonView() {
  const { id } = useParams();
  const { data: digimon } = useGetDigimonByIdQuery(id);

  if (!digimon) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{digimon.name}</h1>
      <img src={digimon.images[0].href} />
      <p>{digimon.descriptions[0].description}</p>
      <h2>Skills</h2>
      <ul>
        {digimon.skills.map((skill) => (
          <li key={skill.id}>{skill.skill}</li>
        ))}
      </ul>
    </>
  );
}
