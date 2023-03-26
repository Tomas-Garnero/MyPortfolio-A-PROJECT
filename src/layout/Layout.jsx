import { Footer, Header } from "../components";
import Container from "./LayoutStyles";

const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <main>{children}</main>
            <Footer />
        </Container>
    )
}

export default Layout;