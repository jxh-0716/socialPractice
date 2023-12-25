import { Table, Button, message, Modal, Form, Input, Popconfirm } from 'antd';
import { getAllPractice } from '../../../../service/practice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { updatePractice, addPractice, deletePractice } from '../../../../service/practice';

const ManagerPractice = () => {
    const [data,setData] = useState([])
    const {user} = useSelector(state=>state)
    const [modal,setModal] = useState(false)
    const [editModal,setEditModal] = useState(false)
    const [currentData,setCurrentData] = useState({})
    const fetchData = async () => {
        const res = await getAllPractice()
        setData(res)
    }
    const handleAdd = async (val) => {
        const res = await addPractice({
            ...val,
            owner:user.name,
            joinStudent:''
        })
        if(res){
            fetchData()
            setModal(false)
            message.success('添加成功!')
        }else{
            message.error('添加失败!')
        }
    }
    const editPractice = async (val) => {
        console.log(val);
        const res = await updatePractice({
            ...val,
            id:currentData.id,
            joinStudent:''
        })
        if(res){
            fetchData()
            setEditModal(false)
            message.success('修改成功!')
        }else{
            message.error('修改失败!')
        }
    }
    const delPractice = async (val) => {
        const res = await deletePractice({
            id:val.id
        })
        if(res){
            fetchData()
            message.success('删除成功!')
        }else{
            message.error('删除失败!')
        }
    }
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
                return (
                    <>
                    <Popconfirm
                    title="确定删除活动吗？"
                    onConfirm={()=>{delPractice(item)}}
                    okText="Yes"
                    cancelText="No"
                >
                        <Button 
                        type="primary" 
                        danger
                        style={{marginRight:'12px'}}
                        disabled={item.joinStudent}
                        >
                            删除
                        </Button>
                </Popconfirm>

                    <Button 
                    type="primary" 
                    disabled={item.joinStudent}
                    onClick={()=>{setEditModal(true);setCurrentData(item)}}
                    >
                        编辑
                    </Button>

                    </>
    
                )
            }
        }
    ]
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="all-practice">
            <div className='title'>管理社会实践</div>
            <div className='top-button'>
                <Button type='primary' onClick={()=>{setModal(true)}}>添加实践活动</Button>
            </div>
            <Table
            dataSource={data}
            columns={columns}
            />
            <Modal
            title='添加实践活动'
            open={modal}
            onCancel={()=>{setModal(false)}}
            destroyOnClose
            footer={null}
            >
                <Form
                labelCol={{span:4}}
                wrapperCol={{span:20}}
                onFinish={(val)=>{handleAdd(val)}}
                onFinishFailed={()=>{message.error('请填写完整信息!')}}
                >
                    <Form.Item
                    label='活动名称'
                    name='name'
                    >
                        <Input 
                        type='text'
                        />
                    </Form.Item>

                    {/* 参与人数  只能输入数字*/}
                    <Form.Item
                    label='参与人数'
                    name='maxNum'
                    >
                        <Input 
                        type='number'
                        />
                    </Form.Item>
                    {/* 任务数量 */}
                    <Form.Item
                    label='任务数量'
                    name='taskNum'
                    >
                        <Input 
                        type='number'
                        />
                    </Form.Item>
                    {/* 提交 */}
                    <Form.Item
                    wrapperCol={{offset:4}}
                    >
                        <Button type='primary' htmlType='submit'>提交</Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
            title='编辑任务数量'
            open={editModal}
            footer={null}
            onCancel={()=>{setEditModal(false)}}
            destroyOnClose
            >
                <Form
                onFinish={(val)=>{editPractice(val)}}
                >
                    <Form.Item
                    label='任务数量'
                    name='taskNum'
                    >
                        <Input 
                        type='number'
                        defaultValue={currentData.taskNum}
                        />
                    </Form.Item>
                    <Form.Item
                    wrapperCol={{offset:4}}
                    >
                        <Button type='primary' htmlType='submit'>提交</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
export default ManagerPractice