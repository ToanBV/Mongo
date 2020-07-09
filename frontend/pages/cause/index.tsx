import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function cause(){
    const { data, error } = useSWR(process.env.API_URL + '/causes', fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <ul>
        {
            data.map((d)=>{
                return <li key={d._id}>{ d.title } : {d.description}</li>
            })
        }
    </ul>
}
