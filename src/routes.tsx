import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { AdminRoom } from './pages/AdminRoom.tsx/AdminRoom'
import { Home } from './pages/Home/Home'
import { NewRoom } from './pages/NewRoom/NewRoom'
import { Room } from './pages/Room/Room'


export function Router(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
        <Route path="/admin/rooms/:id" component={AdminRoom} />
        <Route path="/" exact component={Home} />
        {/* <Route render={() => <Redirect to="/" />} /> */}
      </Switch>
    </BrowserRouter>
  )
}