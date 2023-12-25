
import { Table, Button, message } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCompletedPractice, addCompletedPractice } from '../../../../service/completedPractice';
import moment from 'moment';
const MyScore = () => {
    const [data,setData] = useState([])
    const {user} = useSelector(state=>state)
    const fetchData = async () => {
        let res = await getCompletedPractice({
            ownStudent:user.name
        })
        setData(res)
    }
    const handleJoin = async (val) => {
    }
    useEffect(()=>{
        fetchData()
    },[])
    const columns = [
        {
            title:'活动名称',
            key:'name',
            dataIndex:'name'
        },
        {
            title:'指导老师',
            key:'teacher',
            dataIndex:'teacher'
        },
        {
            title:'成绩',
            key:'score',
            dataIndex:'score',
            render: (val,item) => {
                if(val){
                    return val
                }else {
                    return '未评分'
                }

            }
        },
        {
            title:'完成时间',
            key:'completeTime',
            dataIndex:'time',
            render: (val,item) => {
                return moment(val).format('YYYY-MM-DD HH:mm')
            }
        }
    ]
    return (
        <div className="all-practice">
            <Table
            dataSource={data}
            columns={columns}
            />
        </div>
    )
}
export default MyScore