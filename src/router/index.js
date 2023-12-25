import { Routes, Route } from "react-router-dom";
import Admin from "../view/admin";
import Manger from "../view/manager";
const Router = () => {
    const routerArr = [
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        },
        {
            path: '/manager',
            name: 'manager',
            component: Manger
        },
    ]
    return (
        <Routes>
            {
                routerArr.map((item, index) => {
                    return (
                        <Route path={item.path} element={<item.component />} key={index} />
                    )
                })
            }
            <Route path="*" element={<Admin/>}/>
        </Routes>
    )
}
export default Router;