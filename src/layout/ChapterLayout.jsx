import Footer from "../components/Footer";
import Header from "../components/Header";
import ChapterContainerPage from "../pages/ChapterContainerPage";
function ChapterLayout({children}){
    return(
        <>
        <Header/>
        <ChapterContainerPage> {children} </ChapterContainerPage>
        <Footer/>
        </>
    );
}
export default ChapterLayout