import { creatPage, reset } from "../functions.js";
import { getPage } from "../firebase.js";

export default async function erro() {
	const pageErro = await getPage("pageErro")
	reset('app')
	creatPage(pageErro.Elements)

}