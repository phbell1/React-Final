// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where, getDoc, addDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-HBAm6chbSCDTNEmEFDpybNGq8PbHbsI",
  authDomain: "e-commerce57755.firebaseapp.com",
  projectId: "e-commerce57755",
  storageBucket: "e-commerce57755.appspot.com",
  messagingSenderId: "523656244644",
  appId: "1:523656244644:web:9942403032466738a62531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProducts() {
  const response = await getDocs(collection(db, 'products'));
  const listaProds = [];
  response.forEach((dcmt) => listaProds.push({ id: dcmt.id, ...dcmt.data() }));
  return listaProds;
}

export async function getCats(prodCat) {
  const consulta = query(collection(db, 'products'), where('category', '==', prodCat));
  const response = await getDocs(consulta);
  const listaCats = [];
  response.forEach((dcmt) => listaCats.push({ id: dcmt.id, ...dcmt.data() }));
  return listaCats;
}


export const getProduct = async (prodId) => {
  const fbProduct = doc(db, "products", prodId);
  try {
    const response = await getDoc(fbProduct);
    if (response.exists()) {
      const product = { ...response.data(), id: response.id };
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Ha ocurrido un error", error);
  }
};

export async function sendOrder(newOrder){
  const ordersCollection = collection(db, 'orders');
  const docRef = await addDoc(ordersCollection, newOrder);
  return docRef.id;
}