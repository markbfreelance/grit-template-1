import { getCategories } from "../lib/api";
import HeaderClient from "./headerClient";

export default async function Header() {
  const categories = await getCategories();
  return <HeaderClient categories={categories} />;
}
