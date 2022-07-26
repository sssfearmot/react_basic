const Main = ({jin, work}) => {
    return (
        <main>
            {jin} {work}
        </main>
    )
}

// 전달받은 값이 없을 때 기존으로 전해주는 값
Main.defaultProps = {
    work : '놀기'
}
export default Main;