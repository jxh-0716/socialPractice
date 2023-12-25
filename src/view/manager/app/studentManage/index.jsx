
import { Table, Button, message,Popconfirm,Modal,Form,Input,Radio } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllUser } from '../../../../service/user'; 
import { updateUser } from '../../../../service/user';
import moment from 'moment';
const StudentManage = () => {
    const [data,setData] = useState([])
    const {user} = useSelector(state=>state)
    const [modal,setModal] = useState(false)
    const [currentData, setCurrentData] = useState({})
    const fetchData = async () => {
        let res = await getAllUser()
        res = res.filter(item=>item.role==='student')
        setData(res)
    }
    const handleJoin = async (val) => {
    }
    useEffect(()=>{
        fetchData()
    },[])
    const columns = [
        {
            title:'用户名称',
            key:'username',
            dataIndex:'username'
        },
        {
            title:'密码',
            key:'password',
            dataIndex:'password',
            render:(val,item)=>{
                return '******'
            }

        },
        {
            title:'用户身份',
            key:'role',
            dataIndex:'role',
        },
        {
            title:'操作',
            key:'action',
            render: (val,item) => {
                return <>
                    <Button
                    type="primary"
                    onClick={()=>{setModal(true);setCurrentData(item)}}
                    >
                        编辑
                    </Button>


                </>
            }
        }
    ]
    const updateUserInfo = async (val) => {
        const res = await updateUser({
            username:currentData.username,
            password:val.password || currentData.password,
            role: val.role || currentData.role
        })
        if(res){
            message.success('更改成功!')
            fetchData()
            setModal(false)
        }else{
            message.error('更改失败!')
        }

    }
    return (
        <div className="all-practice">
            <Table
            dataSource={data}
            columns={columns}
            />
            <Modal 
            title='编辑用户信息'
            footer={null}
            open={modal}
            destroyOnClose
            onCancel={()=>{setModal(false)}}
            >
                <Form
                onFinish={(val)=>{
                    updateUserInfo(val)
                }}
                >
                    <Form.Item
                    label='密码'
                    name={'password'}
                    >
                        <Input 
                        defaultValue={currentData.password}
                        ></Input>
                    </Form.Item>
                    <Form.Item
                    label='用户身份'
                    name={'role'}
                    >
                       <Radio.Group
                       defaultValue={currentData.role}
                       >
                            <Radio value={'teacher'}>教师</Radio>
                            <Radio value={'student'}>学生</Radio>
                            <Radio value={'admin'}>管理员</Radio>
                       </Radio.Group>
                    </Form.Item>
                    <Form.Item
                    >
                        <Button type="primary" htmlType="submit" style={{ width:'100px' }}>
                            修改
                        </Button>
                    </Form.Item>

                </Form>


            </Modal>
        </div>
    )
}
export default StudentManage