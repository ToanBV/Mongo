import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Table, Input, Button, Popconfirm, Form } from 'antd';

const EditableContext = React.createContext();
const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const handleDelete = async key => {
    let url = process.env.API_URL + '/causes/' + key;
    return fetch(url, {
        method: 'delete'
    }).then(res => console.log('detete ok'));
};


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
    originData.push({
        key: data.Cause._id,
        title: data.Cause.title,
        description: data.Cause.description
    });

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            width: '40%',
            editable: true,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            width: '40%',
            editable: true,
        },
        {
            title: 'action',
            dataIndex: 'action',
            render: (text, record) =>
                originData.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <a>Delete</a>
                    </Popconfirm>
                ) : null,
        }
    ]


    // mergedColumns = columns.map(col=>{
    //     if(!col.editable){
    //         return col
    //     }
    // })

    return (
        <>
            <Button
                type="primary"
                style={{ marginBottom: 16 }}
            >
                Add Cause
            </Button>
            <Table
                bordered
                dataSource={originData}
                columns={columns}
            />
        </>

    )
}

export default CauseDetail;
