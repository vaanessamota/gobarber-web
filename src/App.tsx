import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';

// Colocar o AuthContext Provider por volta dos componentes que vão receber
// as infos providas pelo contexto

// value é o valor inicial para o contexto.
const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
