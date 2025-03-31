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
import UserAdminPage from '../pages/UserAdminPage'
import ComicAdminPage from '../pages/ComicAdminPage'
import CategoriesAdminpage from '../pages/CategorisAdminPage'
import CountryAdminpage from '../pages/CountryAdminPage'
import ChapterAdminpage from '../pages/ChapterAdminPage'
import ChapterImgAdminPage from '../pages/ChapterImgAdminPage'

//layout
import ChapterLayout from '../layout/ChapterLayout'
import AdminLayout from '../layout/AdminLayout'



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
    {path: '/admin/user', component: UserAdminPage, layout: AdminLayout},
    {path: '/admin/comic', component: ComicAdminPage, layout: AdminLayout},
    {path: '/admin/categories', component: CategoriesAdminpage, layout: AdminLayout},
    {path: '/admin/country', component: CountryAdminpage, layout: AdminLayout},
    {path: '/admin/comic/:comic_id', component: ChapterAdminpage, layout: AdminLayout},
    {path: '/admin/chapter/:chapter_id', component: ChapterImgAdminPage, layout: AdminLayout},
]

export {publicRouters, privateRouters}