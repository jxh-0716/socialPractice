import AllPractice from "./allPractice"
import MyPractice from './myPractice'
import MyScore from "./myScore"
import ManagerPractice from "./managePractice"
import UserManage from "./userManage"
import StudentManage from "./studentManage"
import GiveScore from "./givescore"
const PracticeContent = ({status}) => {
    return (
        <div>
            {
                status === 'allPractice' &&
                <AllPractice></AllPractice>
            }
            {
                status === 'myPractice' &&
                <MyPractice></MyPractice>
            }
            {
                status === 'myScore' &&
                <MyScore></MyScore>
            }
            {
                status === 'managerPractice' &&
                <ManagerPractice></ManagerPractice>
            }
            {
                status === 'userManager' &&
                <UserManage></UserManage>
            }
            {
                status === 'managerStudent' &&
                <StudentManage></StudentManage>
            }
            {
                status === 'giveScore' &&
                <GiveScore></GiveScore>
            }
        </div>

    )
}
export default PracticeContent