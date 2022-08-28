import {Routes, Route} from 'react-router-dom';

import NotFoundPage from 'pages/NotFoundPage';

const UseRoutes = () => {

    return (
        <Routes>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}


export default UseRoutes;