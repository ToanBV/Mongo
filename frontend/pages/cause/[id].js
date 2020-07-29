import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
const fetcher = (...args) => fetch(...args).then(res => res.json())

// const handleAdd => (){

// }

const CauseDetail = () => {
    const router = useRouter();

    const { id } = router.query;
    const link = process.env.API_URL + '/causes/' + id;
    const { data, error } = useSWR(link, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading....</div>

    const originData = [];
    console.log(data.Cause)
    data.Cause.map((item)=>{
        originData.push({
            key: item._id.toString(),
            titel: item.titel,
            description: item.description
        });
    });
    
    const columns = [
        {
            titel: 'title',
            dataIndex: 'title',
            width: '40%',
            editable: true,
        },
        {
            titel: 'description',
            dataIndex: 'description',
            width: '40%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
        }
    ]

    const [form] = Form.useForm();
    const [datas, setData] = useState(originData);

    // mergedColumns = columns.map(col=>{
    //     if(!col.editable){
    //         return col
    //     }
    // })

    return(
        <>
            <Button
                type="primary"
                style={{ marginBottom: 16 }}
            >
                Add Cause
            </Button>
            <Form form={form} component={false}>
                <Table
                    bordered
                    dataSource={datas}
                    columns={columns}
                />
            </Form>
        </>

    )
}

export default CauseDetail;
