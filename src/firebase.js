import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxco4S-Xmt8uYqwRoedaZBpHSOsw-FwNw",
  authDomain: "netflix-clone-34db0.firebaseapp.com",
  projectId: "netflix-clone-34db0",
  storageBucket: "netflix-clone-34db0.appspot.com",
  messagingSenderId: "524839999271",
  appId: "1:524839999271:web:0a188e64dcd3d709da7b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    alert("User registered successfully");
  } catch (error) {
    console.error("Error signing up:", error);
    alert("Error signing up: " + error.message);
  }
};

const login = async (email, password) => { // Added email and password parameters
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("User logged in successfully"); // Added success message
  } catch (error) {
    console.error("Error logging in:", error);
    alert("Error logging in: " + error.message); // Improved error message
  }
};

const logout = async () => { // Made logout async for consistency
  try {
    await signOut(auth);
   
    alert("User logged out successfully"); // Added success message
  } catch (error) {
    console.error("Error logging out:", error);
    alert("Error logging out: " + error.message); // Improved error message
  }
};

export { auth, db, login, signup, logout };



// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { addDoc, collection, getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAxco4S-Xmt8uYqwRoedaZBpHSOsw-FwNw",
//   authDomain: "netflix-clone-34db0.firebaseapp.com",
//   projectId: "netflix-clone-34db0",
//   storageBucket: "netflix-clone-34db0.appspot.com",
//   messagingSenderId: "524839999271",
//   appId: "1:524839999271:web:0a188e64dcd3d709da7b02"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const db = getFirestore(app);

// const signup = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "users"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//     alert("User registered successfully");
//   } catch (error) {
//     console.error("Error signing up:", error);
//     alert("Error signing up: " + error.message);
//   }
// };



// const login = async() =>{
//     try{
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch(error){
//       console.log("This is error", error);
//       alert(error);
//     }
// }



// const logout = async () => {
//    await signOut(auth);
// }

// export {auth, db, login, signup, logout};







// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAxco4S-Xmt8uYqwRoedaZBpHSOsw-FwNw",
//   authDomain: "netflix-clone-34db0.firebaseapp.com",
//   projectId: "netflix-clone-34db0",
//   storageBucket: "netflix-clone-34db0.appspot.com",
//   messagingSenderId: "524839999271",
//   appId: "1:524839999271:web:0a188e64dcd3d709da7b02"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)
// const db = getFirestore()

// const signup = async(name,email,password) =>{
//    try{
//     const res = await createUserWithEmailAndPassword(auth,email,password);
//     const user = res.user;
//     await addDoc(collection(db, user), {
//       uid:user.uid,
//       name,
//       authProvider:"local",
//       email,
//     })
//    } catch(error){
//          console.log(error);
//          alert(error)
//    }
// }