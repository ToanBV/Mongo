import useSWR from 'swr';
import Link from 'next/link';
import { List, Card, Layout, Typography, Button } from 'antd';

const ListItem = List.Item;
const { Title } = Typography;

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Cause(){

    const { data, error } = useSWR(process.env.API_URL + '/causes', fetcher)
    return(
        <Layout className="container cause-page">
            <Link href="/cause/create">
                <Button
                    type="primary"
                    style={{ marginBottom: 16 }}
                >
                    Add Cause
                </Button>
            </Link>
            <Title type="danger" level={3}>List Causes</Title>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 4,
                    xxl: 4,
                }}
                dataSource = {data}
                renderItem = {item => (
                    <ListItem>
                        <Card
                            title={ item.title }
                            hoverable
                            extra={<a href={'/cause/' + item._id} >View detail</a>}
                            cover={<img alt="example" src="https://i.ibb.co/8b2VQXK/ngoc.jpg" />}
                        >
                            {item.description}
                        </Card>
                    </ListItem>
                )}
            />
        </Layout>
    )
}
