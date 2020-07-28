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
    console.log(data)
    return(
        <>
            <Button
                type="primary"
                style={{ marginBottom: 16 }}
            >
                Add Cause
            </Button>
        </>

    )
}

export default CauseDetail;
