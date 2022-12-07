import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './/layouts/DefaulLayout/index'
import { History } from './pages/History'
import { Home } from './pages/Home/index'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>  por volta das rotas q a gente tem aplica o / no path para aplicar em todas as rotas
                <Route path='/' element={< Home />} />        para cd rota // so a barra pq nao queremos q o usario digite nada elememnt q vai carregar e o Home
                <Route path='/history' element={<History />} />
            </Route>
        </Routes>
    )
}