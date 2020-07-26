import '../public/assets/global.css';
import { Layout } from 'antd';
import NavBar from '../components/NavBar';


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
