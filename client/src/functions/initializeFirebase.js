import { initializeApp } from "firebase/app"
import firebaseConfig from "../../config/firebaseconfig"
import { getAnalytics } from "firebase/analytics";

// console.log(firebaseConfig)

const initializeFirebase = () => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // initializeApp(firebaseConfig)
}

export default initializeFirebase