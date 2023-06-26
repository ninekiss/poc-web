import './App.css';
import { rem } from './plugins';

function App() {
  return (
    <>
      {/* 750px 设计稿，1rem === 100px， fontSize 0.12热门即 12px */}
      <div style={{ fontSize: rem(42) }}>Hello</div>
    </>
  );
}

export default App;
