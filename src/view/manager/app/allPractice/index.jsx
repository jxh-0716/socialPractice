import { Table, Button, message,Modal,Form } from 'antd';
import { getAllPractice } from '../../../../service/practice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { updatePractice } from '../../../../service/practice';
const AllPractice = () => {
    const [data,setData] = useState([])
    const {user} = useSelector(state=>state)
    const fetchData = async () => {
        const res = await getAllPractice()
        setData(res)
    }
    const handleJoin = async (val) => {
        const res = await updatePractice({
            id:val.id,
            joinStudent:val.joinStudent ? `${val.joinStudent},${user.name}` : user.name
        })
        if(res){
            fetchData()
            message.success('报名成功!')
        }else{
            message.error('报名失败!')
        }
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
            title:'参与人数',
            key:'join_num',
            dataIndex:'maxNum',
            render: (val,item) => {
                return `${item.joinStudent ? item.joinStudent.split(',').length : 0} / ${val}`
            }
        },
        {
            title:'指导老师',
            key:'teacher',
            dataIndex:'owner'
        },
        {
            title:'任务数量',
            key:'taskNum',
            dataIndex:'taskNum'
        },
        {
            title:'操作',
            key:'action',
            render: (val,item) => {
                return <Button 
                type="primary" 
                disabled={!item.joinStudent ? false : item.joinStudent.split(',').includes(user.name)}
                onClick={()=>{handleJoin(item)}}
                >
                    {(item.joinStudent && item.joinStudent.split(',').includes(user.name))?'已报名':'报名'}
                </Button>
            }
        }
    ]
    return (
        <div className="all-practice">
            <div className='title'>全部社会实践</div>
            <Table
            dataSource={data}
            columns={columns}
            />
        </div>

    )
}
export default AllPractice