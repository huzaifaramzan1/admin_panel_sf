
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  import { getFirestore, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBXwENPHzB-FfGxXIardKQDWGdgIzs5OnA",
    authDomain: "adminpanel6flags.firebaseapp.com",
    projectId: "adminpanel6flags",
    storageBucket: "adminpanel6flags.firebasestorage.app",
    messagingSenderId: "693595279762",
    appId: "1:693595279762:web:303f5404ed33447b93714b",
    measurementId: "G-DF4QKY7DRV"
  };
  

  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);



document.addEventListener("DOMContentLoaded", () => {
    let updateDataBtn = document.getElementById("updateData"); 
    let inputField = document.querySelector("input[type='text']"); 
    let successMessage = document.getElementById("successMessage"); 

    const updateData = async (id, userInput) => {
        const userDoc = doc(db, "users", id);
        try {
            await updateDoc(userDoc, {
                user: userInput, 
            });
            successMessage.textContent = "Data updated successfully"; 
            console.log("Data updated successfully");
        } catch (error) {
            console.error("Error updating document: ", error);
            successMessage.textContent = "Error updating data"; 
        }
    }

    

    updateDataBtn.addEventListener("click", () => {
        let userInput = inputField.value;
        updateData("1j82r8nb8ZTkRvUbi2en", userInput); 
    });
});
