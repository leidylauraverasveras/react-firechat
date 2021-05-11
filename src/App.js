

function App() {
  return (
    <div></div>
  );
}


import { 
  db,
  googleAuthprovider,
  firebase
 } from './config/firebase';

 function App() {
   
  const signInWithGoogle = async () => {

    // Coloca el lenguaje de preferencia del dispocitivo 
    firebase.auth() .useDeviceLanguage();

    // Incio el procedo de login dentro de un try ... catch 

    try{
      await firebase.auth() .signInWithPopup(googleAuthprovider);

 } catch (e) {
   console.error(e.message);
    { 

   };

   // Renderizar el Componente Button 
   return(

    import {
      db,
      googleAuthprovider,
      firebase
     } from './config/firebase';
     import Button from './components/Button';

     return (
      <div>
         <Button onclick= {signInWithGoogle} > sign in with Google</Button>
         </div>
     );
     }
     export default App ;
