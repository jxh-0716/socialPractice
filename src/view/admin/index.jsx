import './index.less'
import React, { useState } from 'react'
import { Cascader, Input, Select, Space, Form, Button, Radio, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getUser, addUser } from '../../service/user';
import { actionNoticeHandle } from '../../store/actions/user';
import { useDispatch } from 'react-redux';

const Admin = () => {
    const [form] = Form.useForm();
    const [options, setOptions] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onFinish = async (values) => {
        console.log('Success:', values);
        if(options){
            const res = await getUser(values)
            if(res){
                message.success('登陆成功')
                actionNoticeHandle({
                    name:res.username,
                    role:res.role
                })(dispatch)
                localStorage.setItem('user',JSON.stringify({
                    name:res.username,
                    role:res.role
                }))
                navigate('/manager')
            }else{
                message.error('登陆失败')
            }
        }
        else{
            const res = await addUser(values)
            if(res){
                message.success('注册成功')
                setOptions(!options)
            }else{
                message.error('注册失败')
            }
        }
    };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const signFormItemArr = [
        {
            label:'用户名',
            name:'username',
            rules:[
                {
                    required: true,
                    message: '请输入用户名',
                },
            ]
        },
        {
            label:'密码',
            name:'password',
            rules:[
                {
                    required: true,
                    message: '请输入密码',
                },
            ]
        }
    ]
    const loginFormItemArr = [
        {
            label:'用户名',
            name:'username',
            rules:[
                {
                    required: true,
                    message: '请输入用户名',
                },
            ]
        },
        {
            label:'密码',
            name:'password',
            rules:[
                {
                    required: true,
                    message: '请输入密码',
                },
            ]
        },
        {
            label:'确认密码',
            name:'ensurePassword',
            rules:[
                {
                    required: true,
                    message: '请输入密码',
                },
            ]
        },
        {
            label:'身份',
            name:'role',
            children:[
                {
                    label:'学生',
                    value:'student'
                },
                {
                    label:'教师',
                    value:'teacher'
                },
                {
                    label:'管理员',
                    value:'admin'
                }
            ]
        }
    ]

    return (
        <div className="admin">
            <div className='title'>社会实践管理系统</div>
            <div className='login-model'>
                <div className='form'>
                    <div className='form-title'>
                        {
                            !options?'注册':'登陆'
                        }
                    </div>
                    <div className='form_content'>
                        <Form
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 18 }}
                        style={{ width: 450 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                            {
                                (options?signFormItemArr:loginFormItemArr).map((item,index)=>{
                                    return(                                
                                        <Form.Item 
                                        label={item.label}
                                        name={item.name}
                                        rules={item.rules}
                                        key={index}
                                        >
                                            {
                                                ['password','ensurePassword'].includes(item.name)?
                                                <Input.Password />
                                                :
                                                    item.name === 'role'?
                                                    <Radio.Group>
                                                        {
                                                        item.children.map((val,index)=>(
                                                            <Radio key={index} value={val.value}>{val.label}</Radio>
                                                        ))
                                                        }
                                                    </Radio.Group>
                                                    :
                                                    <Input></Input>
                                            }
                                        </Form.Item>
                                    )
                                })
                            }
                            <Form.Item
                            wrapperCol={{
                                offset: 4,
                                span: 16,
                            }}
                            >
                                <Button type="primary" htmlType="submit" style={{ width:'100px' }}>
                                    {
                                        !options?'注册':'登陆'
                                    }
                                </Button>
                            </Form.Item>
                        </Form>
                        <div className='form_bottom'>
                            {
                                options&&
                                <div>没有账号？注册一个</div>
                            }
                            <div className='select_button' onClick={()=>{setOptions(!options)}}>
                                {
                                    options?'注册':'登陆'
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin