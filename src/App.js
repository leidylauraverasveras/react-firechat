import Button from './components/Button';
import { signInWithGoogle, signOut } from './login';

function App() { 
  // Renderizar el componente Button 
  return ( 
    <div>

      {
        user ? ( 
          <>
          <Button onclick={signOut} > Sing in with Google </Button>
          <p> Bienvenidos al chat!</p>
          </>
         ) : <Button onclick= {signInWithGoogle} > sign in with Google</Button>

         }

         </div>
  );
 }
 export default App;
    
