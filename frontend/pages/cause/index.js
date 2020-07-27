import useSWR from 'swr';
import { List, Card, Layout } from 'antd';

const ListItem = List.Item;

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Cause(){

    const { data, error } = useSWR(process.env.API_URL + '/causes', fetcher)
    console.log(process.env.API_URL)
    return(
        <List
            grid={{
                gutter: 8,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 8,
            }}
            dataSource = {data}
            renderItem = {item => (
                <ListItem>
                    <Card title={item.title}>{item.description}</Card>
                </ListItem>
            )}
        />
    )
}
