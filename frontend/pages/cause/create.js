import { Form, Input, Button } from "antd";

const onFinish = async values => {
    let link = process.env.API_URL + '/causes';
    const res = await fetch(link, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values.cause),
    });

    if (res.status == 201) alert('add ok');
};

export default function create() {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 8,
        },
    };

    const validateMessages = {
        required: "${label} is required!",
    };

    return(
        <div className="margin-tb-15">
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name={["cause", "title"]}
                    label="Title"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["cause", "description"]}
                    label="Description"
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
}
