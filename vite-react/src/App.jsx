import Header from "./components/Header"
import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Scan from "./components/Scan"

export default function App() {
    return (
        <div className="box">
            <div className="app--container"> 
                <Header />
                <About />
                <Scan />
                <Contact />
            </div>
        </div>
    )
}

// import Contacts from 'react-native-contacts';

// export default function SavePhoneNumberButton() {
//   const handleSavePhoneNumber = async () => {
//     try {
//       // Request permission if not already granted
//       const granted = await Contacts.requestPermission();
      
//       if (granted === 'authorized') {
//         // Create a new contact
//         const newContact = {
//           phoneNumbers: [
//             {
//               label: 'mobile',
//               number: '+1 (236) 995-2972',
//             },
//           ],
//         };
//         await Contacts.addContact(newContact);
//         console.log('Phone number saved successfully.');
//       } else {
//         console.log('Permission denied.');
//       }
//     } catch (error) {
//       console.error('Error saving phone number:', error);
//     }
//   }
  
//   return (
//     <button onClick={handleSavePhoneNumber}>Save Phone Number</button>
//   );
// }
  
