import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.60';
import htm from 'https://unpkg.com/htm?module'
const html = htm.bind(React.createElement);

const App = () => {
  const [ count, setCount ] = React.useState(0);
  const [ message ] = React.useState(AppInitialState.message);

  return html`
    <div>
      <div>session id: ${AppInitialState.sessionId}</div>
      <div>message from server: ${message}</div>
      <div>
        <button onClick=${() => setCount(count - 1)}>-1</button>
        [ ${count} ]
        <button onClick=${() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  `;
}

ReactDOM.render(
  html`<${App} />`,
  document.getElementById('root')
);
