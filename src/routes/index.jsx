//component
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import LoginToRead from '../components/LoginToRead'
import LockContent from '../components/LockContent'
import ContentList from '../components/ContentList'
//Page
import GenrePages from '../pages/GenrePages'
import ComicPages from '../pages/ComicPages'
import Home from '../pages/Home'
import Information from '../pages/Information'
import PaymentPage from '../pages/PaymentPage'
//layout
import ChapterLayout from '../layout/ChapterLayout'



const publicRouters = [
   
    {path: '/', component: Home},
    {path: '/genre', component: GenrePages},
    {path: '/manhua', component: ComicPages},
    {path: '/login', component: SignIn},
    {path: '/register', component: SignUp},
    {path: '/info', component: Information},
    {path: '/payment', component: PaymentPage},
    {path: '/logintoread', component: LoginToRead, layout: ChapterLayout},
    {path: '/lockcontent', component: LockContent, layout: ChapterLayout},
    {path: '/content', component: ContentList, layout: ChapterLayout},
]

const privateRouters = [
    
]

export {publicRouters, privateRouters}