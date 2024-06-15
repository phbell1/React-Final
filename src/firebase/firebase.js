// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
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

export async function getProducts(){
    const response = await getDocs(collection(db,'products'));
    const listaProds= [];
    response.forEach((dcmt) => listaProds.push({id: dcmt.id, ...dcmt.data()}));
    return listaProds; 
}

export async function getCats(prodCat){
  const consulta = query(collection(db,'products'), where('category','==',prodCat));
  const response = await getDocs(consulta);
  const listaCats = [];
  response.forEach((dcmt) => listaCats.push({id: dcmt.id, ...dcmt.data()}));
  return listaCats;
}

export async function getProduct(id){
  const consulta = query(collection(db,'products'), where('id','==',id));
  const response = await getDocs(consulta);
  const product = [];
  response.forEach((dcmt) => product.push({id: dcmt.id, ...dcmt.data()}));
  return product;
}



/*export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};*/


