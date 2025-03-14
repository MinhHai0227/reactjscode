//component
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

//Page
import GenrePages from '../pages/GenrePages'
import ComicPages from '../pages/ComicPages'
import Home from '../pages/Home'
import Information from '../pages/Information'
import PaymentPage from '../pages/PaymentPage'
import ChapterContainerPage from '../pages/ChapterContainerPage'

//layout
import ChapterLayout from '../layout/ChapterLayout'



const publicRouters = [
   
    {path: '/', component: Home},
    {path: '/the-loai/:category_id', component: GenrePages},
    {path: '/truyen-tranh/:comic_id', component: ComicPages},
    {path: '/login', component: SignIn},
    {path: '/register', component: SignUp},
    {path: '/info', component: Information},
    {path: '/payment', component: PaymentPage},
    {path: '/truyen-tranh/:comic_id/:chapter_id', component: ChapterContainerPage, layout: ChapterLayout},
]

const privateRouters = [
    
]

export {publicRouters, privateRouters}