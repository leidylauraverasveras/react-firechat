import { 
    db,
    googleAuthprovider,
    firebase
   } from './config/firebase';
  
     
    const signInWithGoogle = async () => {
  
      // Coloca el lenguaje de preferencia del dispocitivo 
      firebase.auth() .useDeviceLanguage();
  
      // Incio el procedo de login dentro de un try ... catch 
  
      try{
        await firebase.auth() .signInWithPopup(googleAuthprovider);
  
   } catch (e) {
     console.error(e.message);
     }
  
     };
  
       export default signInWithGoogle;
  