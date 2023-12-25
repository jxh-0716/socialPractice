import React, { useState,useMemo, useEffect } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useSelector } from 'react-redux';
import PracticeContent from './app';
import './index.less'
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
  };
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
  };
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };
  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    height:'100vh'
  };

const Manager = () => {
    const [status, setStatus] = useState('allPractice')
    const {user} = useSelector(state=>state)
    const menuItems = useMemo(()=>{
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
                key: 'userManager',
                icon: <TeamOutlined />,
                label: '用户管理',
            },
            {
                key: 'managerStudent',
                icon: <UserOutlined />,
                label: '管理学生',
            },
        
        ]
    },[])
    useEffect(()=>{
        console.log(status,user);
        console.log(JSON.parse(localStorage.getItem('user')));
    },[status,user])
    return (
        <div className="manager">
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>学生社会实践管理系统</Header>
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
                <Footer style={footerStyle}>@producer ws</Footer>
            </Layout>
        </div>
    )
}
export default Manager