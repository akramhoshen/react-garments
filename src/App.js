//Import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//Import Css
import './App.css';
import './css/style.css';
import './css/custom.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterPage from './views/layout/MasterPage';
import CreateTask from './views/pages/CreateTask.jsx';
import EditTask from './views/pages/EditTask.jsx';

// import SignIn from './views/pages/SignIn.jsx';
import Dashboard from './views/layout/components/Dashboard.jsx';

//Order Pages
import CreateOrder from './views/pages/Order/CreateOrder.jsx';
//Style Pages
import ManageStyle from './views/pages/Merchandise/style/ManageStyle.jsx';
import CreateStyle from './views/pages/Merchandise/style/CreateStyle.jsx';
import EditStyle from './views/pages/Merchandise/style/EditStyle.jsx';
import ShowStyle from './views/pages/Merchandise/style/ShowStyle.jsx';

//User Pages
import ManageUser from './views/pages/system/user/ManageUser.jsx'
import CreateUser from './views/pages/system/user/CreateUser.jsx'
import EditUser from './views/pages/system/user/EditUser.jsx'
import ViewUser from './views/pages/system/user/ViewUser.jsx'

import ImageUpload from './views/pages/components/ImageUpload.jsx';

//Order pages
import ManageOrder from './views/pages/Order/ManageOrder.jsx';
import ShowOrder from './views/pages/Order/ShowOrder.jsx';

function App() { 
  return(
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SignIn />} />         */}
        <Route path="/home" element={<MasterPage />}>
           <Route index element={<Dashboard />} />
           <Route path='create-task' element={<CreateTask />} />
           <Route path="edit-task/:id" element={<EditTask/>} />                  
        </Route>

        <Route path="/orders" element={<MasterPage />}>
          <Route index element={<ManageOrder />} />
          <Route path="/orders/create" element={<CreateOrder />} />
          {/* <Route path="/orders/:id/edit" element={<EditOrder />} /> */}
          <Route path="/orders/:id" element={<ShowOrder />} />
        </Route>

        <Route path="/styles" element={<MasterPage />}>
          <Route index element={<ManageStyle />} />
          <Route path="/styles/create" element={<CreateStyle />} />
          <Route path="/styles/:id/edit" element={<EditStyle />} />
          <Route path="/styles/:id" element={<ShowStyle />} />
        </Route>

        <Route path="/system" element={<MasterPage />}>
          <Route path="/system/user" element={<ManageUser />} />
          <Route path="/system/user/create" element={<CreateUser />} />
          <Route path="/system/user/edit/:id" element={<EditUser />} />
          <Route path="/system/user/view/:id" element={<ViewUser />} />
        </Route>

        <Route path="/imageup" element={<MasterPage />}>
          <Route index element={<ImageUpload />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;