
import { Table, Button, message } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCompletedPractice, addCompletedPractice } from '../../../../service/completedPractice';
import { exportExcel } from './exportExcel';
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
    const calcAvgScore = (data) => {
        let totalNum = data.reduce((acc,cur)=>{
            return acc + Number(cur.score)
        },0)
        return totalNum / data.length        
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
            title:'分数',
            key:'score',
            dataIndex:'score',
            render:(val)=>{
                if(JSON.parse(val).length){
                    const arr = JSON.parse(val)
                    return (
                        <div >
                            {
                                arr.length===1?
                                <div>{arr[0].score}</div>
                                :
                                <div className="score_list">
                                    <div>平均分: {calcAvgScore(arr)}</div>
                                {
                                    arr.map(item=>(
                                        <div className="score_item">
                                            <div>分数: {item.score}</div>
                                            <div>评分人: {item.teacher}</div>
    
                                        </div>
                                    ))
                                    
                                }
                                </div>
                            }
                        </div>
                    )
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
            <div className='title'>未打分</div>
            <Table
            dataSource={data.filter(item=>!JSON.parse(item.score).length)}
            columns={columns}
            />
            <div className='title'>已打分</div>
            <div style={{display:'flex',justifyContent:'end',padding:'12px'}}><Button type='primary' onClick={()=>{exportExcel(data.filter(item=>JSON.parse(item.score).length),columns,user)}}>导出成绩</Button></div>
            <Table
            dataSource={data.filter(item=>JSON.parse(item.score).length)}
            columns={columns}
            />
        </div>
    )
}
export default MyScore