import { Layout } from 'antd';
import NavBar from '../components/NavBar';
import '../public/assets/global.less';

const { Header, Content, Footer } = Layout;

export default function MyApp({ Component, pageProps }) {
    return(
        <Layout>
            <NavBar />
            <Layout>
                <Content>
                    <div className="root-app">
                        <Component {...pageProps} />
                    </div>
                </Content>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
    )
}
