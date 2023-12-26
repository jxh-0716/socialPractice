import ExcelJS from 'exceljs';
import FileSaver from 'file-saver';
import moment from 'moment';
const calcAvgScore = (data) => {
    let totalNum = data.reduce((acc,cur)=>{
        return acc + Number(cur.score)
    },0)
    return totalNum / data.length        
}

export const exportExcel = (data,column,user) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("My Sheet");
    // 添加列标题
    worksheet.columns = column.map(col => ({ header: col.title, key: col.dataIndex, width: 20 }));
    data.forEach((data, index) => {
        const score = JSON.parse(data.score)
        const row = {
            ...data,
            score:score.length===1? score[0].score : calcAvgScore(score),   
            time:moment(data.time).format('YYYY-MM-DD HH:mm')
        };
        worksheet.addRow(row);
    });
    workbook.xlsx.writeBuffer().then(buffer => {
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        FileSaver.saveAs(blob, `${user.name}的成绩单.xlsx`);
    });

}