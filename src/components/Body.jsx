import Login from "./Login";
import Browse from "./Browse"
import{BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom'

const Body = ()=>{
    return <>

    <Router>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/browse" element={<Browse/>}>Browse</Route>
        </Routes>
    </Router>
    </>
}

export default Body;