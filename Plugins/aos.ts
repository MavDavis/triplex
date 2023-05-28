// import AOS from "aos";
 
// import "aos/dist/aos.css";
 
// export default ({ app }) => {
//   app.AOS = AOS.init({
//     once: false,
//   })
// }
import AOS from "aos";
import 'aos/dist/aos.css';
export default defineNuxtPlugin((nuxtApp) => {  
  if (typeof window !== 'undefined') {    
    nuxtApp.AOS = AOS.init();  
  }
});