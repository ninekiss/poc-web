import { Form, useActionData, useLoaderData } from 'react-router-dom';

const About = () => {
  const { title, query } = useLoaderData() as {
    title: string;
    query: { aa: string[]; bb: string };
  };
  const actionData = useActionData() as { title: string; comment: string };
  return (
    <div>
      <h1>{title}</h1>
      <div>{JSON.stringify(query)}</div>
      <div>
        {actionData?.comment && (
          <div>
            <h1>Comment</h1>
            <p>{actionData.comment}</p>
          </div>
        )}
      </div>
      <Form method="post" action="/about">
        <textarea name="comment" cols={30} rows={10}></textarea>
        <button type="submit">提交</button>
      </Form>
    </div>
  );
};

export default About;
