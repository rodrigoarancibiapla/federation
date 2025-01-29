import React from 'react';

// Importa los componentes remotos
const RemoteButton = React.lazy(() => import('remoteApp/Button'));
const RemoteButtonTS = React.lazy(() => import('remoteApp/ButtonTS'));
const RemoteDivWithButton = React.lazy(() => import('remoteApp/DivWithButton'));

function App() {
  return (
    <div>
      <h1>Host application</h1>

      {/* Usa el componente Button remoto (JavaScript) */}
      <React.Suspense fallback="Loading button...">
        <RemoteButton onClick={() => alert('Button clicked!')}>
          Button (JavaScript)
        </RemoteButton>
      </React.Suspense>

      {/* Usa el componente ButtonTS remoto (TypeScript) */}
      <React.Suspense fallback="Loading ButtonTS...">
        <RemoteButtonTS onClick={() => alert('Button TypeScript clicked!')}>
        Button (TypeScript)
        </RemoteButtonTS>
      </React.Suspense>

      {/* Usa el componente DivWithButton remoto */}
      <React.Suspense fallback="Loading DivWithButton...">
        <RemoteDivWithButton />
      </React.Suspense>
    </div>
  );
}

export default App;