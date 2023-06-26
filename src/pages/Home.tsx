import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const { title } = useLoaderData() as { title: string };

  return <div>{title}</div>;
};

export default Home;
