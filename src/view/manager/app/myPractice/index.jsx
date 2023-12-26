import { Table, Button, message, Modal, Form, Input } from 'antd';
import { getAllPractice } from '../../../../service/practice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addTask, getTasks } from '../../../../service/task';
import { addCompletedPractice } from '../../../../service/completedPractice';
import { updatePractice } from '../../../../service/practice';
import moment from 'moment';
import './index.less'
const AllPractice = () => {
    const [data,setData] = useState([])
    const [task,setTask] = useState([])
    const [modal,setModal] = useState(false)
    const {user} = useSelector(state=>state)
    const [curPractice,setCurPractice] = useState({})
    const fetchData = async () => {
        let res = await getAllPractice()
        res = res.filter(item=>{
            const arr = item.joinStudent ? item.joinStudent.split(',') : []
            return arr.includes(user.name)
        })
        setData(res)
        let res1 = await getTasks({owner:user.name})
        setTask(res1)
    }
    const quitPractice = async (val) => {
        const res = await updatePractice({
            id:val.id,
            joinStudent: val.joinStudent.split(',').filter(item=>item!==user.name)
        })
        if(res === 'success'){
            message.success('退选成功')
            fetchData()
        }
        console.log(val);
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
            dataIndex:'owner'
        },
        {
            title:'任务数量',
            key:'taskNum',
            dataIndex:'taskNum'
        },
        {
            title:'已完成数量',
            key:'completeNum',
            render: (val,item) => {
                return task.filter(item1=>item1.praName === item.name).length
            }

        },
        {
            title:'操作',
            key:'action',
            render: (val,item) => {
                return (
                    <>
                        <Button 
                        type="primary"
                        style={{marginRight:'12px'}}
                        disabled={task.filter(item1=>item1.praName === item.name).length === item.taskNum}
                        onClick={()=>{setModal(true);setCurPractice({...item,order:task.filter(item1=>item1.praName === item.name).length+1})}}
                        >
                            {task.filter(item1=>item1.praName === item.name).length === item.taskNum?'已完成':'填写日志'}
                        </Button>
                        <Button 
                        type="primary" 
                        disabled={task.filter(item1=>item1.praName === item.name).length}
                        onClick={()=>{quitPractice(item)}}
                        >
                            {task.filter(item1=>item1.praName === item.name).length?'不可退':'退选'}
                        </Button>

                    </>
                )
            }
        }
    ]
    const taskColumns = [
        {
            title:'活动名称',
            dataIndex:'praName'
        },
        {
            title:'日志次序',
            dataIndex:'order',
        },
        {
            title:'日志内容',
            width:'350px',
            align:'center',
            dataIndex:'content',
            render:(val)=>{
                return <div className='task_content'>{val}</div>
            }

        },
        {
            title:'完成时间',
            dataIndex:'time',
            render:(val)=>{
                return <div className='task_time'>{moment(val).format('YYYY-MM-DD HH:mm')}</div>
            }
        }

    ]
    return (
        <div className="my-practice">
            <div className='title'>
                我的社会实践
            </div>
            <Table
            dataSource={data}
            columns={columns}
            scroll={{ y: 400 }}
            pagination={false}
            />
            <div className='task title'>
                我的日志
            </div>
            <Table
            dataSource={task}
            scroll={{ y: 500 }}
            columns={taskColumns}
            pagination={false}
            />

            <InputModal
            modal={modal}
            setModal={setModal}
            curPractice={curPractice}
            user={user}
            fetchData={fetchData}
            ></InputModal>
        </div>
    )
}
const InputModal = ({modal,setModal,curPractice,user,fetchData}) => {
    console.log(curPractice);
    const onFinish = async (val) => {
        if(curPractice.taskNum === curPractice.order){
            const res = await addCompletedPractice({
                ownStudent:user.name,
                name:curPractice.name,
                teacher:curPractice.owner,
                score:'[]'
            })
        }
        const res = await addTask({
            ...val,
            praName:curPractice.name,
            praId:curPractice.id,
            order:curPractice.order,
            owner:user.name,
        })
        if(res){
            message.success('提交成功!')
            fetchData()
            setModal(false)
        }else{
            message.error('提交失败!')
        }

    }
    const onFinishFailed = () => {

    }

    return (
        <Modal
        open={modal}
        title='填写日志'
        onCancel={()=>setModal(false)}
        footer={false}
        destroyOnClose={true}
        >
            <Form
            name='basic'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
                <Form.Item
                label='日志内容'
                name='content'
                rules={[
                    {
                        required:true,
                        message:'请输入日志内容!'
                    }
                ]}
                >
                    <Input.TextArea style={{height:'200px'}}></Input.TextArea>
                </Form.Item>
                <Form.Item
                wrapperCol={{
                    offset: 4,
                    span: 16,
                }}
                >
                    <Button type="primary" htmlType="submit" style={{ width:'100px' }}>
                        提交
                    </Button>
                </Form.Item>

            </Form>
        </Modal>

    )
}
export default AllPractice