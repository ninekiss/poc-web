import { Form, useActionData } from 'react-router-dom';

const About = () => {
  const actionData = useActionData();
  return (
    <div>
      <h1>{actionData?.title}</h1>
      <div>
        {actionData?.comment && (
          <div>
            <h1>Comment</h1>
            <p>{actionData.comment}</p>
          </div>
        )}
      </div>
      <Form method="post" action="/about">
        <textarea name="comment" cols="30" rows="10"></textarea>
        <button type="submit">提交</button>
      </Form>
    </div>
  );
};

export default About;
