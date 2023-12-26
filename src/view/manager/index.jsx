import React, { useState,useMemo, useEffect } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import PracticeContent from './app';
import { actionDefaultHandle } from '../../store/actions/user';
import './index.less'
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    fontSize: 20,
    fontWeight: 600,
    backgroundColor: '#4096ff',
  };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
    height:'calc(100vh - 128px)',
    overflow: 'scroll'
  };
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#001529',
  };
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
    height: 64,
  };
  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    height:'100vh'
  };

const Manager = () => {
    const [status, setStatus] = useState('allPractice')
    const {user} = useSelector(state=>state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const menuItems = useMemo(()=>{
        let filterArr = []
        if(user.role=='student'){
            filterArr = ['managerPractice','giveScore','userManager','managerStudent']
        }
        if(user.role=='teacher'){
            filterArr = ['allPractice','myPractice','myScore','userManager']
        }
        if(user.role=='admin'){
            filterArr = ['allPractice','myPractice','myScore','giveScore','managerStudent']
        }
        return [
            {
                key: 'allPractice',
                icon: <PieChartOutlined />,
                label: '全部社会实践',
            },
            {
                key: 'myPractice',
                icon: <DesktopOutlined />,
                label: '我的社会实践',
            },
            {
                key: 'myScore',
                icon: <UserOutlined />,
                label: '我的成绩',
            },
            {
                key: 'managerPractice',
                icon: <FileOutlined />,
                label: '管理社会实践',
            },
            {
                key: 'giveScore',
                icon: <FileOutlined />,
                label: '实践打分',
            },
            {
                key: 'userManager',
                icon: <TeamOutlined />,
                label: '用户管理',
            },
            {
                key: 'managerStudent',
                icon: <UserOutlined />,
                label: '管理学生',
            },
        
        ].filter(item=>!filterArr.includes(item.key))
    },[user.role])
    const quit = () => {
        actionDefaultHandle()(dispatch)
        message.success('退出成功')
        navigate('/admin')
    }
    useEffect(()=>{
        console.log(status,user);
        console.log(JSON.parse(localStorage.getItem('user')));
    },[status,user])
    return (
        <div className="manager">
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>
                    <div className='header'>
                        <div className='header_tit'>学生社会实践管理系统</div>
                        <div className='personal_img'>
                            <div>
                                姓名：{user.name}
                            </div>
                            <div>
                                职位：{user.role}
                            </div>
                            <div className='quit' onClick={quit}>退出</div>
                        </div>
                    </div>
                </Header>
                <Layout>
                    <Sider width="15%" style={siderStyle}>
                        <Menu
                            onClick={(val)=>{setStatus(val.key)}}
                            mode="inline"
                            theme="dark"
                            defaultSelectedKeys={['allPractice']}
                            items={menuItems}
                        />
                    </Sider>
                    <Content style={contentStyle}>
                        {
                            <PracticeContent status={status}/>
                        }
                    </Content>
                </Layout>
                <Footer style={footerStyle}>@producer ws & lpy</Footer>
            </Layout>
        </div>
    )
}
export default Manager