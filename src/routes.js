import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio'
import SobreMim from './paginas/SobreMim'
import Post from 'paginas/Post'

import Menu from './components/Menu'
import Rodape from "./components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import NaoEncontrada from "paginas/NaoEncontrada";


function AppRoutes() {

  return (
	<BrowserRouter>
		<Menu />

		<Routes>
			<Route path="/" element={<PaginaPadrao />}>
				<Route path="/"  element={<Inicio />} />
				<Route path="/sobremim" element={<SobreMim />} />
			</Route>
			<Route path="/posts/:id/*" element={<Post />} />
			<Route path="*" element={<NaoEncontrada />}/>
		</Routes>

		<Rodape />
	</BrowserRouter>
  );
}

export default AppRoutes;
