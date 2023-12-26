import { Table,Button,Modal,Form,Input,message } from "antd"
import { useEffect, useState } from "react"
import { getCompletedPractice,updateScore } from "../../../../service/completedPractice"
import { useSelector } from "react-redux"
const GiveScore = () => {
    const [data,setData] = useState([])
    const {user} = useSelector(state=>state)
    const [modal,setModal] = useState(false)
    const [currentData,setCurrentData] = useState({})
    const fetchData = async () => {
        const res = await getCompletedPractice({ownStudent:''})
        setData(res)
        console.log(res);
    }
    const giveScore = async(val) => {
        let score = []
        if(JSON.parse(currentData.score).length){
            score = JSON.parse(currentData.score)
            score.push({score:val.score,teacher:user.name}); 
            score = JSON.stringify(score)
        }else{
            score = JSON.stringify([{score:val.score,teacher:user.name}])
        }
        console.log(typeof(score));
        const res = await updateScore({
            id:val.id,
            score,
        })
        if(res){
            fetchData()
            setModal(false)
            message.success('打分成功!')
        }else{
            message.error('打分失败!')
        }
    }
    const calcAvgScore = (data) => {
        let totalNum = data.reduce((acc,cur)=>{
            return acc + Number(cur.score)
        },0)
        return totalNum / data.length        
    }
    const columns = [
        {
            title:'活动名称',
            dataIndex:'name',
            align:'center'
        },
        {
            title:'持有学生',
            dataIndex:'ownStudent',
            align:'center'
        },
        {
            title:'分数',
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
            title:'操作',
            render:(val,item)=>{
                return (
                    <>
                        <Button
                        type="primary"
                        onClick={()=>{setModal(true);setCurrentData(item)}}
                        disabled={JSON.parse(item.score).some(item1=>item1.teacher===user.name)}
                        >
                            打分
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
        <div className="give_score">
            <div className="title">实践打分</div>
            <Table
            dataSource={data}
            columns={columns}
            />
            <Modal
            title='打分'
            open={modal}
            onCancel={()=>{setModal(false)}}
            destroyOnClose
            footer={null}
            >
                <Form
                onFinish={(val)=>{
                    giveScore({
                        id:currentData.id,
                        ...val
                    })
                }}
                >
                    <Form.Item
                    label='分数'
                    name='score'
                    >
                        <Input
                        type="number"
                        max={100}
                        min={0}
                        />
                    </Form.Item>
                    <Form.Item
                    wrapperCol={{offset:2}}
                    >
                        <Button type='primary' htmlType='submit'>提交</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
export default GiveScore