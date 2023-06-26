import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const { title } = useLoaderData();

  return <div>{title}</div>;
};

export default Home;
