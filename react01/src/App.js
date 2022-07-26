import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const App = () => {
    return (
        <Wrapper>
            <Header />
            <Main jin="임명진" work="일하기" />
            <Main jin="임명진" work="놀기" />
            <Main jin="임명진" work="먹기" />
            <Main jin="임명진" />
            <Footer />
        </Wrapper>
    )
}

export default App;