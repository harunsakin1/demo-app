import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Odev from './pages/Odev';
import Odev2 from './pages/Odev2';
import OrnekPage from './pages/OrnekPage';
import UserList from './pages/UserList';
import UserListComponents from './pages/UserListComponents';
import Odev3 from './pages/Odev3';
import UserPage from './pages/UserPage';
import Yarisma from './pages/Yarisma';
import UrunTablosu from './pages/UrunTablosu';
import ProductList from './pages/ProductList';
import {Provider} from 'react-redux';
import store from './store'
import routeSayfasi from './routeSayfasi';
import RouterPage from './routeSayfasi';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
/**
 * Store, tüm uygulama içerisinde kullanılacak olan global stateleri içerisinde barındıran ve bir değişiklik olduğunda bu değişikliği ilgili component'a bildiren ve 
 * provide eden bir yapı kullanır.
 *  Böylece uygulamanın herhangi bir bileşeninden istenilen store(slice) içerisinde yer alan state değerine ulaşılabilir, değiştirilebilir, takibe alınılabilir.
 */
  root.render(
    <Provider store={store}>
        <RouterPage/>
    </Provider>
    
  );

