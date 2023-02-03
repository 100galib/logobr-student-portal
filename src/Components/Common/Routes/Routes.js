import { createBrowserRouter } from "react-router-dom";
import AddStudents from "../../Page/AddStudents/AddStudents";
import ManageStudents from "../../Page/ManageStudents/ManageStudents";
import StudentControlSection from "../../Page/StudentControlSection/StudentControlSection";
import Main from "../Main/Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/studentNavigation',
                element: <StudentControlSection></StudentControlSection>,
                children: [
                    {
                        path:'/studentNavigation/addStudent',
                        element: <AddStudents></AddStudents>
                    },
                    {
                        path: '/studentNavigation/manageStudent',
                        element: <ManageStudents></ManageStudents>
                    }
        
                ]
                
            }
        ]
    }
])