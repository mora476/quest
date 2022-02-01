import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Login} from "./Login";
import {Registration} from "./component/registration";
import {MenuAuth} from "./component/menuAuth";
import {TextAjax} from "./component/TextAjax";
import {Home} from "./component/Home";

function App() {
   return(
       <div>
          {/*<MenuAuth IS={"is 20"}>
              <input/>
              <button>PF</button>
          </MenuAuth>*/}
           <TextAjax/>
          {/* <TextAjax/>}
           <Home mmm={"NN"}>
               <input/>
               <input/>
               <input/>
           </Home>
           <Home mmm={"Moc"}>
               <button>test</button>
           </Home>
*/}       </div>
   )
}

export default App;
